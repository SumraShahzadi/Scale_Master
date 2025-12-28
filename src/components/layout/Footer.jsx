import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bg-dark text-white py-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mb-12">
          <div className="footer-brand">
            <h3 className="text-white mb-4 text-2xl font-bold">ScaleMaster</h3>
            <p className="text-light max-w-xs">Simplifying scale management for modern businesses.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <h4 className="text-white mb-6 text-lg font-bold">Product</h4>
              <a href="#features" className="block text-light mb-3 hover:text-secondary transition-colors duration-200">Features</a>
              <a href="#pricing" className="block text-light mb-3 hover:text-secondary transition-colors duration-200">Pricing</a>
              <a href="#roadmap" className="block text-light mb-3 hover:text-secondary transition-colors duration-200">Roadmap</a>
            </div>

            <div className="flex flex-col">
              <h4 className="text-white mb-6 text-lg font-bold">Company</h4>
              <Link to="/about" className="block text-light mb-3 hover:text-secondary transition-colors duration-200">About Us</Link>
              <Link to="/contact" className="block text-light mb-3 hover:text-secondary transition-colors duration-200">Contact</Link>
              <Link to="/careers" className="block text-light mb-3 hover:text-secondary transition-colors duration-200">Careers</Link>
            </div>

            <div className="flex flex-col">
              <h4 className="text-white mb-6 text-lg font-bold">Legal</h4>
              <Link to="/privacy" className="block text-light mb-3 hover:text-secondary transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="block text-light mb-3 hover:text-secondary transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-light text-sm">
          <p>&copy; {new Date().getFullYear()} Scale Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
