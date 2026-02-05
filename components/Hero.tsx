
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-12 lg:py-24 overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          
          {/* Left Column: Recruiter Decision Block */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for SOC / AI Automation Roles
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
              SOC Analyst / <br/>
              <span className="text-indigo-600">AI Security Engineer</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Alert Triage • SIEM (Splunk/ELK) • Python Automation • <span className="text-indigo-600 font-bold">GenAI Workflows</span>
            </p>
            
            <div className="space-y-4 mb-10 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 015.405-2.284 5.976 5.976 0 00-.655-.622z"></path></svg>
                </div>
                <p className="ml-3 text-slate-700 font-medium">Built AI-Driven triage agents reducing manual investigation time by 40%.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="ml-3 text-slate-700">Captured 100s+ auth attempts via Cowrie Honeypots → MITRE ATT&CK Mapping.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="ml-3 text-slate-700">BTL1 & Security+ Certified: Ready for Tier 1 SOC Operations.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="/resume.pdf"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all"
              >
                Download Resume (PDF)
              </a>
              <a 
                href="#genai-lab"
                className="inline-flex justify-center items-center px-8 py-4 border-2 border-slate-200 text-lg font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all"
              >
                View GenAI Lab
              </a>
            </div>
          </div>

          {/* Right Column: Profile Picture Icon */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-4 border-indigo-100 animate-pulse"></div>
              <div className="relative w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-200 flex items-center justify-center">
                <svg className="w-full h-full text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 w-6 h-6 lg:w-8 lg:h-8 bg-indigo-600 rounded-full border-4 border-white flex items-center justify-center text-white">
                  <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
