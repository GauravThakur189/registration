import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
   
  const history = useNavigate();

  const authenticate = async()=>{
    const token  = localStorage.getItem('usersDataToken');

    const res = await fetch('http://localhost:8000/validuser',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    })
    const data = await res.json();
    if(data.status === 401 || !data){
          history('*')
    }
    else{
      console.log("user verfied");
      history('/dash')
    }
  }

  useEffect(()=>{
    authenticate();
  },[])
    
    
  


  return (
    <div className='flex flex-col items-center p-6'>
      <img className='w-[250px] h-[300px] p-5' alt='png' src='https://i.pinimg.com/564x/c7/d7/c5/c7d7c578320f8b5dad54d23e6991e946.jpg'/>
      <h1 >User Email : gaurav18@gmail.com</h1>
    </div>

  )
}

export default Dashboard