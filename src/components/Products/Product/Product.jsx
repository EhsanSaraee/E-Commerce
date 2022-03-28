import {
   Card,
   CardMedia,
   CardContent,
   CardActions,
   Typography,
   IconButton,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import {
   CardActionsStyled,
   CardContentWrapper,
   CardMediaStyles,
   RootCard,
} from './styles';

const Product = ({ name, description, price, image }) => {
   return (
      <RootCard>
         <CardMediaStyles image={image} title={name} />
         <CardContent>
            <CardContentWrapper>
               <Typography variant="h5" gutterBottom>
                  {name}
               </Typography>
               <Typography variant="h5">{price}</Typography>
            </CardContentWrapper>
            <Typography variant="body2" color="textSecondary">
               {description}
            </Typography>
         </CardContent>
         <CardActionsStyled disableSpacing>
            <IconButton aria-label="Add to Cart">
               <AddShoppingCart />
            </IconButton>
         </CardActionsStyled>
      </RootCard>
   );
};

export default Product;
