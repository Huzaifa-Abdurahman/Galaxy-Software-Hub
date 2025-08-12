import Link from 'next/link';
import { Zap, Mail, Phone, MapPin, MessageSquare, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="dark-card border-t dark-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/public/images/Logo.png" 
                alt="Galaxy Software Hub Logo" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold">Galaxy Software Hub</span>
            </div>
            <p className="text-white mb-4">
              Transforming businesses with cutting-edge digital solutions and innovative technology.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://wa.me/923100043155" 
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-5 w-5 text-white" />
              </Link>
              <Link 
                href="https://www.facebook.com/people/galaxy-software-hub/61563315754392/?_rdr" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/105710967/admin/dashboard/" 
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-white">
              <li><Link href="/services" className="hover:text-purple-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-purple-400 transition-colors">Graphic Design</Link></li>
              <li><Link href="/services" className="hover:text-purple-400 transition-colors">SEO Services</Link></li>
              <li><Link href="/services" className="hover:text-purple-400 transition-colors">AI Automation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-white">
              <li><Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-purple-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-purple-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/faq" className="hover:text-purple-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span>galaxysoftwarehub@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span>+92 3100043155</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span>6 Street, Ashiana E Quaid, Lahore 48776</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Galaxy Software Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
