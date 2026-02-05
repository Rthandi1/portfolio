
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Experience Snapshot</h2>
          <p className="mt-2 text-slate-600">Relevent background in technical analysis and incident support.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-indigo-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="mt-1 md:mt-0 text-slate-500 font-medium">{exp.period}</div>
                </div>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-slate-600 leading-relaxed">
                      <span className="text-indigo-500 mr-2 font-bold">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
