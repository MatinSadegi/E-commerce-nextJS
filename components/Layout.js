import Link from 'next/link'
import React from 'react'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <header>
        <nav className="h-12 px-4 flex justify-between items-center shadow-md">
          <Link href="/" className="text-lg font-bold">
            amazoon
          </Link>
          <div>
            <Link href="/cart" className="p-2">Cart</Link>
            <Link href="/login" className="p-2">Login</Link>
          </div>
        </nav>
      </header>
      <main className='container m-auto mt-4 px-4'>Home page</main>
      <footer className='h-10 flex justify-center items-center shadow-inner'>
        <p>Copyright 2023 Amazoon</p>
      </footer>
    </div>
  );
}

export default Layout