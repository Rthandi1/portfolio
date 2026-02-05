
import React from 'react';
import { CERTS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Trust & Credentials</h2>
            <p className="mt-2 text-slate-600">Verified industry certifications and training.</p>
          </div>
          <div className="text-slate-400 text-sm font-medium italic">
            *Verification links available upon request or via LinkedIn
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CERTS.map((cert) => (
            <div 
              key={cert.name} 
              className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:bg-white hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm mx-auto mb-4 flex items-center justify-center text-indigo-600 border border-slate-100 group-hover:scale-110 transition-transform">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-bold text-slate-900 leading-tight mb-1">{cert.name}</h3>
              <p className="text-xs text-slate-500 font-semibold">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
