import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import BlobButton from './shared/BlobButton';
import DarkModeToggle from './shared/DarkModeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Paidavaar', path: 'https://paidavaar.in/', external: true },
    { name: 'All Products', path: 'https://paidavaar.in/collections/all', external: true },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar px-6 md:px-12 py-5 transition-all duration-300 ${isScrolled ? 'scrolled text-white' : 'bg-transparent text-white'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center no-underline z-50 h-10 relative group w-[50vw] sm:w-auto">
            <img
              src="/Sarvin Agro Logo.png"
              alt="Sarvin Agrochemical Logo"
              className="absolute top-1/2 -left-2 sm:-left-4 md:-left-6 -translate-y-[48%] -ml-6 sm:-ml-8 md:-ml-12 h-[140px] sm:h-[180px] md:h-[200px] max-w-none object-contain pointer-events-none drop-shadow-lg"
            />
            <span className="font-serif text-sm sm:text-sm md:text-md font-bold tracking-widest whitespace-normal sm:whitespace-nowrap uppercase text-white sm:-mt-[10px] ml-[55px] sm:ml-[65px] md:ml-[37px] relative z-10 drop-shadow-md leading-tight">
              Sarvin Agro Chemicals
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold tracking-wide uppercase hover:text-accent-green transition-colors font-sans"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide uppercase hover:text-accent-green transition-colors font-sans ${location.pathname === link.path ? 'text-accent-green' : ''}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA & Toggle */}
          <div className="hidden lg:flex items-center gap-6">
            <DarkModeToggle />
            <Link to="/contact">
              <BlobButton>Get A Quote</BlobButton>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] bg-black/10 rounded-md p-1.5 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay Tracker (applies dark overlay and closes drawer on click outside) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Right Slide Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-[#0a120b]/95 dark:to-[#1a2e1d]/95 backdrop-blur-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.1)] dark:shadow-[-10px_0_30px_rgba(0,0,0,0.5)] border-l border-gray-200 dark:border-white/10 z-50 flex flex-col px-6 py-12 sm:px-8 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Close Button inside drawer */}
        <button
          className="absolute top-6 right-6 text-text-dark dark:text-white hover:text-primary-green dark:hover:text-accent-green transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Scrollable Links Container */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden mt-12 pr-4 custom-scrollbar">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl font-serif font-bold text-text-dark dark:text-white hover:text-primary-green dark:hover:text-accent-green transition-all duration-300 translate-x-8 opacity-0 ${mobileMenuOpen ? '!translate-x-0 !opacity-100' : ''}`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-2xl font-serif font-bold text-text-dark dark:text-white hover:text-primary-green dark:hover:text-accent-green transition-all duration-300 translate-x-8 opacity-0 ${mobileMenuOpen ? '!translate-x-0 !opacity-100' : ''} ${location.pathname === link.path ? 'text-primary-green dark:text-accent-green' : ''}`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Fixed Foot Area (CTA & Dark Mode) */}
        <div
          className={`flex flex-col gap-6 pt-6 mt-4 border-t border-gray-200 dark:border-white/10 transition-all duration-500 translate-y-8 opacity-0 ${mobileMenuOpen ? '!translate-y-0 !opacity-100' : ''}`}
          style={{ transitionDelay: `${navLinks.length * 75 + 100}ms` }}
        >
          <div className="flex justify-center">
            <DarkModeToggle />
          </div>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            <BlobButton className="px-8 py-3.5 text-base w-full text-center">Get A Quote</BlobButton>
          </Link>
        </div>
      </div>
    </>
  );
}
