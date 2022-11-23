import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Contextprovider } from './context/useUser'
import { ProductProvider } from './context/productsContext'
import { CategoriesContext } from './context/categoriesProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CategoriesContext>
        <ProductProvider>
          <Contextprovider>
            <App />
          </Contextprovider>
        </ProductProvider>
      </CategoriesContext>
    </React.StrictMode>
  </BrowserRouter>,
)
