import React from 'react'
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
    <div>
        <header>
            <nav className=' flex justify-between shadow-lg '>
                <h1 className=' py-8 pl-8 font-bold'>
                    Your Home
                </h1>
                <div className='p-3 px-10'>
                <Avatar className='bg-blue-900'>H</Avatar>
                </div>
               
            </nav>
        </header>
    </div>
  )
}

export default Header