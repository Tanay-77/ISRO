import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src="https://www.firesafetysearch.com/wp-content/uploads/2016/07/Indian-Space-Agency-employs-Sharpeye.gif" alt="ISRO Logo" className="h-12 w-auto" />
          <div>
            <p className="text-lg font-bold">ISRO Inspired</p>
            <p className="text-sm text-gray-400">Exploring space for the nation</p>
          </div>
        </div>

        <nav className="flex gap-6 ">
          <a href="/" className="text-gray-300 hover:text-orange-500 ">Home</a>
          <a href="/projects" className="text-gray-300 hover:text-orange-500">Projects</a>
          <a href="/history" className="text-gray-300 hover:text-orange-500">History</a>
        </nav>

        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} ISRO Inspired. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
