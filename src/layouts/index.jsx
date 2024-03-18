import Navbar from '@/components/navbar.jsx'
import React from 'react'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout