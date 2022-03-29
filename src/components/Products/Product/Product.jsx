import {
   Card,
   CardMedia,
   CardContent,
   CardActions,
   Typography,
   IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import parse from 'html-react-parser';
import useStyles from './styles';

const Product = ({ name, description, price, image, onAddToCart, id }) => {
   const mui = useStyles();

   return (
      <Card className={mui.root}>
         <CardMedia className={mui.media} image={image.url} title={name} />
         <CardContent>
            <section className={mui.cardContent}>
               <Typography variant="h5" gutterBottom>
                  {name}
               </Typography>
               <Typography variant="h6">
                  {price.formatted_with_symbol}
               </Typography>
            </section>
            <Typography component="span" variant="body2" color="textSecondary">
               {parse(description)}
            </Typography>
         </CardContent>
         <CardActions disableSpacing className={mui.cardActions}>
            <IconButton
               aria-label="Add to Cart"
               onClick={() => onAddToCart(id, 1)}
            >
               <AddShoppingCart />
            </IconButton>
         </CardActions>
      </Card>
   );
};

export default Product;
