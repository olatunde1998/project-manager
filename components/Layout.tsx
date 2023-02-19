import React from 'react'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'


type LayoutProps = {
  children: string
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
        <NavBar/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default Layout