import React,{useState} from 'react'
import { signInWithPop, createUserData , signInWithEmail, createUserWithEmail} from '../utils/firebase.utils.db'
import { useNavigate , useLocation} from 'react-router-dom'


const FormField = {
  displayName: "",
  email: "",
  password: "",
  logemail: "",
  logpassword: ""
}
export const Signup = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state?.path || "/"

const [formInput, setFOrmINput] = useState(FormField)

const {displayName, email, password, logemail, logpassword} = formInput

  // console.log(redirectPath);
  // console.log(location);

  const handleSignin = async () => {
    const response = await signInWithPop()
    await createUserData(response.user)
    // navigate(redirectPath, {replace: true})
  }

  const handleChange = (e) => {
      const {value, id} = e.target
      setFOrmINput({...formInput, [id]: value})
  }

const handleSubmit = async(e) => {
  e.preventDefault()
  await createUserWithEmail(email, password, displayName)
  setFOrmINput(FormField)

}

const handleSubmitSignin = async(e) => {
  e.preventDefault()
 
  await signInWithEmail({logemail, logpassword})
  // navigate(redirectPath, {replace: true})

}




  return (
    <div className="p-6 md:flex md:gap-5">

      <div className='flex-auto '>
        <h1 className='text-center font-bold text-[green] text-2xl'>Sign Up With Email</h1> <br />
        <form className='space-y-5' onSubmit={handleSubmit}>
          <input type="text" placeholder='userName' id='displayName' value={displayName} onChange={handleChange} className="border rounded w-full placeholder:text-xl p-2"/> <br />
          <input type="email" placeholder='enter email' id='email' value={email} onChange={handleChange} className="border rounded w-full p-2 placeholder:text-xl "/> <br />
          <input type="password" placeholder='input password' id="password" value={password} onChange={handleChange} className="border rounded w-full p-2 placeholder:text-xl "/> <br />
          <button type='submit' className="border p-2 bg-slate-300 font-bold rounded-lg w-full">submit</button>
        </form>

        <hr className='my-5'/>
        <p className='text-center text-[green] font-bold text-2xl'>OR</p> <br /> 
        <button
          type="button"
          onClick={handleSignin}
          className="border p-2 bg-slate-300 font-bold rounded-lg w-full"
        >
          Sign WIth Google
        </button>
      </div>

      {/* Sign in */}

      <div className='flex-auto md:border-l-4 md:px-5 border-[black] mt-12 md:mt-0'>
      <h1 className='text-center font-bold text-[green] text-2xl'>Sign In With Email</h1> <br />
        <form className='space-y-5' onSubmit={handleSubmitSignin}>
          <input type="email" placeholder='enter email' id='logemail' value={logemail} onChange={handleChange} className="border w-full rounded p-2 placeholder:text-xl "/> <br />
          <input type="password" placeholder='input password' id="logpassword" value={logpassword} onChange={handleChange} className="border rounded w-full p-2 placeholder:text-xl "/> <br />
          <button type='submit' className="border p-2 bg-slate-300 font-bold rounded-lg w-full">Sign In</button>
        </form>

      </div>
    </div>
  )
}
