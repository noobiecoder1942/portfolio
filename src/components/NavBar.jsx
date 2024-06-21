'use client';

import Link from 'next/link';
import React from 'react'
import Logo from './Logo';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import { useRouter } from 'next/navigation';


const CustomLink = ({ href, title, className=""}) => {

    const router = useRouter();

    return (
        <Link href={href} className={`${className}`}>
            {title}
        </Link>
    )
}


const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();


  return (
    <header className='w-full px-32 py-8 text-dark font-medium flex items-center justify-between dark:text-light'>
        <nav className=''>
            <CustomLink href='/' title='Home' className='mr-4'/>
            <CustomLink href='/about' title='About' className='mx-4'/>
            <CustomLink href='/projects' title='Projects' className='mx-4'/>
            <CustomLink href='https://blog.abhirag.dev/' title='Blog' className='ml-4'/>
        </nav>

        


        <nav className='flex items-center justify-center flex-wrap'>
            
            <motion.a href="https://github.com/noobiecoder1942" target={"_blank"}
            whileHover={{y: -2}}
            whileTap={{scale: 0.8}}
            className='w-6 mr-3'
            ><GithubIcon />
            </motion.a>

            <motion.a href="https://www.linkedin.com/in/abhirag-nagpure/" target={"_blank"}
            whileHover={{y: -2}}
            whileTap={{scale: 0.8}}
            className='w-6 mx-3'
            ><LinkedInIcon />
            </motion.a>

            <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                {
                    mode === "dark" ? 
                    <SunIcon className={"fill-dark"}/>
                    : <MoonIcon className={"fill-dark"}/>
                }
            </button>
            
        </nav>




        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>

    </header>
  )
}

export default NavBar;