import React, { useState, useContext } from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import ButtonLoader from '../components/ButtonLoader';
import { AuthContext } from '../context/AuthContext';
//import env from '../utils/env.json';

const Login = () => {

  const [auth, setAuth] = useContext(AuthContext);
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  //const { from } = location.state || { from: { pathname: "/" } };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  
  <div className="max-w-md w-full space-y-8 bg-white shadow-xl rounded p-5">
    <div>
      
      <h2 className="mt-3 text-center text-3xl font-bold text-gray-900">Login</h2>
      
    </div>
    <form className="mt-8 space-y-6" onSubmit={login1}>
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="my-4">
          <label htmlFor="mobileNo" className="mb-2 block text-sm font-medium text-gray-700">
            Mobile Number 
          </label>
          <input
            id="mobileNo"
            name="mobileNo"
            type="number"
            autoComplete="mobileNo"
            required
            className="focus:ring-blue-500 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
            value={mobileNo.toString()} 
            onChange={e =>setMobileNo(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="focus:ring-blue-500 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
            value={password.toString()} 
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>

    
      {authError ? <div className="text-xs font-medium bg-red-100 border border-red-400 text-red-700 px-2 py-2 rounded relative mb-2">The provided credentials are incorrect. Please try again with correct credentials.</div> : null}
      

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link to='/forgot-password' className="font-medium text-blue-600 hover:text-blue-500">
            Forgot your password?
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
        {!loading ? 'Sign In' : <ButtonLoader />  }
        </button>
      </div>
      <hr />
    <p className="text-center font-medium text-gray-500">New to jeevanaadi?</p>
    <div>
      <Link to='/register'>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
         
          Sign Up
        </button>
        </Link>
      </div>
    </form>
   
  </div>
  
</div>
);
}

export default Login1;