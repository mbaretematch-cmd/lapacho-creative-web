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
  Loader2,
  Menu,
  X,
  Linkedin
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('lexibridge');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Set your LinkedIn profile URL here
  const LINKEDIN_URL = "https://www.linkedin.com/in/stuart-robson-0a8754434";
  const WEB3FORMS_ACCESS_KEY = "06931be5-f53a-4fab-a401-ede21dd64cd6";

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
      title: 'LexiBridge — Client Onboarding & Compliance Portal',
      tagline: 'Automating Intake, Document Verification & Tenant Data Isolation',
      challenge: 'Professional service firms face massive administrative delays and data leakage risks managing client onboarding through unencrypted email chains and manual paperwork.',
      solution: 'A secure client onboarding portal that collects documentation, verifies client details, and maintains a clean, tamper-proof record of compliance.',
      architectureHighlights: [
        'PostgreSQL Row-Level Security (RLS) ensuring strict multi-tenant client isolation.',
        'Secure document intake vault with structured file validation and access control.',
        'Automated audit-ready export pipeline with timestamped verification records.'
      ],
      metrics: [
        { label: 'Client Intake', val: '80% Faster Onboarding' },
        { label: 'Data Isolation', val: 'PostgreSQL RLS Policies' },
        { label: 'Security Standard', val: 'Encrypted Cloud Storage' }
      ],
      stack: ['React', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
      videoSrc: '/videos/lexibridge.mp4',
      statusUrl: 'https://lexibridge-alpha.vercel.app'
    },
    queueflow: {
      id: 'queueflow',
      clientSector: 'Commercial Operations & Logistics',
      title: 'QueueFlow — Live Operations & Dispatch Hub',
      tagline: 'Real-Time Task Orchestration & Team Synchronization',
      challenge: 'Operational teams struggle with disconnected spreadsheets, physical counter delays, and dispatchers working without a single centralized view of tasks.',
      solution: 'A unified web dashboard connecting customer check-in stations, live status displays, and management consoles into a single synchronized state.',
      architectureHighlights: [
        'Real-time WebSocket data synchronization across all active operator screens.',
        'Dedicated live operations view with real-time status updates and priority queues.',
        'Operator telemetry tracking turnaround times and station throughput.'
      ],
      metrics: [
        { label: 'Sync Speed', val: 'Instant Real-Time State' },
        { label: 'Interface Design', val: 'Multi-Device Operations' },
        { label: 'State Management', val: 'Centralized Cloud Database' }
      ],
      stack: ['React', 'Supabase Realtime', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
      videoSrc: '/videos/queueflow.mp4',
      statusUrl: 'https://queue-flow-one.vercel.app'
    },
    quotepulse: {
      id: 'quotepulse',
      clientSector: 'B2B Sales & Quoting Engines',
      title: 'QuotePulse — Dynamic Quoting & Proposal Portal',
      tagline: 'Interactive Pricing Engine & Automated Proposal Generation',
      challenge: 'Sales and operations teams waste hours calculating custom client pricing and profit margins across complex, error-prone spreadsheets.',
      solution: 'An interactive quoting portal that allows clients or sales staff to dynamically configure services, calculate margins instantly, and generate clean proposals.',
      architectureHighlights: [
        'Dynamic pricing engine with multi-currency calculations and margin rules.',
        'Custom interactive configuration sliders linked to structured pricing matrices.',
        'Instant proposal compilation with direct CRM and database synchronization.'
      ],
      metrics: [
        { label: 'Calculation Speed', val: 'Instant Real-Time Estimates' },
        { label: 'Currency Support', val: 'Multi-Currency Ready' },
        { label: 'Lead Pipeline', val: 'Integrated Lead Capture' }
      ],
      stack: ['React', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
      videoSrc: '/videos/quotepulse.mp4',
      statusUrl: 'https://quote-pulse-nine.vercel.app'
    },
    mbaretematch: {
      id: 'mbaretematch',
      clientSector: 'Member Platforms & Web Apps',
      title: 'Mbarete Match — Full-Stack Community & Matching Platform',
      tagline: 'Relational Profiles, Instant Messaging & Secure Authentication',
      challenge: 'Building a responsive, dynamic social platform requires rock-solid authentication, private messaging, and granular user access controls.',
      solution: 'A full-stack social matching platform featuring real-time messaging, dynamic profile discovery, and strict row-level database security.',
      architectureHighlights: [
        'PostgreSQL Row-Level Security policies safeguarding user data and private chats.',
        'Real-time database sync for instant messaging and live interaction feedback.',
        'Responsive mobile-first interface with multi-language localization.'
      ],
      metrics: [
        { label: 'Data Protection', val: 'Supabase Row-Level Security' },
        { label: 'Messaging Core', val: 'Real-Time Live Chat' },
        { label: 'Architecture', val: 'Full-Stack React + PostgreSQL' }
      ],
      stack: ['React', 'Supabase RLS', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
      videoSrc: '/videos/mbarete-match.mp4',
      statusUrl: 'https://mbaretematch.com'
    }
  };

  const active = caseStudies[activeTab];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Lapacho Creative Lead Gateway");
    formData.append("subject", "New Project Discovery Request - Lapacho Creative");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
      } else {
        alert("Submission error: " + (data.message || "Please check your access key."));
      }
    } catch (err) {
      alert("Network error connecting to the submission service. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-emerald-400 selection:text-black overflow-x-hidden font-sans">
      
      {/* Subtle Mouse Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-40 hidden lg:block"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.04), transparent 80%)`
        }}
      />

      {/* Structural Atmospheric Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07090e]/95 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            
            {/* Geometric Lapacho Emblem */}
            <a href="#" className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-400/40 transition-colors">
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
            </a>

            <div className="flex items-center gap-3">
              <span className="font-bold tracking-tight text-white text-base">
                Lapacho<span className="text-emerald-400 font-light">Creative</span>
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-mono tracking-widest text-slate-400 uppercase border border-white/10 rounded-full bg-white/[0.02]">
                Custom Web App Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-slate-400 uppercase">
            <a href="#showcase" className="hover:text-white transition-colors">01. Showcase</a>
            <a href="#architecture" className="hover:text-white transition-colors">02. Architecture</a>
            <a href="#leadership" className="hover:text-white transition-colors">03. Principal</a>
            <a href="#model" className="hover:text-white transition-colors">04. Sprint Model</a>
            <a href="#contact" className="hover:text-white transition-colors">05. Discovery</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-[0_0_15px_rgba(52,211,153,0.25)] active:scale-95"
            >
              <span>DISCUSS PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Actions: Compact CTA & Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2.5">
            <a
              href="#contact"
              className="px-3 py-1.5 text-[11px] font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-[0_0_10px_rgba(52,211,153,0.2)]"
            >
              DISCUSS
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg border border-white/10 transition-all focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-Down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/[0.08] bg-[#07090e]/98 px-6 py-6 font-mono text-xs uppercase tracking-widest space-y-4 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3.5">
              <a 
                href="#showcase" 
                onClick={closeMobileMenu}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
              >
                <span>01. Showcase</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a 
                href="#architecture" 
                onClick={closeMobileMenu}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
              >
                <span>02. Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a 
                href="#leadership" 
                onClick={closeMobileMenu}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
              >
                <span>03. Principal</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a 
                href="#model" 
                onClick={closeMobileMenu}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
              >
                <span>04. Sprint Model</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold transition-all"
              >
                <span>05. Schedule Discovery</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 sm:pt-48 sm:pb-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>RAPID WEB APPLICATIONS & CLIENT PORTALS</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-8">
                Bespoke web applications & portals built for growing businesses.
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
                We design, engineer, and deploy custom client portals, internal operations dashboards, and rapid MVPs. Built on clean modern cloud architecture so your team saves hours of manual work every week.
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
                  BOOK A 15-MIN DISCOVERY CALL
                </a>
              </div>
            </div>

            {/* Right Column: Key Architectural Highlights */}
            <div className="lg:col-span-4 border-l border-white/[0.08] lg:pl-10 space-y-4 font-mono">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all hover:bg-white/[0.03]">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">// SPEED TO MARKET</p>
                <p className="text-3xl font-bold text-white">2–4 Weeks</p>
                <p className="text-xs text-slate-400 mt-1">Milestone-driven phased delivery</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all hover:bg-white/[0.03]">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">// ASSET OWNERSHIP</p>
                <p className="text-3xl font-bold text-emerald-400">100% IP</p>
                <p className="text-xs text-slate-400 mt-1">Complete source code & database transfer</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all hover:bg-white/[0.03]">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">// MODERN ARCHITECTURE</p>
                <p className="text-3xl font-bold text-white">Zero Bloat</p>
                <p className="text-xs text-slate-400 mt-1">Tailored relational database architecture</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Showcase Theater */}
      <section id="showcase" className="py-24 border-b border-white/[0.08] bg-[#090b12]/90 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">01. Live Systems</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Production Showcase</h2>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-sm">
              Select any system below to inspect the functional video capture and deep architectural breakdown.
            </p>
          </div>

          {/* Mobile-Only Compact 2x2 Switcher */}
          <div className="grid grid-cols-2 gap-2.5 lg:hidden mb-6">
            {Object.keys(caseStudies).map((key) => {
              const item = caseStudies[key];
              const isSelected = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected 
                      ? 'bg-emerald-500/15 border-emerald-400/80 shadow-md shadow-emerald-500/10' 
                      : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-mono tracking-wider uppercase text-slate-400 truncate">
                      {item.clientSector.split('&')[0].trim()}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    )}
                  </div>
                  <h3 className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {item.title.split('—')[0].trim()}
                  </h3>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Desktop-Only Selector List */}
            <div className="hidden lg:block lg:col-span-5 space-y-3">
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

            {/* Active Video & Rich Specs Theater */}
            <div className="w-full lg:col-span-7 bg-[#0c0e18] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Browser/Terminal Window Chrome Bar */}
              <div className="px-4 py-3 bg-[#080910] border-b border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="ml-2 text-slate-400 hidden sm:inline">{active.title.split('—')[0]}</span>
                </div>
                
                {/* Active Clickable Live URL Pill */}
                <a 
                  href={active.statusUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-0.5 rounded-full bg-black/60 border border-white/10 text-[10px] text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 transition-all truncate max-w-[200px] sm:max-w-[240px] flex items-center gap-1.5"
                >
                  <span>{active.statusUrl}</span>
                  <ArrowUpRight className="w-2.5 h-2.5 shrink-0" />
                </a>

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

                {/* The Problem & Solution Breakdown */}
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

                {/* Stack Tags & Direct Production Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {active.stack.map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={active.statusUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Open Live Deployment <ArrowUpRight className="w-3.5 h-3.5" />
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
              <span className="font-mono text-xs text-emerald-400 font-bold">01 // POSTGRESQL & SUPABASE</span>
              <h3 className="text-lg font-bold text-white">Granular Row-Level Security</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Database policies enforcing strict multi-tenant isolation directly at the database layer rather than relying on vulnerable frontend code.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all space-y-3 hover:bg-white/[0.03]">
              <span className="font-mono text-xs text-emerald-400 font-bold">02 // REAL-TIME DISPATCH</span>
              <h3 className="text-lg font-bold text-white">Automated Business Workflows</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Eliminating manual data re-entry and email ping-pong with synchronized live dashboards, automated triggers, and instant alerts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all space-y-3 hover:bg-white/[0.03]">
              <span className="font-mono text-xs text-emerald-400 font-bold">03 // RELIABLE DATA ARCHITECTURE</span>
              <h3 className="text-lg font-bold text-white">Audit Trails & Data Integrity</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Clean relational data models with complete history tracking, automated backups, and zero risk of silent data loss.
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
                  <span className="text-slate-200">UK-Educated Lead Software Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-200">Open Degree in Information Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-200">Modern Greenfield Architecture (React & Supabase)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-200">Direct Principal-to-Client Communication</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#0c0e18] border border-white/[0.08] p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-white font-semibold">Lapacho Creative</strong> operates on a streamlined, direct-delivery model. When you commission a sprint, your client portal, database schema, and custom React interface are designed and built directly by a dedicated UK-educated software developer.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                We eliminate agency bureaucracy, account managers, and junior developer handoffs. You get fast greenfield execution, transparent fixed milestone pricing, and clean modern codebases built to solve real business bottlenecks.
              </p>

              {/* Direct LinkedIn Credential Badge */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/50 hover:bg-emerald-500/10 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-all group shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>VERIFIED PRINCIPAL PROFILE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Commercial Terms & Milestone Sprint Model */}
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
                    Phased Sprint Build
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
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Real-Time Updates & Dynamic Workflow Portals</li>
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
              Schedule a Project Discovery Call
            </h2>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Book a 15-minute technical discovery session. We will evaluate your operational bottleneck, map out database dependencies, and deliver a fixed sprint proposal.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h3 className="text-base font-bold text-white font-mono">Discovery Request Received</h3>
                <p className="text-xs text-slate-300 font-mono">We will review your system requirements and contact you within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-4 font-mono text-xs" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-slate-400 uppercase mb-1.5">// Your Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="e.g. David Morrison"
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 uppercase mb-1.5">// Work Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="david@company.co.uk"
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 uppercase mb-1.5">// Operational Challenge or Portal Scope</label>
                  <textarea
                    required
                    name="message"
                    rows={3}
                    placeholder="Describe your operational bottleneck or the custom portal you need built..."
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 font-sans text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 rounded-xl transition-all uppercase tracking-wider shadow-lg shadow-emerald-500/25 active:scale-95 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <span>REQUEST 15-MIN DISCOVERY CALL</span>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* Studio Footer with LinkedIn Connection */}
      <footer className="py-8 border-t border-white/[0.06] text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Lapacho Creative. Custom Web Applications & Portals · UK Standards · Distributed Studio.</p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors group"
          >
            <Linkedin className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </footer>
    </div>
  );
}