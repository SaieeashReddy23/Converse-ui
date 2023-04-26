import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { LoginPage, ErrorPage } from './pages'
import { Navigate } from 'react-router-dom'

import {
  SharedLayout,
  Dashboard,
  Materials,
  Quotations,
  Orders,
  ASN,
  GRN,
  User,
} from './pages/dashboard'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const redirect = true
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Materials />} />
          <Route path="materials" element={<Dashboard />} />
          <Route path="quotations" element={<Quotations />} />
          <Route path="orders" element={<Orders />} />
          <Route path="asn" element={<ASN />} />
          <Route path="grn" element={<GRN />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  )
}

export default App
