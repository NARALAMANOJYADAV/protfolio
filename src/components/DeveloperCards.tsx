import { useState } from 'react';
import { 
  User, 
  GraduationCap, 
  Cpu, 
  ShieldCheck, 
  ExternalLink, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles,
  Layers,
  Code2,
  Calendar,
  Briefcase
} from 'lucide-react';

export const DeveloperCards = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'identity' | 'academics' | 'skills' | 'profiles'>('all');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 select-none">
      
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#FFCC00] font-black text-xs uppercase tracking-wider mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Sparkles className="h-3.5 w-3.5 text-[#FFCC00]" />
          <span>Structured Developer Dossier</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
          Developer Information <span className="bg-black text-[#FFCC00] px-2.5 py-0.5 rounded-lg">Cards</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm font-bold text-neutral-700 max-w-xl mx-auto">
          Structured card-type containers showcasing verified identity fields, academic records at NBKRIST, and technical capabilities.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          {[
            { id: 'all', label: 'All Containers' },
            { id: 'identity', label: 'Identity & Bio' },
            { id: 'academics', label: 'Academics (NBKRIST)' },
            { id: 'skills', label: 'Tech Stack & Skills' },
            { id: 'profiles', label: 'Verified Profiles' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-xl font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
                activeFilter === tab.id
                  ? 'bg-black text-[#FFCC00] -translate-y-0.5'
                  : 'bg-white text-black hover:bg-neutral-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Card Containers */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* ---------------- CARD CONTAINER 1: IDENTITY & PROFILE ---------------- */}
        {(activeFilter === 'all' || activeFilter === 'identity') && (
          <div className="rounded-3xl bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform">
            
            {/* Card Header Bar */}
            <div className="p-4 sm:p-5 bg-[#FFF9D2] border-b-3 border-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-black text-[#FFCC00] flex items-center justify-center font-black border-2 border-black">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-black text-base text-black leading-tight">Identity &amp; Profile Container</h3>
                  <span className="text-[11px] font-mono font-bold text-neutral-600">Personal &amp; Professional Fields</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-600 text-[10px] font-black">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>

            {/* Field Rows */}
            <div className="p-5 sm:p-6 space-y-3 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Full Legal Name:</span>
                <span className="font-black text-black">Narala Manoj Yadav</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Primary Handle:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-black bg-neutral-100 px-2 py-0.5 rounded border border-neutral-300">
                    @naralamanojyadav
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('naralamanojyadav', 'handle')}
                    className="p-1 text-neutral-500 hover:text-black"
                    title="Copy Handle"
                  >
                    {copiedField === 'handle' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Alternative Handle:</span>
                <span className="font-mono font-bold text-neutral-800">@naralamanoj</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Primary Discipline:</span>
                <span className="font-bold text-black">AI &amp; Data Science Engineer</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Secondary Discipline:</span>
                <span className="font-bold text-black">Full-Stack Software Developer</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Geographic Location:</span>
                <span className="font-bold text-neutral-800 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-[#E3170A]" /> Nellore, Andhra Pradesh, India
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Official Email:</span>
                <div className="flex items-center gap-2">
                  <a href="mailto:manojnarala245@gmail.com" className="font-mono font-bold text-black hover:text-[#E3170A] underline">
                    manojnarala245@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('manojnarala245@gmail.com', 'email')}
                    className="p-1 text-neutral-500 hover:text-black"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Tag */}
            <div className="px-5 py-3 bg-neutral-50 border-t-2 border-neutral-200 flex items-center justify-between text-[11px] font-mono font-bold">
              <span className="text-neutral-500">Status: Verified Creator</span>
              <span className="text-black bg-[#FFCC00] px-2 py-0.5 rounded border border-black font-black">tech4.in</span>
            </div>
          </div>
        )}

        {/* ---------------- CARD CONTAINER 2: ACADEMIC CREDENTIALS ---------------- */}
        {(activeFilter === 'all' || activeFilter === 'academics') && (
          <div className="rounded-3xl bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform">
            
            {/* Card Header Bar */}
            <div className="p-4 sm:p-5 bg-[#EFF6FF] border-b-3 border-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0077B5] text-white flex items-center justify-center font-black border-2 border-black">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-black text-base text-black leading-tight">Academic &amp; College Credentials</h3>
                  <span className="text-[11px] font-mono font-bold text-neutral-600">Institutional Records</span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-400 text-[10px] font-black">
                2022 - 2026
              </span>
            </div>

            {/* Field Rows */}
            <div className="p-5 sm:p-6 space-y-3 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Institution:</span>
                <span className="font-black text-black text-right">NBKR Institute of Science &amp; Technology</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Campus Location:</span>
                <span className="font-bold text-neutral-800">Vidyanagar, Nellore Dist., AP</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Accreditation &amp; Status:</span>
                <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                  Autonomous • NAAC 'A+' Grade
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Degree:</span>
                <span className="font-black text-black">Bachelor of Technology (B.Tech)</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Major / Branch:</span>
                <span className="font-bold text-[#0077B5]">Artificial Intelligence &amp; Data Science</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Core Coursework:</span>
                <span className="font-bold text-neutral-800 text-right">Machine Learning, Vision, DSA, DBMS, OS</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Applied Capstone:</span>
                <span className="font-bold text-neutral-800">YOLOv8 Edge Vision &amp; Counseling Portal</span>
              </div>
            </div>

            {/* Footer Tag */}
            <div className="px-5 py-3 bg-neutral-50 border-t-2 border-neutral-200 flex items-center justify-between text-[11px] font-mono font-bold">
              <span className="text-neutral-500">Affiliation: JNTUA / Autonomous</span>
              <span className="text-blue-900 font-black">Class of 2026</span>
            </div>
          </div>
        )}

        {/* ---------------- CARD CONTAINER 3: TECH STACK & CAPABILITIES ---------------- */}
        {(activeFilter === 'all' || activeFilter === 'skills') && (
          <div className="rounded-3xl bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform">
            
            {/* Card Header Bar */}
            <div className="p-4 sm:p-5 bg-[#F0FDF4] border-b-3 border-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#00A86B] text-white flex items-center justify-center font-black border-2 border-black">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-black text-base text-black leading-tight">Engineering &amp; Skill Fields</h3>
                  <span className="text-[11px] font-mono font-bold text-neutral-600">Technical Competencies</span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-400 text-[10px] font-black">
                Full-Stack + AI
              </span>
            </div>

            {/* Field Rows */}
            <div className="p-5 sm:p-6 space-y-3 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px] shrink-0">Languages:</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C'].map(l => (
                    <span key={l} className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-[11px] font-bold">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px] shrink-0">AI &amp; Computer Vision:</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {['YOLOv8', 'PyTorch', 'OpenCV', 'Scikit-Learn', 'CNN', 'Data Cleaning'].map(l => (
                    <span key={l} className="px-2 py-0.5 rounded bg-rose-50 border border-rose-200 text-rose-800 font-mono text-[11px] font-bold">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px] shrink-0">Web &amp; Backend:</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {['React.js', 'Flask', 'Node.js', 'Tailwind CSS', 'REST APIs', 'Vite'].map(l => (
                    <span key={l} className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-800 font-mono text-[11px] font-bold">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px] shrink-0">Databases:</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {['MySQL', 'PostgreSQL', 'SQLite', 'Relational Schema'].map(l => (
                    <span key={l} className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-[11px] font-bold">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pt-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px] shrink-0">DevOps &amp; Tools:</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {['Git', 'GitHub', 'Linux Shell', 'Postman', 'Render', 'Netlify'].map(l => (
                    <span key={l} className="px-2 py-0.5 rounded bg-purple-50 border border-purple-200 text-purple-800 font-mono text-[11px] font-bold">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Tag */}
            <div className="px-5 py-3 bg-neutral-50 border-t-2 border-neutral-200 flex items-center justify-between text-[11px] font-mono font-bold">
              <span className="text-neutral-500">Architecture: End-to-End</span>
              <span className="text-emerald-800 font-black">Production Tested</span>
            </div>
          </div>
        )}

        {/* ---------------- CARD CONTAINER 4: VERIFIED ACCOUNTS & PROFILES ---------------- */}
        {(activeFilter === 'all' || activeFilter === 'profiles') && (
          <div className="rounded-3xl bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform">
            
            {/* Card Header Bar */}
            <div className="p-4 sm:p-5 bg-[#FFF1F2] border-b-3 border-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E3170A] text-white flex items-center justify-center font-black border-2 border-black">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-black text-base text-black leading-tight">Verified Platforms &amp; Handles</h3>
                  <span className="text-[11px] font-mono font-bold text-neutral-600">Official Links &amp; Profiles</span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-400 text-[10px] font-black">
                Authoritative
              </span>
            </div>

            {/* Field Rows */}
            <div className="p-5 sm:p-6 space-y-3 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">GitHub (Primary):</span>
                <a 
                  href="https://github.com/NARALAMANOJYADAV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono font-bold text-black hover:text-[#E3170A] underline"
                >
                  <span>github.com/NARALAMANOJYADAV</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">GitHub (Alternative):</span>
                <a 
                  href="https://github.com/naralamanoj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono font-bold text-black hover:text-[#E3170A] underline"
                >
                  <span>github.com/naralamanoj</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">LinkedIn:</span>
                <a 
                  href="https://www.linkedin.com/in/narala-manoj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono font-bold text-[#0077B5] hover:underline"
                >
                  <span>linkedin.com/in/narala-manoj</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-200 gap-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Official Website:</span>
                <a 
                  href="https://tech4.in"
                  className="inline-flex items-center gap-1.5 font-mono font-bold text-black hover:underline"
                >
                  <span>https://tech4.in</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1">
                <span className="font-mono text-neutral-500 font-bold uppercase text-[10px]">Curriculum Vitae:</span>
                <a 
                  href="/NARALA-MANOJ-Resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black text-[#FFCC00] font-black text-xs hover:bg-neutral-800 transition-colors"
                >
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>

            {/* Footer Tag */}
            <div className="px-5 py-3 bg-neutral-50 border-t-2 border-neutral-200 flex items-center justify-between text-[11px] font-mono font-bold">
              <span className="text-neutral-500">Security: Verified Canonical</span>
              <span className="text-black font-black">Googlebot Crawlable</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
