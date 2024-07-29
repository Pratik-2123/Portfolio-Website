import React,{useState} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed w-full z-10 mb-20 flex items-center justify-between py-6 pr-6 pl-6 bg-[rgb(27,27,39)]'>
      <h1 className='font-semibold text-2xl tracking-wider'>Pratik Patel</h1>
      <div className='lg:hidden'>
        <button onClick={toggleMenu}>
          {isOpen ? (
            <XMarkIcon className='w-6 h-6 text-white' />
          ) : (
            <Bars3Icon className='w-6 h-6 text-white' />
          )}
        </button>
      </div>
      <ul className={`flex-col lg:flex-row lg:flex gap-8 cursor-pointer absolute lg:static w-full lg:w-auto bg-[rgb(27,27,39)] lg:bg-transparent ${isOpen ? 'top-16 left-0' : 'hidden'}`}>
        <li className='py-2 lg:py-0'>Home</li>
        <li className='py-2 lg:py-0'>About Me</li>
        <li className='py-2 lg:py-0'>Technologies</li>
        <li className='py-2 lg:py-0'>Experience</li>
        <li className='py-2 lg:py-0'>Projects</li>
        <li className='py-2 lg:py-0'>Contact Me</li>
      </ul>
    </nav>
  );
}

export default Navbar
