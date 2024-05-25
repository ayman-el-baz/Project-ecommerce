import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import EnSavoirPlus from './components/EnSavoirPlus'
import ContactUs from './components/ContactUs'
import Home from './components/ChoixNavbar/Home'
import Localisation from './components/Localisation'
import NotFound from './components/NotFound'
import Inscription from './components/registre/Inscription'
import Connexion from './components/registre/Connexion'
import ForgetPassword from './components/registre/ForgetPassword'
import Admin from './components/Admin/Admin'
import AddProducts from './components/Admin/Products/AddProducts'
import Produit from './components/Produit'
import AllProducts from './components/Admin/Products/AllProducts'
import Profil from './components/Profile/Profil'
import ModifierProfil from './components/Profile/ModifierProfil'
import { CartProvider } from './components/ContextCart'



export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about-us' element={<EnSavoirPlus />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/localisation' element={<Localisation />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/Connexion' element={<Connexion />} />
          <Route path='/Inscription' element={<Inscription />} />
          <Route path='/ForgetPass' element={<ForgetPassword />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Admin/AddProducts' element={<AddProducts />} />
          <Route path='/Products/:id' element={<Produit />} />
          <Route path='/AllProducts' element={<AllProducts />} />
          <Route path='/profil/:id' element={<Profil />} />
          <Route path='/modifier/:id' element={<ModifierProfil />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}
