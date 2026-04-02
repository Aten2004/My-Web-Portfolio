'use client';

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { ExternalLink, Github, Layout, Trophy, Phone, Mail, FileVideo, Users, Menu, X } from 'lucide-react';
import { FaReact, FaNodeJs, FaHtml5, FaPython, FaJava, FaAws, FaGithub, FaDocker, FaFacebook, FaInstagram, FaYoutube, FaLine } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiC, SiFigma, SiAdobephotoshop, SiAdobepremierepro, SiDavinciresolve, SiAndroidstudio } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  // ข้อมูล Skills
  const techSkills = [
    { name: 'React.js', icon: <FaReact className="text-[#61DAFB] text-xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] text-xl" /> },
    { name: 'Express.js', icon: <SiExpress className="text-white text-xl" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E] text-xl" /> },
    { name: 'HTML/CSS', icon: <FaHtml5 className="text-[#E34F26] text-xl" /> },
    { name: 'Python', icon: <FaPython className="text-[#3776AB] text-xl" /> },
    { name: 'C', icon: <SiC className="text-[#A8B9CC] text-xl" /> },
    { name: 'Java', icon: <FaJava className="text-[#007396] text-xl" /> },
    { name: 'REST API', icon: <TbApi className="text-tech-blue text-xl" /> },
    { name: 'Android Studio', icon: <SiAndroidstudio className="text-[#3DDC84] text-xl" /> },
    { name: 'Git/GitHub', icon: <FaGithub className="text-white text-xl" /> },
    { name: 'Docker', icon: <FaDocker className="text-[#2496ED] text-xl" /> },
    { name: 'AWS', icon: <FaAws className="text-[#FF9900] text-xl" /> },
    { name: 'Figma', icon: <SiFigma className="text-[#F24E1E] text-xl" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-[#31A8FF] text-xl" /> },
    { name: 'Premiere Pro', icon: <SiAdobepremierepro className="text-[#9999FF] text-xl" /> },
    { name: 'DaVinci Resolve', icon: <SiDavinciresolve className="text-[#E27685] text-xl" /> },
  ];

  return (
    <div className="min-h-screen selection:bg-tech-orange selection:text-white relative font-sans flex flex-col">
      
      {/* Background Elements */}
      <div className="sci-fi-grid"></div>
      <div className="fixed top-[20%] left-[30%] w-96 h-96 bg-tech-orange/15 rounded-full blur-[100px] pointer-events-none orb-1 z-[-1]"></div>
      <div className="fixed top-[50%] right-[20%] w-80 h-80 bg-tech-blue/15 rounded-full blur-[90px] pointer-events-none orb-2 z-[-1]"></div>
      <div className="fixed bottom-[10%] left-[40%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none orb-3 z-[-1]"></div>

      {/* --- Header Bar --- */}
      <nav className="fixed w-full top-0 z-50 bg-[#0f172a]/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest text-white drop-shadow-md cursor-pointer">
            PHURIT<span className="text-tech-orange">.DEV</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-medium text-slate-300">
            <Link to="hero" smooth={true} offset={-64} className="hover:text-tech-orange cursor-pointer transition-colors">About</Link>
            <Link to="projects" smooth={true} offset={-64} className="hover:text-tech-orange cursor-pointer transition-colors">Projects</Link>
            <Link to="achievements" smooth={true} offset={-64} className="hover:text-tech-orange cursor-pointer transition-colors">Experience</Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-slate-300 hover:text-white transition-colors">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden absolute w-full bg-[#1e293b]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'}`}>
          <div className="flex flex-col px-6 space-y-4 text-sm uppercase tracking-widest font-medium text-slate-300">
            <Link to="hero" smooth={true} offset={-64} onClick={closeMenu} className="hover:text-tech-orange cursor-pointer transition-colors block py-2 border-b border-white/5">About</Link>
            <Link to="projects" smooth={true} offset={-64} onClick={closeMenu} className="hover:text-tech-blue cursor-pointer transition-colors block py-2 border-b border-white/5">Projects</Link>
            <Link to="achievements" smooth={true} offset={-64} onClick={closeMenu} className="hover:text-tech-orange cursor-pointer transition-colors block py-2">Experience</Link>
          </div>
        </div>
      </nav>

      {/* --- Hero / About Section --- */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 relative pt-24 md:pt-16">
        
        {/* Profile Picture */}
        <div className="mb-6 relative group z-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-tech-orange to-tech-blue rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
            <img 
              src="/Pic_Profile.jpg" 
              alt="Phurit Fuengfu Profile" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="inline-block px-4 py-1.5 rounded-full border border-tech-orange/30 bg-tech-orange/10 text-tech-orange tracking-widest text-xs font-mono mb-6 z-10 shadow-glow-orange">
          HELLO, I AM PHURIT FUENGFU
        </div>
        
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tighter z-10 drop-shadow-xl flex justify-center items-center gap-3 whitespace-nowrap">
          <span>FULL-STACK</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-orange to-orange-300 animate-typing">
            DEVELOPER
          </span>
        </h1>
        
        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed z-10 mb-8 bg-[#1e293b]/60 p-5 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg">
          นักศึกษาปี 3 วิทยาการคอมพิวเตอร์ (ภาคพิเศษ) มหาวิทยาลัยธรรมศาสตร์ รังสิต <br className="hidden md:block" />
          ผมไม่ได้อยากหยุดอยู่แค่สาย Front-end หรือ UX/UI แต่อยากไปให้สุดในทาง 
          <strong className="text-tech-blue"> <br/>Full-Stack Developer</strong> ที่คุมได้ทั้งระบบหน้าบ้านและหลังบ้าน และพร้อมจะขยายทักษะไปสู่สายงานอื่นที่น่าสนใจในอนาคต เพื่อสร้าง Product ที่ใช้งานได้จริงและตอบโจทย์ผู้ใช้ที่สุดครับ
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 z-10 w-full sm:w-auto">
            <a href="tel:0822543704" className="flex items-center justify-center gap-2 text-sm text-slate-200 hover:text-tech-orange transition-colors bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10">
                <Phone size={18} /> 082-254-3704
            </a>
            <a href="mailto:aten8824@gmail.com" className="flex items-center justify-center gap-2 text-sm text-slate-200 hover:text-tech-blue transition-colors bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10">
                <Mail size={18} /> aten8824@gmail.com
            </a>
        </div>

        {/* Core Skills */}
        <div className="w-full max-w-5xl z-10 mt-4">
          <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-6 font-semibold">Technical Arsenal</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {techSkills.map((skill) => (
              <div key={skill.name} className="group flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-[#1e293b]/80 border border-white/10 rounded-lg hover:border-tech-blue/50 transition-all cursor-default hover:shadow-glow-blue hover:-translate-y-1 duration-300 backdrop-blur-md">
                {skill.icon}
                <span className="text-[10px] md:text-xs text-slate-300 group-hover:text-white font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-24 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Layout className="text-tech-orange" /> FEATURED PROJECTS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project 1: Trading Journal */}
          <div className="group bg-[#1e293b]/70 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-tech-blue/50 transition-all duration-500 hover:shadow-glow-blue flex flex-col relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tech-blue/0 via-tech-blue to-tech-blue/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="h-48 md:h-56 bg-black/30 relative overflow-hidden flex items-center justify-center border-b border-white/10">
               <img src="/Trading_Journal_Interface.png" alt="Trading Journal Interface" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Trading Journal</h3>
              <p className="text-xs text-tech-blue mb-4 font-mono uppercase tracking-widest flex items-center gap-2"><FaReact/> React • Full-Stack</p>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed flex-1">
                แพลตฟอร์มบันทึกสถิติการเทรดทองคำครบวงจร เกิดจากแนวคิดที่ต้องการบันทึกรายละเอียดการเทรดของตัวเองและคนในครอบครัว ระบบสามารถสร้างกราฟแสดงผลเพื่อวิเคราะห์หาช่วงเวลาที่ทำกำไรได้ดีที่สุด หรือสไตล์การเทรดที่ถนัด พร้อมระบบคำแนะนำอัตโนมัติ นอกจากนี้ยังมีการดึง API ข่าวจาก Investing & TradingView และมีฟีเจอร์คำนวณการถอนเงิน/ประเมินภาษี รองรับ Responsive เต็มรูปแบบ
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                <a href="https://trading-journal-git-main-aten2004s-projects.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 text-xs text-tech-blue bg-tech-blue/10 px-5 py-2.5 rounded-lg hover:bg-tech-blue/20 hover:text-white transition-colors uppercase tracking-widest font-bold border border-tech-blue/20"><ExternalLink size={14}/> Live View</a>
                <a href="https://github.com/Aten2004/Trading-Journal.git" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-slate-200 font-bold uppercase tracking-widest hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10"><Github size={14}/> Source Code</a>
              </div>
            </div>
          </div>

          {/* Project 2: Any AI Caller */}
          <div className="group bg-[#1e293b]/70 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-tech-orange/50 transition-all duration-500 hover:shadow-glow-orange flex flex-col relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tech-orange/0 via-tech-orange to-tech-orange/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="h-48 md:h-56 bg-black/30 relative overflow-hidden flex items-center justify-center border-b border-white/10">
               <img src="/AI_Agent_Admin.png" alt="AI Agent Admin Dashboard" className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Any AI Caller</h3>
              <p className="text-xs text-tech-orange mb-4 font-mono uppercase tracking-widest">AI Agent Call Center 24/7</p>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed flex-1">
                โปรเจคพัฒนาระบบ AI Call Center อัจฉริยะร่วมกับทีมเพื่อนในมหาวิทยาลัย ผมรับหน้าที่ออกแบบ UX/UI ในส่วนของหน้า Admin ทั้งหมด และจัดการการเชื่อมต่อข้อมูลกับ Backend โดยดึงข้อมูลประวัติการโทรสายล่าสุด และนำ AI Agent มาแสดงผลบนหน้าเว็บ เพื่อให้ผู้ใช้สามารถจัดการและเข้าถึงฟีเจอร์ต่างๆ ได้อย่างสะดวกลื่นไหล (ปัจจุบันระบบอยู่ในช่วงพัฒนาและยังไม่ได้ Host ขึ้นอย่างเป็นทางการ)
              </p>
              <div className="mt-auto">
                 <span className="inline-block px-3 py-1.5 bg-white/5 rounded-lg text-[10px] md:text-xs text-slate-400 font-mono border border-white/10">Status: Local Host / UI Showcase</span>
              </div>
            </div>
          </div>

          {/* Project 3: TU Lost & Found */}
          <div className="group bg-[#1e293b]/70 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 lg:col-span-2 flex flex-col md:flex-row">
            
            <div className="md:w-2/5 h-48 md:h-auto bg-black/30 relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
               <img src="/TU_Lost_&_Found.png" alt="TU Lost & Found" className="w-full h-full object-cover object-left-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            </div>

            <div className="p-6 md:p-8 md:w-3/5 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">TU Lost & Found</h3>
              <p className="text-xs text-slate-300 mb-4 font-mono uppercase tracking-widest flex items-center gap-2 flex-wrap">
                  <FaHtml5 className="text-[#E34F26] text-sm"/> HTML • <FaAws className="text-[#FF9900] text-sm"/> AWS Lambda / DynamoDB • <FaPython className="text-[#3776AB] text-sm"/> Python
              </p>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed flex-1">
                ระบบจัดการของหายภายในมหาวิทยาลัย พัฒนาร่วมกับศูนย์รักษาความปลอดภัย มธ.รังสิต ทำระบบหลังบ้านด้วย AWS โดยออกแบบโครงสร้างข้อมูลใน DynamoDB และเขียน Python ผ่าน Lambda เพื่อดึงข้อมูลมาแสดงผลบน Admin Dashboard พร้อมทั้งพัฒนาระบบจัดการข้อมูล (CRUD) เพื่อให้เจ้าหน้าที่สามารถอัปเดตและแยกหมวดหมู่สิ่งของได้อย่างสะดวก (ปัจจุบันยังไม่มีการ Host ขึ้นอย่างเป็นทางการ)
              </p>
              <div className="mt-auto">
                <a href="https://found-form.vercel.app/Frontend/admin.html" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 text-xs text-white bg-white/10 px-5 py-2.5 rounded-lg hover:bg-white/20 transition-colors uppercase tracking-widest font-bold border border-white/10">
                  <ExternalLink size={14}/> AWS Connected Form
                </a>
              </div>
            </div>
          </div>

          {/* Project 4: BioLog */}
          <div className="group bg-[#1e293b]/70 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-tech-blue/50 transition-all duration-500 lg:col-span-2 flex flex-col md:flex-row hover:shadow-glow-blue relative">
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tech-blue/0 via-tech-blue to-tech-blue/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="md:w-2/5 h-48 md:h-auto bg-black/30 relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
               <img src="/BioLog_Web.png" alt="BioLog Web Interface" className="w-full h-full object-cover object-left-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            </div>

            <div className="p-6 md:p-8 md:w-3/5 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">BioLog</h3>
              <p className="text-xs text-tech-blue mb-4 font-mono uppercase tracking-widest flex items-center gap-2 flex-wrap">
                  <FaReact className="text-[#61DAFB] text-sm"/> React • Next.js • Supabase
              </p>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed flex-1">
                เว็บแอปพลิเคชันสำหรับเก็บบันทึกสถิติสุขภาพและการพัฒนาร่างกายแบบครบวงจร (น้ำหนัก, การนอน, การกิน, การออกกำลังกาย และ BMI) พัฒนาขึ้นเพื่อใช้งานส่วนตัวเนื่องจากแอปพลิเคชันในตลาดส่วนใหญ่ไม่ตอบโจทย์ไลฟ์สไตล์และมีค่าใช้จ่าย ระบบมีการเชื่อมต่อฐานข้อมูลเป็นหลังบ้าน (BaaS) เพื่อบันทึกและประมวลผลสถิติแบบเรียลไทม์ และโฮสต์ผ่าน Vercel
              </p>
              <div className="mt-auto flex flex-wrap gap-3">
                <a href="https://bio-log-tau.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 text-xs text-tech-blue bg-tech-blue/10 px-5 py-2.5 rounded-lg hover:bg-tech-blue/20 hover:text-white transition-colors uppercase tracking-widest font-bold border border-tech-blue/20">
                  <ExternalLink size={14}/> Live View
                </a>
                <a href="https://github.com/Aten2004/BioLog.git" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-slate-200 font-bold uppercase tracking-widest hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10"><Github size={14}/> Source Code</a>
              </div>
            </div>
          </div>
            
        </div>
      </section>

      {/* --- Achievements & Experience Section --- */}
      <section id="achievements" className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-24 border-t border-white/10 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Trophy className="text-tech-blue" /> EXPERIENCE & ACHIEVEMENTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
           {/* Achievement 1 */}
           <div className="p-6 md:p-8 border border-white/10 bg-[#1e293b]/70 backdrop-blur-md rounded-2xl relative overflow-hidden group hover:border-tech-blue/50 transition-colors hover:-translate-y-1 duration-300 shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-tech-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <h3 className="text-lg font-bold text-white mb-2">Learn Lab Power 2025</h3>
              <p className="text-tech-blue text-xs font-mono mb-4 uppercase tracking-widest bg-tech-blue/10 inline-block px-3 py-1 rounded-md">Top 38 Finalists</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                แข่งขันในหัวข้อ AI Health Hub of ASEAN รับหน้าที่รวบรวมและวิเคราะห์ข้อมูลค่ารักษาพยาบาลแต่ละโรคของโรงพยาบาลในไทยและต่างประเทศ เพื่อเป็นฐานข้อมูลในการสร้างโมเดล
              </p>
           </div>

           {/* Experience 1 */}
           <div className="p-6 md:p-8 border border-white/10 bg-[#1e293b]/70 backdrop-blur-md rounded-2xl relative overflow-hidden group hover:border-tech-orange/50 transition-colors hover:-translate-y-1 duration-300 shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-tech-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><Users size={18} className="text-tech-orange"/> First Meet Event</h3>
              <p className="text-tech-orange text-xs font-mono mb-4 uppercase tracking-widest bg-tech-orange/10 inline-block px-3 py-1 rounded-md">TU Faculty of Science</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Staff บริหารจัดการฐานกิจกรรมและสันทนาการ พัฒนาทักษะด้าน Event Organization การประสานงาน และการสื่อสารกับนักศึกษาใหม่
              </p>
           </div>

           {/* Achievement 2 */}
           <div className="p-6 md:p-8 border border-white/10 bg-[#1e293b]/70 backdrop-blur-md rounded-2xl relative overflow-hidden group hover:border-slate-400/50 transition-colors hover:-translate-y-1 duration-300 shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><FileVideo size={18}/> Short Film Competition</h3>
              <p className="text-slate-300 text-xs font-mono mb-4 uppercase tracking-widest bg-white/10 inline-block px-3 py-1 rounded-md">3rd Place Award</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                ร่วมกับทีมเพื่อนที่โรงเรียนในการเขียนบท กำกับ และตัดต่อหนังสั้น ได้เรียนรู้ทักษะ Project Planning, Teamwork และ Video Production
              </p>
           </div>

        </div>
      </section>

      {/* --- Footer Section --- */}
      <footer className="py-12 border-t border-white/10 bg-[#0f172a]/80 backdrop-blur-md relative z-10 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          
          <h3 className="text-white text-sm font-bold tracking-widest mb-6">CONNECT WITH ME</h3>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="https://www.facebook.com/fuengfu.phurit/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#1877F2] hover:-translate-y-1 hover:scale-110 transition-all duration-300 drop-shadow-md">
              <FaFacebook size={26} />
            </a>
            <a href="https://www.instagram.com/phurit_14/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#E4405F] hover:-translate-y-1 hover:scale-110 transition-all duration-300 drop-shadow-md">
              <FaInstagram size={26} />
            </a>
            <a href="https://www.youtube.com/@saffstudio9583" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#FF0000] hover:-translate-y-1 hover:scale-110 transition-all duration-300 drop-shadow-md">
              <FaYoutube size={26} />
            </a>
            <a href="https://line.me/ti/p/~aten14444" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#00C300] hover:-translate-y-1 hover:scale-110 transition-all duration-300 drop-shadow-md">
              <FaLine size={26} />
            </a>
            <a href="https://github.com/Aten2004" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300 drop-shadow-md">
              <FaGithub size={26} />
            </a>
          </div>

          {/* Copyright & Tech Stack */}
          <div className="w-16 h-[1px] bg-white/20 mb-8"></div>
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest text-center leading-relaxed">
            © 2026 Phurit Fuengfu. All rights reserved. <br/>
            <span className="text-tech-blue/60">Built with React, Next.js & Tailwind CSS</span>
          </p>
          
        </div>
      </footer>

    </div>
  );
}