import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';

import './App.css'


function App() {
 

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<ProductList/>}></Route>
        <Route path="/products/:id" element={<ProductDetails/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
      </Routes>
  )
}

export default App
