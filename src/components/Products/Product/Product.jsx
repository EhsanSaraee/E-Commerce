import {
   Card,
   CardMedia,
   CardContent,
   CardActions,
   Typography,
   IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ name, description, price, image }) => {
   const mui = useStyles();

   return (
      <Card className={mui.root}>
         <CardMedia className={mui.media} image={image} title={name} />
         <CardContent>
            <section className={mui.cardContent}>
               <Typography variant="h5" gutterBottom>
                  {name}
               </Typography>
               <Typography variant="h5">{price}</Typography>
            </section>
            <Typography variant="body2" color="textSecondary">
               {description}
            </Typography>
         </CardContent>
         <CardActions disableSpacing className={mui.cardActions}>
            <IconButton aria-label="Add to Cart">
               <AddShoppingCart />
            </IconButton>
         </CardActions>
      </Card>
   );
};

export default Product;
