import React, { useEffect, useState } from 'react'
import Logout from './Logout'
import axiosInstance from '../utils/axiosInstance'
import { useNavigate } from 'react-router-dom'

function Navbar({userInfo}) {
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
        <h2 className='text-xl font-medium text-black py-2'>NotesManager</h2>
        {userInfo?<Logout/>:<></>}
    </div>
  )
}

export default Navbar
