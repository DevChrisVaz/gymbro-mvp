"use client"

import React, { ReactNode } from 'react';
import { Navbar } from '../flowbite/Navbar';
import { Footer } from '../flowbite/Footer';

export type LayoutProps = {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {props.children}
      <Footer />
    </>
  )
}

export default Layout