import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
   const mui = useStyles();

   return (
      <main className={mui.content}>
         <div className={mui.toolbar} />
         <Grid container justifyContent="center" spacing={4}>
            {products.map((product) => {
               return (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                     <Product {...product} onAddToCart={onAddToCart} />
                  </Grid>
               );
            })}
         </Grid>
      </main>
   );
};

export default Products;
