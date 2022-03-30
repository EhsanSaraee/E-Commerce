import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cart, Checkout, Navbar, Products } from './components';
import { commerce } from './lib/commerce';

const App = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState({});
   const [order, setOrder] = useState({});
   const [errorMessage, setErrorMessage] = useState('');

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

   const refreshCart = async () => {
      const newCart = await commerce.cart.refresh();
      setCart(newCart);
   };

   const captureCheckoutHandler = async (checkoutTokenId, newOrder) => {
      try {
         const incomingOrder = await commerce.checkout.capture(
            checkoutTokenId,
            newOrder
         );
         setOrder(incomingOrder);
         refreshCart();
      } catch (error) {
         setErrorMessage(error.data.error.message);
      }
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
            <Route
               path="/checkout"
               element={
                  <Checkout
                     cart={cart}
                     order={order}
                     error={errorMessage}
                     captureCheckoutHandler={captureCheckoutHandler}
                  />
               }
            />
         </Routes>
      </>
   );
};

export default App;
