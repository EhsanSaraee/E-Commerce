import {
   Badge,
   IconButton,
   Toolbar,
   AppBar,
   Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
   const mui = useStyles();

   return (
      <>
         <AppBar position="fixed" className={mui.appBar} color="inherit">
            <Toolbar>
               <Typography variant="h6" color="inherit" className={mui.title}>
                  <img
                     className={mui.image}
                     src={logo}
                     alt="E-Commerce"
                     height="25px"
                  />
                  E-Commerce
               </Typography>
               <div className={mui.grow} />
               <section className={mui.button}>
                  <IconButton aria-label="Show cart items" color="inherit">
                     <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                     </Badge>
                  </IconButton>
               </section>
            </Toolbar>
         </AppBar>
      </>
   );
};

export default Navbar;
