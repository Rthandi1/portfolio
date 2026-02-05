
import React from 'react';
import { Project, SkillGroup, Certification, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'genai-soc',
    title: 'AI-Powered Triage Assistant',
    problem: 'Tier 1 analysts spend excessive time manually summarizing raw logs and mapping to frameworks.',
    solution: [
      'Developed a Python utility utilizing the Gemini API to ingest raw SIEM logs.',
      'Engineered few-shot prompts to automatically generate MITRE ATT&CK mapping and triage summaries.',
      'Built a script to de-obfuscate PowerShell commands using LLM reasoning.'
    ],
    result: 'Reduced initial alert interpretation time by ~40% and improved documentation consistency.',
    stack: ['Python', 'Gemini API', 'Prompt Engineering', 'Splunk'],
    githubUrl: '#'
  },
  {
    id: 'soc-ir-labs',
    title: 'Advanced SOC & IR Lab Environments',
    problem: 'Practical experience with professional-grade detection and investigation tools is critical for Tier 1 readiness.',
    solution: [
      'Configured Snort IDS in a virtualized lab and authored custom rules to detect exploit activity; validated alerts via Metasploit.',
      'Ran Nessus scans from Kali Linux against lab targets, producing prioritized remediation notes by risk/exploitability.',
      'Parsed Windows artifacts (EVTX/Registry/LNK) using Eric Zimmerman tools to reconstruct incident timelines.',
      'Inspected and replayed HTTP requests in Burp Suite to validate suspicious parameters for triage reporting.'
    ],
    result: 'Authored 10+ high-fidelity detection rules and forensic summaries aligned to NIST 800-61.',
    stack: ['Nessus', 'Snort', 'Zimmerman Tools', 'Burp Suite'],
    githubUrl: '#'
  },
  {
    id: 'fim',
    title: 'File Integrity Monitor (FIM)',
    problem: 'Manual drift detection is slow and error-prone during forensic audits.',
    solution: [
      'Developed a Python tool using Watchdog to monitor file changes in real-time.',
      'Generates JSON-based baselines of SHA-256 hashes for cryptographic verification.',
      'Implemented one-shot scan modes for CI/CD pipeline integrity checks.'
    ],
    result: 'Zero-latency alert system for unauthorized file modifications with 100% hash accuracy.',
    stack: ['Python', 'Watchdog', 'JSON', 'Hashing'],
    githubUrl: '#'
  },
  {
    id: 'honeypot',
    title: 'Honeypot Threat Monitoring (Cowrie)',
    problem: 'Lack of visibility into real-world attacker TTPs and automated scanning noise.',
    solution: [
      'Deployed Cowrie SSH/Telnet honeypot on Ubuntu to capture live interaction data.',
      'Correlated logs in Splunk to distinguish between script bots and interactive sessions.',
      'Mapped attacker commands directly to MITRE ATT&CK techniques.'
    ],
    result: 'Captured 100s+ auth attempts; produced SOC-ready triage notes and dashboards.',
    stack: ['Splunk', 'Linux', 'Cowrie', 'MITRE ATT&CK'],
    githubUrl: '#'
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'AI & Automation',
    items: ['Prompt Engineering', 'Gemini API', 'AI-Assisted Scripting', 'Workflow Orchestration', 'LLM Security']
  },
  {
    category: 'Security Operations',
    items: ['Alert Triage', 'Jira (Ticketing)', 'Incident Lifecycle', 'NIST 800-61', 'MITRE ATT&CK', 'Documentation']
  },
  {
    category: 'Detection & Tools',
    items: ['Splunk', 'ELK Stack', 'Nessus', 'Snort', 'Burp Suite', 'Eric Zimmerman Tools', 'Wireshark']
  },
  {
    category: 'Automation & Systems',
    items: ['Python', 'PowerShell', 'Bash', 'SQL', 'Linux/Windows Server', 'AWS EC2', 'Docker']
  }
];

export const CERTS: Certification[] = [
  { name: 'Blue Team Level 1 (BTL1)', issuer: 'Security Blue Team', link: '#' },
  { name: 'CompTIA Security+', issuer: 'CompTIA', link: '#' },
  { name: 'Google Cybersecurity Professional', issuer: 'Google', link: '#' },
  { name: 'AZ-900 Azure Fundamentals', issuer: 'Microsoft', link: '#' }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Technical Incident Support (Alexa Developer Project)',
    company: 'City of Sacramento',
    period: '2022 - 2023',
    bullets: [
      'Monitored application behavior and API flows to identify service disruptions; performed root-cause analysis (RCA).',
      'Investigated authentication/integration issues across REST APIs and Salesforce CRM using structured troubleshooting.',
      'Escalated incidents with clear impact summaries and reproduction steps within a ticket-based workflow.',
      'Participated in Agile triage and post-incident reviews to reduce disruption recurrence.'
    ]
  },
  {
    role: 'Engineering & CS Tutor',
    company: 'Sacramento State',
    period: '2021 - 2022',
    bullets: [
      'Guided students through structured debugging workflows, analyzing error logs to form root-cause hypotheses.',
      'Communicated technical findings clearly to non-technical audiences, improving documentation habits.'
    ]
  }
];
