import React,{useState} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (    
    <nav className='fixed w-full z-10 flex items-center justify-between py-6 pr-6 pl-6 bg-[rgb(27,27,39)]'>
      <h1 className='font-semibold text-2xl tracking-wider bg-gradient-to-r from-pink-300 via-slate-500 to-pink-300 bg-clip-text text-transparent'>Pratik Patel</h1>
      <div className='lg:hidden flex z-20'>
        <button onClick={toggleMenu}>
          {isOpen ? (
            <XMarkIcon className='w-6 h-6 text-white' />
          ) : (
            <Bars3Icon className='w-6 h-6 text-white' />
          )}
        </button>
      </div>
      <ul className={`fixed top-0 right-0 h-full bg-[rgb(27,27,39)] flex flex-col items-start justify-center gap-8 p-8 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 lg:transform-none`}>
      
      <Link to="home" spy={true} offset={-100} duration={500} smooth={true} activeClass='active'><li className='py-2 lg:py-0 cursor-pointer hover:text-purple-400'>Home</li></Link>
      <Link to="about" spy={true} offset={-100} duration={500} smooth={true} activeClass='active'><li className='py-2 lg:py-0 cursor-pointer hover:text-purple-400'>About Me</li></Link>
      <Link to="technologies" spy={true} offset={-100} duration={500} smooth={true} activeClass='active'><li className='py-2 lg:py-0 cursor-pointer hover:text-purple-400'>Technologies</li></Link>
      <Link to="experiences" spy={true} offset={-100} duration={500} smooth={true} activeClass='active'><li className='py-2 lg:py-0 cursor-pointer hover:text-purple-400'>Hackathons</li></Link>
      <Link to="projects" spy={true} offset={-100} duration={500} smooth={true} activeClass='active'><li className='py-2 lg:py-0 cursor-pointer hover:text-purple-400'>Projects</li></Link>
      <Link to="contact" spy={true} offset={-100} duration={500} smooth={true} activeClass='active'><li className='py-2 lg:py-0 cursor-pointer hover:text-purple-400'>Contact Me</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar
