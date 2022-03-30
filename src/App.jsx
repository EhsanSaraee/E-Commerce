import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cart, Checkout, Navbar, Products } from './components';
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
      const { cart } = await commerce.cart.add(productID, quantity);
      setCart(cart);
   };

   const updateCartQuantityHandler = async (productID, quantity) => {
      const { cart } = await commerce.cart.update(productID, { quantity });
      setCart(cart);
   };

   const removeFromCartHandler = async (productID) => {
      const { cart } = await commerce.cart.remove(productID);
      setCart(cart);
   };

   const emptyCartHandler = async () => {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
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
                     addToCartHandler={addToCartHandler}
                  />
               }
            />
            <Route
               path="/cart"
               element={
                  <Cart
                     cart={cart}
                     emptyCartHandler={emptyCartHandler}
                     removeFromCartHandler={removeFromCartHandler}
                     updateCartQuantityHandler={updateCartQuantityHandler}
                  />
               }
            />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
         </Routes>
      </>
   );
};

export default App;
