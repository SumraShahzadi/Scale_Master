import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      // navigation handled by Link to /#id naturally if set up, but simple anchor links work best on same page
      // If on another page, Link to="/#id" might work if we handle hash scrolling
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-2xl font-extrabold text-primary tracking-tight">ScaleMaster</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-medium font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="text-medium font-medium hover:text-primary transition-colors">About</Link>
          <Link to="/features" className="text-medium font-medium hover:text-primary transition-colors">Features</Link>
          <Link to="/pricing" className="text-medium font-medium hover:text-primary transition-colors">Pricing</Link>
          <Link to="/blog" className="text-medium font-medium hover:text-primary transition-colors">Blog</Link>
          <Link to="/contact" className="text-medium font-medium hover:text-primary transition-colors">Contact</Link>
          <Link to="/dashboard" className="text-medium font-medium hover:text-primary transition-colors">Dashboard</Link>
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <Link to="/auth" className="text-medium font-medium hover:text-primary transition-colors">Login</Link>
          <Link to="/auth" className="btn btn-primary bg-primary text-white hover:bg-primary-hover px-6 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">Sign Up</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-dark focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-4 shadow-lg flex flex-col gap-4 md:hidden animate-fade-in-up">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-center py-2 text-medium font-medium hover:text-primary">Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-center py-2 text-medium font-medium hover:text-primary">About</Link>
          <Link to="/features" onClick={() => setMobileMenuOpen(false)} className="text-center py-2 text-medium font-medium hover:text-primary">Features</Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-center py-2 text-medium font-medium hover:text-primary">Pricing</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-center py-2 text-medium font-medium hover:text-primary">Blog</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-center py-2 text-medium font-medium hover:text-primary">Contact</Link>
          <hr className="border-gray-100" />
          <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="text-center py-2 font-semibold text-primary">Dashboard</Link>
          <Link to="/auth" className="btn btn-primary bg-primary text-white text-center py-3 rounded-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
