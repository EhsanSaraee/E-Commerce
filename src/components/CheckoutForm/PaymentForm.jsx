import Review from './Review';
import { loadStripe } from '@stripe/stripe-js';
import { Button, Divider, Typography } from '@material-ui/core';
import {
   CardElement,
   Elements,
   ElementsConsumer,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
   checkoutToken,
   backStep,
   nextStep,
   captureCheckoutHandler,
   shippingData: {
      firstName,
      lastName,
      email,
      address1,
      city,
      shippingSubdivision,
      zip,
      shippingCountry,
      shippingOption,
   },
}) => {
   const handleSubmit = async (event, elements, stripe) => {
      event.preventDefault();

      if (!elements || !stripe) return;

      const cardElement = elements.getElement(CardElement);

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card: cardElement,
      });

      if (error) {
         console.log('[error]', error);
      } else {
         const orderData = {
            line_items: checkoutToken.live.line_items,
            customer: {
               firstname: firstName,
               lastname: lastName,
               email: email,
            },
            shipping: {
               name: 'International',
               street: address1,
               town_city: city,
               county_state: shippingSubdivision,
               postal_zip_code: zip,
               country: shippingCountry,
            },
            fulfillment: { shipping_method: shippingOption },
            payment: {
               gateway: 'stripe',
               stripe: {
                  payment_method_id: paymentMethod.id,
               },
            },
         };

         captureCheckoutHandler(checkoutToken.id, orderData);

         nextStep();
      }
   };

   return (
      <>
         <Review checkoutToken={checkoutToken} />
         <Divider />
         <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>
            Payment method
         </Typography>
         <Elements stripe={stripePromise}>
            <ElementsConsumer>
               {({ elements, stripe }) => (
                  <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                     <CardElement />
                     <br /> <br />
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between',
                        }}
                     >
                        <Button variant="outlined" onClick={backStep}>
                           Back
                        </Button>
                        <Button
                           type="submit"
                           variant="contained"
                           disabled={!stripe}
                           color="primary"
                        >
                           Pay{' '}
                           {checkoutToken.live.subtotal.formatted_with_symbol}
                        </Button>
                     </div>
                  </form>
               )}
            </ElementsConsumer>
         </Elements>
      </>
   );
};

export default PaymentForm;
