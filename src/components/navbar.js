import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import images from '../assets'
import { HandleContext } from '../hooks/getContext'
import { signinOut } from '../utils/firebase.utils.db'
import { Carticon } from './carticon'
import { DropCart } from './drop-cart'
import { HandleDropDown } from '../hooks/getContext'
import { HandleProductContext } from '../hooks/getContext'



const Navbar = () => {
  const { currentUser, SetCurrentUser } = HandleContext()
  const {dropCart} = HandleDropDown()
  const {cartCount} = HandleProductContext()

  const active = 'border-b-4 border-b-[green] text-gray-400 text-xl'

  const handleSignout = async () => {
    await signinOut()
    SetCurrentUser(null)
  }


  return (
    <div>
      <nav className="flex items-center justify-around p-5 font-bold relative">
        <NavLink to="/" className="flex space-x-2 items-center">
          <img src={images.crown} alt="crown" className="w-12 h-12" />
          <h1 className="text-2xl text-[green]">CASSY</h1>
        </NavLink>

        <div className="flex items-center space-x-8">
      
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : '')}
          >
            <h1>Home</h1>
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? active : '')}
          >
            <h1>Shop</h1>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? active : '')}
          >
            <h1>Contact</h1>
          </NavLink>
          {cartCount > 0 && <Carticon/>}
        </div>

        <div className="flex items-center flex-col space-x-5">
        {!currentUser && (
            <NavLink
              to="/sign"
              className={({ isActive }) => (isActive ? active : '')}
            >
              <h1>Signup/Signin</h1>
            </NavLink>
          )}
          <div className="flex space-x-5">
            {currentUser && <h1> Hello, {currentUser.displayName}</h1>}
            {currentUser && (
              <button onClick={handleSignout} type="button">
                Sign Out
              </button>
            )}
          </div>
        </div>
        {dropCart && cartCount >= 1 && <DropCart />}
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar
