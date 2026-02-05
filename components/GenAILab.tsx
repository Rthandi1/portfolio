
import React, { useState } from 'react';

const GenAILab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'log' | 'prompt' | 'result'>('log');

  const content = {
    log: `Feb 12 14:22:01 srv-prod-01 sshd[1234]: Invalid user webadmin from 185.220.101.12 port 44321 ssh2
Feb 12 14:22:05 srv-prod-01 sshd[1235]: Invalid user root from 185.220.101.12 port 44322 ssh2
Feb 12 14:22:09 srv-prod-01 sshd[1236]: Invalid user admin from 185.220.101.12 port 44323 ssh2
Feb 12 14:22:12 srv-prod-01 sshd[1237]: Connection closed by 185.220.101.12 port 44324`,
    prompt: `SYSTEM: You are a SOC Tier 1 Analyst. 
INPUT: Raw SSH logs.
TASK:
1. Identify source IP and behavior.
2. Map to MITRE ATT&CK.
3. Provide risk score (1-10) and next steps.
FORMAT: JSON`,
    result: `{
  "summary": "SSH Brute Force attempt detected from 185.220.101.12.",
  "mitre_mapping": "T1110.001 (Brute Force: Password Guessing)",
  "risk_score": 7,
  "recommendations": [
    "Block source IP at firewall.",
    "Verify 'webadmin' account exists.",
    "Enable MFA for all SSH users."
  ]
}`
  };

  return (
    <section id="genai-lab" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">GenAI Lab: Prompting + Scripting</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              I don't just use AI—I build <span className="text-indigo-400 font-bold">orchestrated workflows.</span> By combining Python with specific few-shot prompting, I automate the "heavy lifting" of Tier 1 analysis.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="font-bold text-xs">1</span>
                </div>
                <span><strong className="text-white">Scripting:</strong> Automated ingestion of raw logs via Python API clients.</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="font-bold text-xs">2</span>
                </div>
                <span><strong className="text-white">Prompting:</strong> Engineered contextual instructions for high-accuracy threat detection.</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="font-bold text-xs">3</span>
                </div>
                <span><strong className="text-white">Workflow:</strong> Structuring AI output into machine-readable JSON for SIEM integration.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="flex bg-slate-700/50 border-b border-slate-700">
              {(['log', 'prompt', 'result'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                    activeTab === tab ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab === 'log' ? 'Raw Input' : tab === 'prompt' ? 'System Prompt' : 'AI Output'}
                </button>
              ))}
            </div>
            <div className="p-6 font-mono text-sm overflow-auto max-h-[400px]">
              <pre className={activeTab === 'result' ? 'text-indigo-300' : 'text-slate-300'}>
                {content[activeTab]}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenAILab;
