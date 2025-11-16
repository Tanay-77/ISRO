import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="w-full bg-black text-gray-200 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center gap-6 text-center md:text-left md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img src="https://www.firesafetysearch.com/wp-content/uploads/2016/07/Indian-Space-Agency-employs-Sharpeye.gif" alt="ISRO Logo" className="h-10 md:h-12 w-auto" />
          <div>
            <p className="text-base md:text-lg font-bold">ISRO Inspired</p>
            <p className="text-xs md:text-sm text-gray-400">Exploring space for the nation</p>
          </div>
        </div>

        <nav className="flex gap-4 md:gap-6 text-sm md:text-base">
          <Link to="/" onClick={scrollToTop} className="text-gray-300 hover:text-orange-500 transition">Home</Link>
        </nav>

        <p className="text-xs md:text-sm text-gray-500">&copy; {new Date().getFullYear()} ISRO Inspired. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer