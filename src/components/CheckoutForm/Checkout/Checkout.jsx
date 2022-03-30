import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';
import { commerce } from '../../../lib/commerce';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart }) => {
   const [activeStep, setActiveStep] = useState(0);
   const mui = useStyles();

   const Confirmation = () => <>confirmation</>;

   const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

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
               {activeStep === steps.length ? <Confirmation /> : <Form />}
            </Paper>
         </main>
      </>
   );
};

export default Checkout;
