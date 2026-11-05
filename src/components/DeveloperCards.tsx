import { useState } from 'react';
import { 
  CreditCard, 
  ShieldCheck, 
  Car, 
  Vote, 
  QrCode, 
  Wifi, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Award,
  Cpu,
  GraduationCap
} from 'lucide-react';

type CardType = 'atm' | 'aadhar' | 'license' | 'voter';

export const DeveloperCards = () => {
  const [selectedCard, setSelectedCard] = useState<CardType>('atm');
  const [avatarMode, setAvatarMode] = useState<'photo' | '3d'>('photo');

  const avatarSrc = avatarMode === 'photo' 
    ? '/narala-manoj-yadav.jpg' 
    : '/narala-manoj-transparent.png';

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4 select-none">
      
      {/* Header Info */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-[#FFCC00] border-2 border-black font-black text-xs uppercase tracking-wider mb-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <Sparkles className="h-3.5 w-3.5 text-[#FFCC00]" />
          <span>Official Developer Credentials &amp; Card Wallet</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tight">
          Unique Identity <span className="bg-black text-[#FFCC00] px-3 py-0.5 rounded-xl">Cards</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base font-semibold text-neutral-800 max-w-xl mx-auto">
          Explore Narala Manoj Yadav's verified developer credentials reimagined in authentic Indian card styles.
        </p>
      </div>

      {/* Card Switcher Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        <button
          type="button"
          onClick={() => setSelectedCard('atm')}
          className={`px-4 py-2 rounded-2xl font-black text-xs sm:text-sm border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 ${
            selectedCard === 'atm'
              ? 'bg-[#18181B] text-[#FFCC00] -translate-y-1'
              : 'bg-white text-black hover:bg-neutral-100'
          }`}
        >
          <CreditCard className="h-4 w-4" />
          <span>ATM / Debit Card</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedCard('aadhar')}
          className={`px-4 py-2 rounded-2xl font-black text-xs sm:text-sm border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 ${
            selectedCard === 'aadhar'
              ? 'bg-[#E11D48] text-white -translate-y-1'
              : 'bg-white text-black hover:bg-neutral-100'
          }`}
        >
          <ShieldCheck className="h-4 w-4" />
          <span>Aadhar Card</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedCard('license')}
          className={`px-4 py-2 rounded-2xl font-black text-xs sm:text-sm border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 ${
            selectedCard === 'license'
              ? 'bg-[#0077B5] text-white -translate-y-1'
              : 'bg-white text-black hover:bg-neutral-100'
          }`}
        >
          <Car className="h-4 w-4" />
          <span>Driving License</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedCard('voter')}
          className={`px-4 py-2 rounded-2xl font-black text-xs sm:text-sm border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 ${
            selectedCard === 'voter'
              ? 'bg-[#00A86B] text-white -translate-y-1'
              : 'bg-white text-black hover:bg-neutral-100'
          }`}
        >
          <Vote className="h-4 w-4" />
          <span>Voter ID Card</span>
        </button>
      </div>

      {/* Picture Switcher (3D vs Real Photo) */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-xs font-mono font-bold text-neutral-700">Avatar Style on Cards:</span>
        <div className="inline-flex p-1 rounded-full bg-black border-2 border-black">
          <button
            type="button"
            onClick={() => setAvatarMode('photo')}
            className={`px-3 py-0.5 rounded-full text-xs font-bold transition-all ${
              avatarMode === 'photo' ? 'bg-[#FFCC00] text-black' : 'text-white'
            }`}
          >
            📷 Real Photo
          </button>
          <button
            type="button"
            onClick={() => setAvatarMode('3d')}
            className={`px-3 py-0.5 rounded-full text-xs font-bold transition-all ${
              avatarMode === '3d' ? 'bg-[#FFCC00] text-black' : 'text-white'
            }`}
          >
            ✨ 3D Render
          </button>
        </div>
      </div>

      {/* =========================================================================
          THE INTERACTIVE CARDS STAGE
          ========================================================================= */}
      <div className="flex justify-center">

        {/* ---------------- CARD 1: ATM / PLATINUM DEBIT CARD ---------------- */}
        {selectedCard === 'atm' && (
          <div className="relative w-full max-w-[500px] aspect-[1.586/1] rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-neutral-900 via-zinc-900 to-black text-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
            {/* Gloss overlay */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-full h-full bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />

            {/* Top row */}
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#FFCC00] uppercase font-bold block">
                  TECH4 GLOBAL BANK
                </span>
                <span className="text-xs sm:text-sm font-black tracking-wider text-white">
                  PLATINUM DEVELOPER CARD
                </span>
              </div>
              <Wifi className="h-6 w-6 text-white/80 rotate-90" />
            </div>

            {/* EMV Chip & Contactless */}
            <div className="relative z-10 flex items-center gap-4 my-2">
              {/* Golden Chip */}
              <div className="w-12 h-9 rounded-lg bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 border border-amber-300 p-1 flex flex-col justify-between shadow-md">
                <div className="w-full h-1 bg-amber-700/40 rounded-full" />
                <div className="w-3/4 h-1 bg-amber-700/40 rounded-full" />
                <div className="w-full h-1 bg-amber-700/40 rounded-full" />
              </div>

              {/* Holographic Dev Tag */}
              <div className="px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-[10px] font-mono font-bold tracking-widest text-emerald-400">
                AI &amp; FULL-STACK
              </div>
            </div>

            {/* Card Number */}
            <div className="relative z-10">
              <p className="font-mono text-lg sm:text-2xl font-bold tracking-[0.22em] text-white/95 drop-shadow">
                4216 •••• •••• 2026
              </p>
            </div>

            {/* Bottom Row: Holder Name & Dates & Mastercard/Visa style badge */}
            <div className="relative z-10 flex items-end justify-between pt-1">
              <div>
                <span className="text-[9px] font-mono text-neutral-400 block tracking-widest uppercase">
                  CARDHOLDER / VALID THRU
                </span>
                <span className="font-mono font-black text-sm sm:text-base text-white tracking-wider block">
                  NARALA MANOJ YADAV
                </span>
                <span className="text-[10px] font-mono text-[#FFCC00]">
                  EXP: 06/2026 • NBKRIST
                </span>
              </div>

              {/* Mastercard style interlocking spheres */}
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#E3170A] opacity-90 shadow-md" />
                <div className="w-8 h-8 rounded-full bg-[#FFCC00] opacity-90 -ml-4 shadow-md mix-blend-screen" />
              </div>
            </div>
          </div>
        )}


        {/* ---------------- CARD 2: AADHAR CARD ---------------- */}
        {selectedCard === 'aadhar' && (
          <div className="relative w-full max-w-[500px] aspect-[1.586/1] rounded-3xl p-5 sm:p-6 bg-[#FCFBF7] text-black border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
            
            {/* Top Tricolor Bar (Indian Flag Saffron, White, Green) */}
            <div className="relative z-10">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] rounded-full mb-2 border border-black/20" />
              <div className="flex items-center justify-between border-b-2 border-neutral-300 pb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-red-600 text-white font-black text-[9px] flex items-center justify-center border border-black">
                    INDIA
                  </div>
                  <div>
                    <span className="font-bold text-[10px] text-neutral-900 block leading-tight">
                      भारत सरकार • Government of India
                    </span>
                    <span className="font-extrabold text-[11px] text-[#E11D48] block leading-tight">
                      Developer Identification Authority
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[9px] font-bold text-neutral-500">
                  UIDAI / TECH4-IN
                </span>
              </div>
            </div>

            {/* Middle Section: Photo + Official Details + QR */}
            <div className="relative z-10 flex items-center gap-4 my-2">
              {/* Photo */}
              <div className="w-20 sm:w-24 aspect-[3/4] rounded-xl overflow-hidden border-2 border-black bg-neutral-100 shadow-md shrink-0">
                <img
                  src={avatarSrc}
                  alt="Narala Manoj Yadav"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Data Details */}
              <div className="flex-1 space-y-0.5 text-xs">
                <div>
                  <span className="text-[9px] font-bold text-neutral-500 block">Name:</span>
                  <span className="font-black text-sm text-black block leading-tight">Narala Manoj Yadav</span>
                  <span className="text-[10px] font-bold text-neutral-700 block">నరాల మనోజ్ యాదవ్</span>
                </div>
                <div className="pt-0.5">
                  <span className="text-[9px] font-bold text-neutral-500 block">DOB / Batch:</span>
                  <span className="font-bold text-neutral-800">2003 / 2022 - 2026 (B.Tech)</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-neutral-500 block">Gender / Specialization:</span>
                  <span className="font-bold text-neutral-800">Male • Artificial Intelligence &amp; DS</span>
                </div>
              </div>

              {/* QR Code Graphic */}
              <div className="hidden sm:flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-neutral-300 shadow-sm shrink-0">
                <QrCode className="h-12 w-12 text-black" />
                <span className="text-[8px] font-mono font-bold text-neutral-600 mt-0.5">SCAN VERIFY</span>
              </div>
            </div>

            {/* Bottom Row: Red Aadhar Number & Slogan */}
            <div className="relative z-10 border-t-2 border-red-600 pt-1.5 flex flex-col items-center justify-center">
              <p className="font-mono text-base sm:text-xl font-black tracking-widest text-[#E11D48] drop-shadow-sm">
                8106 &nbsp; 9050 &nbsp; 2026
              </p>
              <p className="text-[9px] font-bold text-neutral-600 tracking-wider">
                మేరా కోడ్, మేరీ పెహచాన్ • My Code, My Identity
              </p>
            </div>
          </div>
        )}


        {/* ---------------- CARD 3: DRIVING LICENSE ---------------- */}
        {selectedCard === 'license' && (
          <div className="relative w-full max-w-[500px] aspect-[1.586/1] rounded-3xl p-5 sm:p-6 bg-[#EFF6FF] text-black border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
            
            {/* Header: Andhra Pradesh Transport Department */}
            <div className="relative z-10 border-b-2 border-blue-900 pb-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0077B5] text-white font-black text-[9px] flex items-center justify-center border-2 border-black">
                    AP
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-blue-950 block leading-tight">
                      Union of India • Driving Licence
                    </span>
                    <span className="text-[11px] font-black text-[#0077B5] block leading-tight">
                      Andhra Pradesh Software &amp; AI Authority
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono font-bold text-neutral-500 block">DL NO:</span>
                  <span className="font-mono font-black text-xs text-blue-900 block">
                    AP-26-2022-NMY
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Section: Photo & Driving Classes */}
            <div className="relative z-10 flex items-start gap-4 my-1.5">
              {/* Photo with Smart Chip */}
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <div className="w-20 sm:w-22 aspect-[3/4] rounded-xl overflow-hidden border-2 border-black bg-white shadow-md">
                  <img
                    src={avatarSrc}
                    alt="Narala Manoj Yadav"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Microchip */}
                <div className="w-8 h-6 rounded bg-amber-400 border border-amber-600 p-0.5 flex flex-col justify-around">
                  <div className="h-0.5 bg-amber-700/50 w-full" />
                  <div className="h-0.5 bg-amber-700/50 w-3/4" />
                </div>
              </div>

              {/* Data & Authorised Categories */}
              <div className="flex-1 space-y-1 text-xs">
                <div>
                  <span className="text-[9px] font-bold text-neutral-500 block">Name &amp; Father / Institution:</span>
                  <span className="font-black text-sm text-black block leading-tight">Narala Manoj Yadav</span>
                  <span className="text-[10px] font-bold text-blue-900 block">NBKR Institute of Science &amp; Technology</span>
                </div>

                <div className="p-2 rounded-xl bg-white border border-blue-200 shadow-sm space-y-0.5">
                  <span className="text-[9px] font-mono font-black text-blue-900 block uppercase">
                    Authorised To Drive / Deploy:
                  </span>
                  <div className="grid grid-cols-2 gap-1 text-[10px] font-bold text-neutral-800">
                    <div>• LMV: Full-Stack React</div>
                    <div>• HMV: Python / Flask</div>
                    <div>• TRANS: YOLOv8 Vision</div>
                    <div>• MCWG: Java &amp; DSA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Validity & Blood Group */}
            <div className="relative z-10 border-t-2 border-blue-900 pt-1.5 flex items-center justify-between text-[10px] font-mono font-bold">
              <div>
                <span className="text-neutral-500">VALIDITY: </span>
                <span className="text-black font-black">2022 - 2026 (CAREER LIFETIME)</span>
              </div>
              <div className="px-2 py-0.5 rounded bg-red-100 text-red-800 border border-red-300 font-black">
                BLOOD GP: AI+
              </div>
            </div>
          </div>
        )}


        {/* ---------------- CARD 4: VOTER ID (EPIC) CARD ---------------- */}
        {selectedCard === 'voter' && (
          <div className="relative w-full max-w-[500px] aspect-[1.586/1] rounded-3xl p-5 sm:p-6 bg-[#F0FDF4] text-black border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
            
            {/* Top Bar with Holographic Strip */}
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b-2 border-green-800 pb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#00A86B] text-white font-black text-[9px] flex items-center justify-center border-2 border-black">
                    ECI
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-green-950 block leading-tight">
                      Election Commission of India • భారత ఎన్నికల సంఘం
                    </span>
                    <span className="text-[11px] font-black text-[#00A86B] block leading-tight">
                      Developer Elector's Identity Card (EPIC)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono font-black text-xs sm:text-sm text-green-900 px-2 py-0.5 bg-green-200 border border-green-800 rounded">
                    NMY081069
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Section: Portrait with Hologram & Details */}
            <div className="relative z-10 flex items-center gap-4 my-2">
              {/* Photo with Silver Security Overlay */}
              <div className="relative w-20 sm:w-24 aspect-[3/4] rounded-xl overflow-hidden border-2 border-black bg-white shadow-md shrink-0">
                <img
                  src={avatarSrc}
                  alt="Narala Manoj Yadav"
                  className="w-full h-full object-cover object-top"
                />
                {/* Hologram Bar */}
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-silver via-emerald-300 to-amber-200 opacity-60 pointer-events-none" />
              </div>

              {/* Data Details */}
              <div className="flex-1 space-y-1 text-xs">
                <div>
                  <span className="text-[9px] font-bold text-neutral-500 block">Elector's Name:</span>
                  <span className="font-black text-sm text-black block leading-tight">Narala Manoj Yadav</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-neutral-500 block">Institution / Constituency:</span>
                  <span className="font-bold text-neutral-800 block">NBKR Institute of Science &amp; Technology</span>
                  <span className="text-[10px] font-semibold text-green-800">Vidyanagar, Nellore, AP</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-neutral-500 block">Society Contributor:</span>
                  <span className="font-bold text-neutral-900">IEEE &amp; ISTE Student Member</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Barcode & Seal */}
            <div className="relative z-10 border-t-2 border-green-800 pt-1.5 flex items-center justify-between">
              {/* Barcode Graphic */}
              <div className="flex items-center gap-0.5">
                {[4, 2, 6, 1, 5, 3, 7, 2, 8, 4, 2, 5, 3, 6, 4, 2, 7, 3, 5, 2, 4].map((h, i) => (
                  <div key={i} className="w-1 bg-black rounded-sm" style={{ height: `${h * 2 + 10}px` }} />
                ))}
              </div>
              <div className="text-right">
                <span className="text-[9px] font-mono font-bold text-neutral-600 block">AUTHENTICATED</span>
                <span className="text-[10px] font-mono font-black text-green-900">TECH4.IN VERIFIED</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Quick Interactive Summary of the Selected Card */}
      <div className="mt-8 p-4 rounded-2xl bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center max-w-xl mx-auto">
        <p className="text-xs font-bold text-neutral-800">
          {selectedCard === 'atm' && '💳 The Tech Platinum Debit Card showcases Narala Manoj Yadav\'s coding stack and full-stack project capabilities.'}
          {selectedCard === 'aadhar' && '🪪 The Aadhar Card confirms Manoj\'s verified identity, B.Tech education at NBKRIST, and official contact credentials.'}
          {selectedCard === 'license' && '🚗 The Driving License represents authorized execution of full-stack engineering, real-time YOLOv8 models, and cloud databases.'}
          {selectedCard === 'voter' && '🗳️ The Voter ID Card verifies Manoj\'s active participation in technical societies (IEEE & ISTE) and student governance.'}
        </p>
      </div>
    </div>
  );
};
