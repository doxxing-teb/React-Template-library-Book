import React from 'react'

function Navigation() {
  return (
    <div className='Navigation'>
      <nav className='navbar'>
        <div className='backgroundHref'>
          <a href='#Home'>Home</a>
        </div>
        <div className='backgroundHref'>
          <a href='#Library'>Library</a>
        </div>
        <div className='backgroundHref'>
          <a href='#About'>About</a>
        </div>
        <div className='backgroundHref'>
          <a href='#Contact'>Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;