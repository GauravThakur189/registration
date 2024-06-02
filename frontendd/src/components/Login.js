import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {

  const [formData,setFormData] = useState({
    email:'',
    password:'',
  });


  const handleChange = (e)=>{
   const {name,value} = e.target;
   setFormData({...formData,[name]:value});
}

   const handleSubmit  = async(e)=>{
      e.preventDefault();
      // console.log(formData);
      const {email,password} = formData;
      const data = await fetch('http://localhost:8000/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email,password
        })
      })
         const res = await data.json();
         console.log(res);
   }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
          <div className="  rounded-md shadow-sm -space-y-px">
           
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Login
            </button>
          </div>
          <div>
            <p>Don't have an account ? <NavLink to='/register'>Sign Up</NavLink> </p>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login