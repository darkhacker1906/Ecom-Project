import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { store } from './Redux/Store';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';
import ContactUs from './Pages/ContactUs';
import Faq from './Pages/Faq';
import Help from './Pages/Help';
import Shop from './Pages/Shop';
import Detail from './Pages/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/checkout" element={<CheckOut/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path="/faq" element={<Faq/>}/>
    <Route path="/help" element={<Help/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/detail" element={<Detail/>}/>
  </Routes>
  </BrowserRouter>
</Provider>
</>

);