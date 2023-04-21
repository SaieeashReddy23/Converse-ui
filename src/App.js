import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DashboardPage, LoginPage, ErrorPage } from './pages'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route index path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  )
}

export default App
