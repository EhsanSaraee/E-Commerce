import { Grid, TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

const FormInput = ({ name, label, required }) => {
   const { control } = useFormContext();

   return (
      <Grid item xs={12} sm={6}>
         <Controller
            as={<TextField />}
            control={control}
            defaultValue=""
            fullWidth
            name={name}
            label={label}
            required={required}
         />
      </Grid>
   );
};

export default FormInput;
