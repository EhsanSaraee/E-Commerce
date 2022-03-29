import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
} from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({ image, name, quantity, line_total }) => {
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
               <Button type="button" size="small">
                  -
               </Button>
               <Typography>&nbsp;{quantity}&nbsp;</Typography>
               <Button type="button" size="small">
                  +
               </Button>
            </div>
            <Button variant="contained" type="button" color="secondary">
               Remove
            </Button>
         </CardActions>
      </Card>
   );
};

export default CartItem;
