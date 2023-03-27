import React from 'react';
import Link from "next/link";
import Logo from '@/assets/svg/logo.svg'

export default function Header () {
  return (
    <>
      <div className="">
        <header className='container pt-10 pb-3 mt-5'>
          <nav className='w-full flex items-center justify-between'>
            <ul className='flex'>
              <li className='mx-5'>
                <a href=";#plans" className='hover:text-primary transition-all ease-in-out'>Planos</a>
              </li>
              <li className='mx-5'>
                <a href=";#about" className='hover:text-primary transition-all ease-in-out'>Sobre Nós</a>
              </li>
            </ul>

            <a href="/">
              <Logo className='w-10 hover:scale-110 transition-transform ease-in' />
            </a>

            <ul className='flex'>
              <li className='mx-5'>
                <a href="/#place" className='hover:text-primary transition-all ease-in-out'>Onde estamos</a>
              </li>
              <li className='mx-5'>
                <Link href="/warnings" className='text-warning hover:text-primary transition-all ease-in-out'>Avisos</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}