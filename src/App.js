import { Navbar } from './components'
import { HandleContext } from './hooks/getContext'
import { HandleDropDown } from './hooks/getContext'

import { Route, Routes, Navigate } from 'react-router-dom'
import { Checkout, Contact, Signup, Home, ShopReview } from './pages'
import { CartCartProvider } from './context/drop-menu'
import { useLocation } from 'react-router-dom'


const App = () => {
  const { currentUser } = HandleContext()
  const { setDropCart } = HandleDropDown()

const location = useLocation()

  return (
    <section className="px-5" onClick={() => setDropCart(false)}>
      <CartCartProvider>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route
              path="/sign"
              element={
                !currentUser ? <Signup /> : <Navigate to="/" state={{path: location.pathname}} />
        
              
              }
            
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop/*" element={<ShopReview />} />
            <Route
              path="/checkout"
              element={
                currentUser ? <Checkout /> : <Navigate to="/sign" replace state={{path: location.pathname}} />
      
              }
            />
          </Route>

          <Route path="*" element={<Navigate to="/" replace  />}  />
        </Routes>
      </CartCartProvider>
    </section>
  )
}

export default App
