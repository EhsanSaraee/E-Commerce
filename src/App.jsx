import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cart, Navbar, Products } from './components';
import { commerce } from './lib/commerce';

const App = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState({});

   const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);
   };

   const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
   };

   const addToCartHandler = async (productID, quantity) => {
      const item = await commerce.cart.add(productID, quantity);
      setCart(item.cart);
   };

   useEffect(() => {
      fetchProducts();
      fetchCart();
   }, []);

   return (
      <>
         <Navbar totalItems={cart.total_items} />
         <Routes>
            <Route
               path="/"
               element={
                  <Products
                     products={products}
                     onAddToCart={addToCartHandler}
                  />
               }
            />
            <Route path="/cart" element={<Cart cart={cart} />} />
         </Routes>
      </>
   );
};

export default App;
