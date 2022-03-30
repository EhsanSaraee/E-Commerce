import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';
import { commerce } from '../../../lib/commerce';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart }) => {
   const [activeStep, setActiveStep] = useState(0);
   const [checkoutToken, setCheckoutToken] = useState(null);
   const [shippingData, setShippingData] = useState({});
   const mui = useStyles();

   useEffect(() => {
      const tokenGenerator = async () => {
         try {
            const token = await commerce.checkout.generateToken(cart.id, {
               type: 'cart',
            });
            setCheckoutToken(token);
         } catch (error) {
            console.log(error);
         }
      };

      tokenGenerator();
   }, [cart]);

   const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
   const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

   const next = (data) => {
      setShippingData(data);
      nextStep();
   };

   const Confirmation = () => <>confirmation</>;

   const Form = () =>
      activeStep === 0 ? (
         <AddressForm checkoutToken={checkoutToken} next={next} />
      ) : (
         <PaymentForm />
      );

   return (
      <>
         <div className={mui.toolbar} />
         <main className={mui.layout}>
            <Paper className={mui.paper}>
               <Typography variant="h4" align="center">
                  Checkout
               </Typography>
               <Stepper activeStep={activeStep} className={mui.stepper}>
                  {steps.map((step) => (
                     <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                     </Step>
                  ))}
               </Stepper>
               {activeStep === steps.length ? (
                  <Confirmation />
               ) : (
                  checkoutToken && <Form />
               )}
            </Paper>
         </main>
      </>
   );
};

export default Checkout;
