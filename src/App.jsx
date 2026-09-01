import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Check, 
  ArrowRight,
  ShieldCheck, 
  Zap, 
  Database,
  Lock,
  Layers,
  Sparkles,
  Terminal,
  Activity,
  Play,
  Cpu,
  CheckCircle2,
  Code2,
  AlertCircle,
  FileCode,
  Workflow,
  UserCheck
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('lexibridge');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const caseStudies = {
    lexibridge: {
      id: 'lexibridge',
      clientSector: 'Legal & Professional Services',
      title: 'LexiBridge — Regulatory Compliance Gateway',
      tagline: 'Automating AML Origin-of-Funds Verification & SRA Compliance',
      challenge: 'UK legal practices face severe SRA audit penalties when managing partner onboarding manually through paper forms and unencrypted email PDF chains, leading to 5-day intake delays.',
      solution: 'An encrypted client onboarding portal that automatically verifies proof of identity, screens against global PEP lists, validates source-of-funds documentation, and compiles a sealed compliance audit trail.',
      architectureHighlights: [
        'PostgreSQL Row-Level Security (RLS) ensuring strict multi-tenant legal client isolation.',
        'Encrypted document intake vault with dynamic PDF hashing and verification logs.',
        'Automated SRA audit-ready export pipeline with timestamped compliance certificates.'
      ],
      metrics: [
        { label: 'Regulatory Alignment', val: 'SRA & AML Built-in' },
        { label: 'Intake Velocity', val: '80% Faster Sign-up' },
        { label: 'Security Standard', val: '256-Bit Encrypted Vault' }
      ],
      stack: ['React', 'PostgreSQL', 'Encrypted Auth', 'Tailwind CSS', 'Vite'],
      videoSrc: '/videos/lexibridge.mp4',
      statusUrl: 'https://lexibridge.internal/compliance/live'
    },
    queueflow: {
      id: 'queueflow',
      clientSector: 'Commercial Operations & Logistics',
      title: 'QueueFlow — Multi-Station Dispatch Engine',
      tagline: 'Zero-Latency Task Orchestration & Live Signage Sync',
      challenge: 'High-footfall customer counters suffer from bottlenecked queues, disconnected physical TV displays, and desk dispatchers working off manual paper tickets without centralized oversight.',
      solution: 'A sub-50ms event-driven dispatch platform connecting customer check-in terminals, dynamic digital TV signage, desk operator consoles, and operations manager dashboards into a unified real-time state.',
      architectureHighlights: [
        'Bi-directional WebSocket streaming architecture with under 45ms state distribution.',
        'Zero-refresh digital TV signage view with audio chime announcements and priority routing.',
        'Operator desk telemetry tracking average turnaround times and queue velocity per station.'
      ],
      metrics: [
        { label: 'WebSocket Latency', val: '< 45ms Synchronization' },
        { label: 'Hardware Output', val: 'Digital TV Signage + Kiosks' },
        { label: 'Queue Architecture', val: 'Atomic Dispatch State' }
      ],
      stack: ['React', 'Supabase Realtime', 'WebSockets', 'Tailwind CSS', 'Vite'],
      videoSrc: '/videos/queueflow.mp4',
      statusUrl: 'wss://dispatch.queueflow.internal/stream'
    },
    quotepulse: {
      id: 'quotepulse',
      clientSector: 'Fintech & Quoting Engines',
      title: 'QuotePulse — Dynamic Algorithmic Pricing Portal',
      tagline: 'Real-Time Topology Modeling & Auto-Contract Dispatch',
      challenge: 'Commercial sales engineers waste 3+ hours per quote calculating multi-tier server configurations, bandwidth multipliers, and cloud profit margins in error-prone spreadsheets.',
      solution: 'An interactive architectural estimation portal that allows clients to visually scale nodes and compute resources while calculating margin thresholds in real time and automatically compiling contract proposals.',
      architectureHighlights: [
        'Dynamic pricing state engine with multi-currency conversion (GBP, USD, EUR).',
        'Custom interactive topology sliders linked to recursive compute cost matrices.',
        'Instant client proposal compilation with automated CRM lead synchronization.'
      ],
      metrics: [
        { label: 'Quoting Precision', val: '99.4% Automated Accuracy' },
        { label: 'Currency Switcher', val: 'GBP / USD / EUR Engine' },
        { label: 'CRM Synchronization', val: 'Integrated Prospect Pipeline' }
      ],
      stack: ['React', 'Node.js Engine', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
      videoSrc: '/videos/quotepulse.mp4',
      statusUrl: 'https://quotepulse.engine/calculator/v2'
    },
    mbaretematch: {
      id: 'mbaretematch',
      clientSector: 'High-Throughput Web Platforms',
      title: 'Mbarete Match — Scalable Social Matching Engine',
      tagline: 'Row-Level Security Governance & Instant Messaging Core',
      challenge: 'Consumer social platforms require sub-second chat updates, robust spam mitigation, and strict data privacy protections without ballooning backend infrastructure expenses.',
      solution: 'A full-stack matching platform featuring instant two-way WebSocket messaging, dynamic proximity calculations, verified profile workflows, and complete bilingual localization.',
      architectureHighlights: [
        'Comprehensive PostgreSQL Row-Level Security policies safeguarding private user chats.',
        'Real-time Supabase message sync with optimistic UI updates and zero layout jank.',
        'Dynamic GPS coordinate proximity calculations and localized English/Spanish routing.'
      ],
      metrics: [
        { label: 'Data Security', val: 'Supabase Row-Level Security' },
        { label: 'Messaging Core', val: 'Zero-Latency 2-Way Chat' },
        { label: 'Localization', val: 'Bilingual Routing (EN/ES)' }
      ],
      stack: ['React', 'Supabase RLS', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
      videoSrc: '/videos/mbarete-match.mp4',
      statusUrl: 'wss://app.mbaretematch.com/realtime/v1'
    }
  };

  const active = caseStudies[activeTab];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-emerald-400 selection:text-black overflow-x-hidden font-sans">
      
      {/* Dynamic Cursor Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-40 hidden lg:block"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.04), transparent 80%)`
        }}
      />

      {/* Grid Pattern Underlay */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07090e]/90 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            
            {/* Geometric Lapacho Emblem */}
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-5 h-5 text-emerald-400"
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2C9 7 9 9 12 12C15 9 15 7 12 2Z" fill="currentColor" fillOpacity="0.25" />
                <path d="M12 22C9 17 9 15 12 12C15 15 15 17 12 22Z" fill="currentColor" fillOpacity="0.25" />
                <path d="M2 12C7 9 9 9 12 12C9 15 7 15 2 12Z" fill="currentColor" fillOpacity="0.25" />
                <path d="M22 12C17 9 15 9 12 12C15 15 17 15 22 12Z" fill="currentColor" fillOpacity="0.25" />
                <circle cx="12" cy="12" r="1.5" className="fill-emerald-400" />
              </svg>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold tracking-tight text-white text-base">
                Lapacho<span className="text-emerald-400 font-light">Creative</span>
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-mono tracking-widest text-slate-400 uppercase border border-white/10 rounded-full bg-white/[0.02]">
                Bespoke Software Studio
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-slate-400 uppercase">
            <a href="#showcase" className="hover:text-white transition-colors">01. Showcase</a>
            <a href="#architecture" className="hover:text-white transition-colors">02. Architecture</a>
            <a href="#leadership" className="hover:text-white transition-colors">03. Principal</a>
            <a href="#model" className="hover:text-white transition-colors">04. Sprint Model</a>
            <a href="#contact" className="hover:text-white transition-colors">05. Contact</a>
          </nav>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-[0_0_15px_rgba(52,211,153,0.25)] active:scale-95"
          >
            <span>DISCUSS PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>FIXED-PRICE 14-DAY RAPID ENGINEERING SPRINTS</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-8">
                Bespoke software for companies that have outgrown templates.
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
                We design, engineer, and deploy high-performance operational hubs, real-time dispatch systems, and compliance gateways. Production-ready software delivered in two weeks with zero hourly runaways.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#showcase"
                  className="px-6 py-3.5 text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-[0_0_25px_rgba(52,211,153,0.25)] flex items-center gap-2 active:scale-95"
                >
                  EXPLORE PRODUCTION BUILDS <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3.5 text-xs font-mono font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/30 rounded-lg transition-all bg-white/[0.02]"
                >
                  SCHEDULE ARCHITECTURE REVIEW
                </a>
              </div>
            </div>

            {/* Right Column: Key Architectural Highlights */}
            <div className="lg:col-span-4 border-l border-white/[0.08] lg:pl-10 space-y-4 font-mono">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all hover:bg-white/[0.03]">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">// SPEED TO MARKET</p>
                <p className="text-3xl font-bold text-white">14 Days</p>
                <p className="text-xs text-slate-400 mt-1">From architectural spec to live deployment</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all hover:bg-white/[0.03]">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">// ASSET OWNERSHIP</p>
                <p className="text-3xl font-bold text-emerald-400">100% IP</p>
                <p className="text-xs text-slate-400 mt-1">Complete source code & database transfer</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all hover:bg-white/[0.03]">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">// REAL-TIME CORE</p>
                <p className="text-3xl font-bold text-white">&lt; 50ms</p>
                <p className="text-xs text-slate-400 mt-1">Sub-second WebSocket state distribution</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Showcase Theater */}
      <section id="showcase" className="py-24 border-b border-white/[0.08] bg-[#090b12]/90 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">01. Live Systems</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Production Showcase</h2>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-sm">
              Click any system below to inspect the functional video capture and deep architectural breakdown.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {Object.keys(caseStudies).map((key) => {
                const item = caseStudies[key];
                const isSelected = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 ${
                      isSelected 
                        ? 'bg-gradient-to-r from-emerald-500/10 via-white/[0.02] to-transparent border-emerald-500/40 shadow-lg shadow-emerald-500/5 translate-x-1.5' 
                        : 'bg-white/[0.01] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                        {item.clientSector}
                      </span>
                      {isSelected && (
                        <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          INSPECTION ACTIVE
                        </span>
                      )}
                    </div>
                    <h3 className={`text-base font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {item.tagline}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Video & Rich Specs Theater */}
            <div className="lg:col-span-7 bg-[#0c0e18] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Browser/Terminal Window Chrome Bar */}
              <div className="px-4 py-3 bg-[#080910] border-b border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="ml-2 text-slate-400 hidden sm:inline">{active.title.split('—')[0]}</span>
                </div>
                <div className="px-3 py-0.5 rounded-full bg-black/60 border border-white/[0.06] text-[10px] text-slate-400 truncate max-w-[240px]">
                  {active.statusUrl}
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="aspect-video bg-black relative">
                <video 
                  key={active.videoSrc}
                  controls 
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src={active.videoSrc} type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>
              </div>

              {/* Detailed Technical Specifications & Case Study Narrative */}
              <div className="p-6 sm:p-8 space-y-6">
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-1.5">{active.title}</h4>
                  <p className="text-xs font-mono text-emerald-400">{active.tagline}</p>
                </div>

                {/* Problem & Solution Breakdown */}
                <div className="space-y-4 text-xs leading-relaxed border-t border-white/[0.06] pt-5">
                  <div className="bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-slate-300 font-mono font-bold uppercase text-[11px]">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                      <span>The Operational Bottleneck</span>
                    </div>
                    <p className="text-slate-400">{active.challenge}</p>
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-slate-300 font-mono font-bold uppercase text-[11px]">
                      <Workflow className="w-3.5 h-3.5 text-emerald-400" />
                      <span>The Engineered Solution</span>
                    </div>
                    <p className="text-slate-300">{active.solution}</p>
                  </div>
                </div>

                {/* Architectural Highlights */}
                <div className="space-y-2.5">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400">// Architectural Blueprint</p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {active.architectureHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 bg-white/[0.01] p-2.5 rounded-lg border border-white/[0.03]">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-white/[0.06] py-4">
                  {active.metrics.map((m, idx) => (
                    <div key={idx} className="font-mono">
                      <p className="text-[10px] text-slate-400 uppercase">{m.label}</p>
                      <p className="text-xs font-bold text-white mt-0.5">{m.val}</p>
                    </div>
                  ))}
                </div>

                {/* Stack Tags & Conversion Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {active.stack.map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Request Similar Scope <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Engineering Foundations */}
      <section id="architecture" className="py-24 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">02. Engineering Standards</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Engineered for clean governance.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all space-y-3 hover:bg-white/[0.03]">
              <span className="font-mono text-xs text-emerald-400 font-bold">01 // POSTGRESQL & RLS</span>
              <h3 className="text-lg font-bold text-white">Granular Row-Level Security</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Database policies enforcing ironclad tenant isolation at the PostgreSQL level rather than relying on brittle client-side logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all space-y-3 hover:bg-white/[0.03]">
              <span className="font-mono text-xs text-emerald-400 font-bold">02 // SUB-50MS WEBSOCKETS</span>
              <h3 className="text-lg font-bold text-white">Event-Driven Task Routing</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Real-time pipelines designed for high-concurrency environments—coordinating order flows, dispatchers, and manager dashboards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all space-y-3 hover:bg-white/[0.03]">
              <span className="font-mono text-xs text-emerald-400 font-bold">03 // UK & US REGULATORY ALIGNMENT</span>
              <h3 className="text-lg font-bold text-white">Strict Compliance & Audits</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                KYC and AML verification gates built to meet UK SRA and institutional requirements with comprehensive audit logging.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Principal Leadership Section */}
      <section id="leadership" className="py-24 border-b border-white/[0.08] bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
                03. Studio Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                Senior architectural execution. No junior handoffs.
              </h2>
              <div className="space-y-3.5 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-200">UK-Educated Senior Software Architect</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-200">Open Degree in Information Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-200">Bilingual English / Spanish Technical Operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-200">Direct Principal-to-Client Communication</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#0c0e18] border border-white/[0.08] p-8 sm:p-10 rounded-3xl shadow-xl space-y-5">
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-white font-semibold">Lapacho Creative</strong> operates on a high-velocity, single-thread engineering model. When you commission a sprint, your system architecture, PostgreSQL database schema, and live React frontend are designed and built directly by a seasoned British principal engineer.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                We eliminate the agency overhead of account managers, salespeople, and unvetted junior developers. You get direct architectural consultation, guaranteed sprint timelines, and production code engineered to stringent enterprise and regulatory standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Commercial Terms & 14-Day Sprint Model */}
      <section id="model" className="py-24 border-b border-white/[0.08] bg-[#090b12]/90">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">04. Commercial Model</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Predictable Fixed-Fee Sprints</h2>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-sm">
              No nebulous billable hours. Transparent milestone pricing with guaranteed delivery schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* The Sprint Package */}
            <div className="p-8 rounded-3xl bg-[#0c0e18] border-2 border-emerald-400/40 relative flex flex-col justify-between shadow-[0_0_40px_-15px_rgba(16,185,129,0.2)]">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase">
                    14-Day Rapid Sprint
                  </span>
                  <span className="text-xs font-mono text-slate-400">Fixed Cost</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Custom Platform Build</h3>
                <p className="text-sm text-slate-400 mb-6">Complete bespoke portal, custom database schema, API logic, and production deployment.</p>

                <div className="mb-8 font-mono">
                  <span className="text-4xl font-bold text-white">£2,500 – £3,500</span>
                  <span className="text-xs text-slate-400 block mt-1">50% kickoff deposit / 50% on verified launch</span>
                </div>

                <ul className="space-y-3 text-xs font-mono text-slate-300 mb-8">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Full React + Tailwind Custom UI</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> PostgreSQL Database & RLS Access Control</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Real-Time WebSockets & Dynamic Calculators</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 100% Full Source Code & IP Handover</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 14 Days Post-Launch Warranty Support</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center py-3.5 text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(52,211,153,0.3)]"
              >
                APPLY FOR NEXT SPRINT WINDOW
              </a>
            </div>

            {/* Retainer Package */}
            <div className="p-8 rounded-3xl bg-[#0c0e18] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.08] text-slate-300 uppercase">
                    Monthly SLA
                  </span>
                  <span className="text-xs font-mono text-slate-400">Continuous Support</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Platform Care & Retention</h3>
                <p className="text-sm text-slate-400 mb-6">Proactive infrastructure monitoring, automated backups, and dedicated feature iteration.</p>

                <div className="mb-8 font-mono">
                  <span className="text-4xl font-bold text-white">£400 – £600</span>
                  <span className="text-xs text-slate-400 block mt-1">per month / Cancel anytime</span>
                </div>

                <ul className="space-y-3 text-xs font-mono text-slate-300 mb-8">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-slate-400" /> Continuous Database Scaling & Health Audits</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-slate-400" /> Up to 10 Hours of Monthly Feature Additions</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-slate-400" /> 4-Hour Response Service Level Agreement</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-slate-400" /> Security Dependency Patches & Backups</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center py-3.5 text-xs font-mono font-bold text-slate-300 bg-white/[0.05] hover:bg-white/10 rounded-xl transition-all border border-white/10"
              >
                INQUIRE ABOUT RETAINERS
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Discovery Booking Form */}
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="border border-white/[0.08] bg-[#0c0e18] p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">05. Initial Engagement</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
              Schedule an Architecture Review
            </h2>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Book a 20-minute technical discovery session. We will evaluate your operational bottleneck, map out database dependencies, and deliver a fixed sprint proposal.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h3 className="text-base font-bold text-white font-mono">Architecture Request Received</h3>
                <p className="text-xs text-slate-300 font-mono">We will review your system requirements and contact you within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-4 font-mono text-xs" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-slate-400 uppercase mb-1.5">// Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. David Morrison"
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 uppercase mb-1.5">// Work Email</label>
                  <input
                    required
                    type="email"
                    placeholder="david@company.co.uk"
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 uppercase mb-1.5">// Operational Challenge or System Scope</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your current software bottleneck or the custom portal you need built..."
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 font-sans text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all uppercase tracking-wider shadow-lg shadow-emerald-500/25 active:scale-95"
                >
                  REQUEST 20-MIN ARCHITECTURE CALL
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* Minimal Studio Footer */}
      <footer className="py-8 border-t border-white/[0.06] text-center text-xs font-mono text-slate-500">
        <p>© {new Date().getFullYear()} Lapacho Creative. High-performance software engineering.</p>
      </footer>
    </div>
  );
}