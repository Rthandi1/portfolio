
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Professional Summary</h2>
          <p className="text-xl leading-relaxed text-indigo-100 mb-8">
            Entry-level SOC Analyst focused on <span className="text-white font-bold">alert triage, log correlation, and incident documentation.</span> Hands-on experience with Splunk/ELK/Wazuh, phishing and IoC analysis, and Python automation for detection/enrichment. 
          </p>
          <p className="text-xl leading-relaxed text-indigo-100">
            Built honeypot monitoring and a log analyzer to <span className="text-white font-bold">simulate Tier 1 workflows</span> and map findings to <span className="text-white font-bold underline decoration-indigo-400">MITRE ATT&CK.</span> Deeply familiar with the <span className="text-white font-bold">NIST 800-61 Incident Response Lifecycle</span> for structured investigation and remediation.
          </p>
        </div>
      </div>
      
      {/* Visual flare */}
      <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
    </section>
  );
};

export default About;
