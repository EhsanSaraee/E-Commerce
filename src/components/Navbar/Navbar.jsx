import {
   Badge,
   IconButton,
   Toolbar,
   AppBar,
   Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
   const mui = useStyles();
   const { pathname } = useLocation();

   return (
      <>
         <AppBar position="fixed" className={mui.appBar} color="inherit">
            <Toolbar>
               <Typography
                  component={Link}
                  to="/"
                  variant="h6"
                  color="inherit"
                  className={mui.title}
               >
                  <img
                     className={mui.image}
                     src={logo}
                     alt="E-Commerce"
                     height="25px"
                  />
                  E-Commerce
               </Typography>
               <div className={mui.grow} />
               {pathname === '/' && (
                  <section className={mui.button}>
                     <IconButton
                        component={Link}
                        to="/cart"
                        aria-label="Show cart items"
                        color="inherit"
                     >
                        <Badge badgeContent={totalItems} color="secondary">
                           <ShoppingCart />
                        </Badge>
                     </IconButton>
                  </section>
               )}
            </Toolbar>
         </AppBar>
      </>
   );
};

export default Navbar;
