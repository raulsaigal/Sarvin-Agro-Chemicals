import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-18 mb-12">

        {/* Column 1: Brand */}
        <div className="-mt-8 md:-mt-16 lg:-mt-20">
          <Link to="/" className="flex items-center gap-3 no-underline md:mb-6">
            <img src="/Sarvin Agro Logo.png" alt="Sarvin Agrochemical Logo" className="h-70 md:h-62 object-contain -ml-15 -mt-6" />
            <span className="font-serif text-sm md:text-sm font-bold tracking-wide whitespace-nowrap -mt-9 -ml-20 uppercase">Sarvin Agro Chemicals</span>
          </Link>
          <p className="text-text-muted -mt-20 text-sm leading-relaxed">
            Leading Agrochemical Solutions for India's Farmers. 25+ Years of global farming excellence and robust plant protection.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/sarvinagrochemicalspvtltd" className="w-10 h-10 rounded-full bg-dark-section flex items-center justify-center hover:bg-[#3b5998cc] transition-colors"><FaFacebookF /></a>
            <a href="https://x.com/Paidavaar_" className="w-10 h-10 rounded-full bg-dark-section flex items-center justify-center hover:bg-[#00acedcc] transition-colors"><FaTwitter /></a>
            <a href="https://www.instagram.com/sarvin_agro_chemicals/" className="w-10 h-10 rounded-full bg-dark-section flex items-center justify-center hover:bg-[#e4405fcc] transition-colors"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/paidavaar-sarvin-agro-chemicals-pvt-ltd-21a05b329/" className="w-10 h-10 rounded-full bg-dark-section flex items-center justify-center hover:bg-[#007bb6cc] transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-6 relative pb-3 border-b border-dark-section inline-block text-white">Useful Links</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-text-muted hover:text-accent-green transition-colors text-sm">Home</Link></li>
            <li><a href="https://paidavaar.in/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-green transition-colors text-sm">Paidavaar</a></li>
            <li><a href="https://paidavaar.in/collections/all" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-green transition-colors text-sm">All Products</a></li>
            <li><Link to="/about" className="text-text-muted hover:text-accent-green transition-colors text-sm">About Us</Link></li>
            <li><Link to="/gallery" className="text-text-muted hover:text-accent-green transition-colors text-sm">Gallery</Link></li>
            <li><Link to="/contact" className="text-text-muted hover:text-accent-green transition-colors text-sm">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Recent Posts */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-6 relative pb-3 border-b border-dark-section inline-block text-white">Recent Posts</h4>
          <div className="space-y-4">
            <Link
              to="/blog"
              state={{ postId: 1 }}
              onClick={() => window.scrollTo(0, 0)}
              className="flex gap-4 items-center group cursor-pointer no-underline"
            >
              <img src="summer crop.jpg" alt="Summer Crop Yield" className="rounded bg-dark-section w-16 h-16 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div>
                <p className="text-sm font-semibold group-hover:text-accent-green transition-colors line-clamp-2 text-white">How to Increase Crop Yield in Summer</p>
                <span className="text-xs text-primary-green mt-1 block">Mar 12, 2026</span>
              </div>
            </Link>
            <Link
              to="/blog"
              state={{ postId: 2 }}
              onClick={() => window.scrollTo(0, 0)}
              className="flex gap-4 items-center group cursor-pointer no-underline mt-4"
            >
              <img src="soil testing.jpg" alt="Soil Testing" className="rounded bg-dark-section w-16 h-16 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div>
                <p className="text-sm font-semibold group-hover:text-accent-green transition-colors line-clamp-2 text-white">Benefits of Soil Testing Before Sowing</p>
                <span className="text-xs text-primary-green mt-1 block">Feb 28, 2026</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Column 4: Contact Snippet */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-6 relative pb-3 border-b border-dark-section inline-block text-white">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin className="text-primary-green min-w-5 h-5 mt-1" />
              <p className="text-sm text-text-muted leading-relaxed">Sinha House, Road No. 05, Rajendra Nagar, Patna – 800016</p>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="text-primary-green min-w-5 h-5" />
              <div className="flex flex-col text-sm text-text-muted">
                <span>1800-891-0612</span>
                <span>92418 78016</span>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="text-primary-green min-w-5 h-5" />
              <a href="mailto:info@sarvinagrochemical.com" className="text-sm text-text-muted hover:text-accent-green transition-colors">info@sarvinagrochemical.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-dark-section pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Sarvin Agrochemical. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-sm text-text-muted">
          <a href="#" className="hover:text-accent-green transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent-green transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
