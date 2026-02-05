
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">RT</span>
            <span className="ml-2 font-semibold text-slate-800 hidden sm:block">Rayman Thandi</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#contact" 
              className="text-slate-600 hover:text-indigo-600 font-medium px-3 py-2 transition-colors"
            >
              Contact
            </a>
            <a 
              href="/resume.pdf" 
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-sm hover:bg-indigo-700 transition-all flex items-center"
              download
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
