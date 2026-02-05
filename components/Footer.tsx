
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to upgrade your Tier 1 capability?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto text-slate-400">
            I am currently seeking a junior role where I can apply my automation skills and detection mindset.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:thandi.rayman@gmail.com"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg"
            >
              Email Rayman Thandi
            </a>
            <a 
              href="#"
              className="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all border border-slate-700"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© {new Date().getFullYear()} Rayman Thandi. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Lab Reports</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
