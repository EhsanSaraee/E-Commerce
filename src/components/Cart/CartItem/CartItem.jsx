import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
} from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({
   image,
   name,
   quantity,
   line_total,
   removeFromCartHandler,
   updateCartQuantityHandler,
   id,
}) => {
   const mui = useStyles();

   return (
      <Card>
         <CardMedia image={image.url} alt={name} className={mui.media} />
         <CardContent className={mui.cardContent}>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="h4">{line_total.formatted_symbol}</Typography>
         </CardContent>
         <CardActions className={mui.cartActions}>
            <div className={mui.buttons}>
               <Button
                  type="button"
                  size="small"
                  onClick={() => updateCartQuantityHandler(id, quantity - 1)}
               >
                  -
               </Button>
               <Typography>&nbsp;{quantity}&nbsp;</Typography>
               <Button
                  type="button"
                  size="small"
                  onClick={() => updateCartQuantityHandler(id, quantity + 1)}
               >
                  +
               </Button>
            </div>
            <Button
               variant="contained"
               type="button"
               color="secondary"
               onClick={() => removeFromCartHandler(id)}
            >
               Remove
            </Button>
         </CardActions>
      </Card>
   );
};

export default CartItem;
