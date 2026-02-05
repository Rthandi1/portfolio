
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Security Proof of Work</h2>
          <p className="mt-2 text-slate-600 uppercase tracking-widest text-sm font-bold">Tangible outcomes from private lab environments</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="flex flex-col h-full bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all relative">
              {index === 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-indigo-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded shadow-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></span>
                    Featured
                  </span>
                </div>
              )}
              <div className="p-6 lg:p-8 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 pr-12">{project.title}</h3>
                  <div className="hidden sm:flex space-x-2">
                    {project.stack.slice(0, 1).map(s => (
                      <span key={s} className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded uppercase">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2">Problem Statement</h4>
                  <p className="text-base text-slate-700 leading-snug">{project.problem}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2">Technical Execution</h4>
                  <ul className="space-y-3">
                    {project.solution.map((s, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start">
                        <span className="text-indigo-500 mr-2.5 mt-1 flex-shrink-0">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </span> 
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                  <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-tighter mb-1">Key Deliverable</h4>
                  <p className="text-sm text-indigo-800 font-semibold leading-snug">{project.result}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-100/50 border-t border-slate-200 flex gap-3">
                <button className="flex-1 bg-white border border-slate-300 text-slate-700 px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">
                  View Full Lab Notes
                </button>
                <a 
                  href={project.githubUrl}
                  className="flex-1 bg-indigo-600 text-white px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors text-center"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-slate-100 rounded-2xl border border-slate-200">
             <div className="bg-white px-8 py-6 rounded-xl shadow-sm max-w-2xl">
               <h3 className="text-lg font-bold text-slate-900 mb-2">Want to see more technical depth?</h3>
               <p className="text-slate-600 mb-4">I maintain a repository of 20+ guided SOC investigations and malware analyses using Eric Zimmerman tools and Wireshark.</p>
               <a href="#" className="text-indigo-600 font-bold hover:underline flex items-center justify-center">
                 View Virtual Labs Repository
                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
