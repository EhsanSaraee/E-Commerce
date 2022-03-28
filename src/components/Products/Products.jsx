import { Grid } from '@mui/material';
import Product from './Product/Product';

const products = [
   {
      id: 1,
      name: 'Shoes',
      description: 'Running shoes',
      price: '$15',
      image: 'https://5.imimg.com/data5/CI/DI/GY/SELLER-32493408/00-500x500.jpg',
   },
   {
      id: 2,
      name: 'MacBook',
      description: 'Apple macbook',
      price: '$45',
      image: 'https://i.expansys.net/img/b/368007/apple-macbook-pro-14-inch-2021.jpg',
   },
];

const Products = () => {
   return (
      <main>
         <Grid container justifyContent="center" spacing={4}>
            {products.map((product) => (
               <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product {...product} />
               </Grid>
            ))}
         </Grid>
      </main>
   );
};

export default Products;
