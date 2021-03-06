import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({
   cart,
   emptyCartHandler,
   removeFromCartHandler,
   updateCartQuantityHandler,
}) => {
   const mui = useStyles();

   const EmptyCart = () => (
      <Typography variant="subtitle1">
         You have no items in your shopping cart so... <br />
         <Link to="/" className={mui.link}>
            Let's adding some
         </Link>
      </Typography>
   );

   const FilledCart = () => (
      <>
         <Grid container spacing={3}>
            {cart.line_items?.map((item) => (
               <Grid item key={item.id} xs={12} sm={4}>
                  <CartItem
                     {...item}
                     removeFromCartHandler={removeFromCartHandler}
                     updateCartQuantityHandler={updateCartQuantityHandler}
                  />
               </Grid>
            ))}
         </Grid>
         <section className={mui.cardDetails}>
            <Typography variant="h4">
               Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
               <Button
                  className={mui.emptyButton}
                  size="large"
                  type="button"
                  variant="contained"
                  color="secondary"
                  onClick={emptyCartHandler}
               >
                  Empty Cart
               </Button>
               <Button
                  className={mui.checkoutButton}
                  size="large"
                  type="button"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/checkout"
               >
                  Checkout
               </Button>
            </div>
         </section>
      </>
   );

   if (!cart.line_items) return 'Loading...';

   return (
      <Container>
         <div className={mui.toolbar} />
         <Typography className={mui.title} variant="h3" gutterBottom>
            Your Shopping Cart
         </Typography>
         {!cart?.line_items?.length ? <EmptyCart /> : <FilledCart />}
      </Container>
   );
};

export default Cart;
