import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default memo(function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
           
            <div className="text-white">
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">We are Final year Computer Engineering students affiliated with the University of Mumbai</p>
            </div>
            
           
            <div className="text-white">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li><Link to="/updates" className="text-gray-400 hover:text-white">Updates</Link></li>
                <li><Link to="/DietsAndExercises" className="text-gray-400 hover:text-white">Wellness Routine</Link></li>
                <li><Link to="/consultancy" className="text-gray-400 hover:text-white">Consultancy</Link></li>
                <li><Link to="/Detection" className="text-gray-400 hover:text-white">Detection</Link></li>
              </ul>
            </div>
            
            
            <div className="text-white">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>Parkinson's Management Solutions</li>
                <li>123 Parkinson Avenue</li>
                <li>New York, NY 10001</li>
                <li>Email: info@parkinsonmanagement.com</li>
                <li>Phone: +1 (123) 456-7890</li>
              </ul>
            </div>
            
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});
