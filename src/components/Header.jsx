import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({heading,paragraph,linkName,linkUrl}) => {
  return (
      <div className='mb-10'>
         <div className='flex justify-center mt-2'><img className="h-14 w-14" src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg" alt="logo" /></div>
          <h2 className='mt-6 text-center text-sm text-gray-900 font-extrabold'>{heading}</h2>
          <p className='mt-2 text-center text-sm text-gray-900'>{paragraph} {' '}
              <Link  className="font-medium text-blue-900 hover:text-blue-400" to={linkUrl}>{linkName}</Link>
              </p>
    </div>
  )
}

export default Header
