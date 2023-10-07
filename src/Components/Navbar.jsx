import React from 'react'
import logo from '../Assets/Images/logo.png'

export default function Navbar() {
  return (
<div className='pb-[6px] bg-[#325361] fixed w-full left-0 top-0 z-10'>
<nav className="rounded-b-md bg-gradient-to-b from-[#54989F] from-30% via-[#5CA5AC] via-60% to-[#6CBFC7]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 pb-2">
    <a href="/" className="flex items-center">
        <img src={logo} className="h-[40px] md:h-[60px] mx-3" alt="GET Logo" />
        <span className="self-center text-white text-md sm:text-lg md:text-xl whitespace-nowrap hover:text-slate-300 transition-all transition-duration-200 ease-in ">Gaming and Emerging Technology @ SJU</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className=" mx-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto text-xl" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/projects" className="transition-all transition-duration-200 ease-in hover:text-slate-300 block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:-700 md:p-0 dark:text-white md:dark:-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
        </li>
        <li>
          <a href="/students" className="transition-all transition-duration-200 ease-in hover:text-slate-300 block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:-700 md:p-0 dark:text-white md:dark:-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Members</a>
        </li>
        <li>
          <a href="#" className="transition-all transition-duration-200 ease-in hover:text-slate-300 block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:-700 md:p-0 dark:text-white md:dark:-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="transition-all transition-duration-200 ease-in hover:text-slate-300 block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:-700 md:p-0 dark:text-white md:dark:-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

  )
}
