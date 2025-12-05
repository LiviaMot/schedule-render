import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer/index'
import Customers from './pages/Customers'
import Login from './pages/Login'
import CreateCustomer from './pages/Customers/create'
import UpdateCustomer from './pages/Customers/update'
import Services from './pages/Services/index'
import CreateService from './pages/Services/create'
import { AuthProvider } from './auth/Context'
import PrivateRoute from './Routes/PrivateRoute'
import UpdateService from './pages/Services/update'

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to="/login" replace />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create/customer' element={<CreateCustomer />} />

          <Route element={<PrivateRoute />}>
            <Route path='/customers' element={<Customers />} />
            <Route path='/update/customer' element={<UpdateCustomer />} />
            
            {/* Services */}
            <Route path='/services' element={<Services />} />
            <Route path='/create/service' element={<CreateService />} />
            <Route path='/update/service' element={<UpdateService />} />
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App