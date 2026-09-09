import React, { useState, useEffect } from 'react';
import { Mail, Briefcase, User, ArrowRight, PenTool, Layout, Smartphone, X, Send, Calendar } from 'lucide-react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { About } from './About';
import { Articles } from './Articles';
import { Portfolio } from './Portfolio';

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 400);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      ></div>
      
      <div className={`bg-white w-full max-w-lg border-[4px] border-black rounded-[2rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10 transition-all duration-300 ${isClosing ? 'scale-90 opacity-0 translate-y-10' : 'animate-[bounce-in_0.5s_cubic-bezier(0.175,0.885,0.32,1.275)]'}`}>
        <div className="bg-[#ffb822] p-6 rounded-t-[1.7rem] border-b-[4px] border-black flex justify-between items-center">
          <h3 className="text-2xl font-black flex items-center gap-3">
            <Mail className="w-6 h-6" />
            联系我
          </h3>
          <button 
            onClick={handleClose}
            className="bg-white w-10 h-10 rounded-full border-[3px] border-black flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:translate-x-0.5 active:shadow-none"
          >
            <X size={20} strokeWidth={3} />
          </button>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="font-bold text-lg block">电话</label>
            <div className="w-full bg-[#f3f3f3] border-[3px] border-black rounded-xl p-4 font-medium flex items-center gap-3">
              <Smartphone className="w-5 h-5" />
              <span>15282860970</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="font-bold text-lg block">邮箱</label>
            <div className="w-full bg-[#f3f3f3] border-[3px] border-black rounded-xl p-4 font-medium flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>15282860970@163.com</span>
            </div>
          </div>
          
          <button className="w-full bg-black text-white text-xl font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#2575fc] transition-all border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 active:translate-x-0 active:shadow-none">
            <Send size={20} /> 联系我
          </button>
        </div>
      </div>
    </div>
  );
};

const ResumeModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      if (!isOpen) document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    document.body.style.overflow = 'unset';
    setTimeout(onClose, 400);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ${isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-md transition-all duration-500"
        onClick={handleClose}
      ></div>
      
      <div className={`relative z-10 transition-all duration-500 ease-out ${isClosing ? 'scale-75 opacity-0 translate-y-20' : 'scale-100 opacity-100 translate-y-0'}`}>
        <button 
          onClick={handleClose}
          className="absolute -top-4 -right-4 bg-white w-12 h-12 rounded-full border-[3px] border-black flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20"
        >
          <X size={24} strokeWidth={3} />
        </button>
        <img 
          src="/简历国企版.jpg" 
          alt="简历" 
          className="max-w-[90vw] max-h-[85vh] rounded-2xl border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        />
      </div>
    </div>
  );
};

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section id="home" className="min-h-screen pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8">
          <h1 className="text-6xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tight">
            我是<span className="bg-[#ff5263] text-white px-4 py-1 inline-block transform -rotate-1 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg cursor-default">长江</span><br />
            一名SWU<span className="bg-[#2575fc] text-white px-4 py-1 inline-block transform rotate-1 transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-lg cursor-default">新传</span>人
          </h1>
          <p className="text-lg text-gray-700 max-w-md font-medium leading-relaxed">
            welcome to my website, I'm Changjiang, <br />
            a SWU student majoring in communication <br />
            (:з」∠) Good good study, day day up！！！
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              to="/about"
              className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-gray-800 transition-all border-[3px] border-black hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#2575fc]"
            >
              <User size={20} /> 了解更多
            </Link>
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-gray-50 transition-all border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#ff5263] active:translate-y-1 active:translate-x-1 active:shadow-none"
            >
              <Briefcase size={20} /> 查看简历
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-lg aspect-square relative overflow-hidden flex items-end justify-center transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2">
            <img src="/portrait.png" alt="Changjiang" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

const Services = () => {
  const services = [
    {
      title: "内容生产",
      desc: "精通内容生产，擅长热点选题挖掘，能独立完成稿件撰写、摄影及视频拍剪；产出稿件平均阅读量 50w+，多篇获中央网信办全网推荐，兼具内容专业性与传播性。",
      icon: (
        <svg viewBox="0 0 100 100" className="w-24 h-24" xmlns="http://www.w3.org/2000/svg">
          {/* 笔记本背景 */}
          <rect x="15" y="20" width="70" height="60" rx="6" fill="#fff" stroke="#000" strokeWidth="3" />
          
          {/* 笔记本装订线 */}
          <rect x="15" y="20" width="8" height="60" fill="#ffb822" stroke="#000" strokeWidth="2" />
          
          {/* 标题行 */}
          <rect x="30" y="28" width="50" height="6" rx="2" fill="#ff5263" />
          
          {/* 内容行 */}
          <rect x="30" y="40" width="45" height="4" rx="1" fill="#2575fc" />
          <rect x="30" y="48" width="40" height="4" rx="1" fill="#2575fc" />
          <rect x="30" y="56" width="35" height="4" rx="1" fill="#2575fc" />
          
          {/* 相机图标 */}
          <rect x="65" y="65" width="15" height="12" rx="2" fill="#fff" stroke="#000" strokeWidth="2" />
          <circle cx="72" cy="69" r="2" fill="#000" />
          <rect x="68" y="72" width="8" height="3" rx="1" fill="#000" />
          
          {/* 视频图标 */}
          <rect x="50" y="65" width="12" height="12" rx="2" fill="#fff" stroke="#000" strokeWidth="2" />
          <polygon points="54,68 54,74 60,71" fill="#ff5263" />
          
          {/* 笔 */}
          <rect x="25" y="68" width="12" height="2" rx="1" fill="#ffb822" transform="rotate(45 25 68)" />
          <rect x="25" y="68" width="8" height="2" rx="1" fill="#ffb822" transform="rotate(-45 25 68)" />
        </svg>
      )
    },
    {
      title: "社交媒体运营",
      desc: "熟悉微信、抖音、小红书等平台运营逻辑，账号运营、推文排版及短视频策划制作；擅长流量导向内容生产，打造多条百万级视频，兼具活动策划与流量转化能力。",
      icon: (
        <svg viewBox="0 0 100 100" className="w-24 h-24" xmlns="http://www.w3.org/2000/svg">
          {/* 手机设备 */}
          <rect x="25" y="15" width="50" height="70" rx="8" fill="#fff" stroke="#000" strokeWidth="3" />
          
          {/* 屏幕内容 */}
          <rect x="30" y="20" width="40" height="45" rx="4" fill="#f3f3f3" />
          
          {/* 微信图标 */}
          <rect x="35" y="25" width="15" height="15" rx="3" fill="#07c160" />
          <rect x="37" y="27" width="11" height="11" rx="2" fill="#fff" />
          <circle cx="42" cy="32" r="1" fill="#07c160" />
          <circle cx="46" cy="32" r="1" fill="#07c160" />
          
          {/* 抖音图标 */}
          <rect x="55" y="25" width="15" height="15" rx="3" fill="#000" />
          <path d="M60,30 L60,35 L65,32.5 Z" fill="#fff" />
          
          {/* 小红书图标 */}
          <rect x="35" y="45" width="15" height="15" rx="3" fill="#ff2442" />
          <rect x="37" y="47" width="11" height="11" rx="1" fill="#fff" />
          <path d="M40,49 L40,53 L43,51 Z" fill="#ff2442" />
          
          {/* 数据图表 */}
          <rect x="55" y="45" width="15" height="15" rx="3" fill="#2575fc" />
          <rect x="57" y="50" width="3" height="8" fill="#fff" />
          <rect x="61" y="48" width="3" height="10" fill="#fff" />
          <rect x="65" y="52" width="3" height="6" fill="#fff" />
          
          {/* 点赞图标 */}
          <path d="M45,65 L45,75 L50,80 L55,75 L55,65 Z" fill="#ff5263" stroke="#000" strokeWidth="2" />
          <rect x="48" y="68" width="4" height="6" fill="#fff" />
        </svg>
      )
    },
    {
      title: "行政党宣",
      desc: "统筹党支部建设、党员发展考核及党宣活动策划，擅长行政事务协调、多方需求对接；具备扎实的统筹规划与沟通能力，推进党务、行政工作标准化落地，获师生一致认可。",
      icon: (
        <svg viewBox="0 0 100 100" className="w-24 h-24" xmlns="http://www.w3.org/2000/svg">
          {/* 办公桌 */}
          <rect x="15" y="60" width="70" height="10" rx="2" fill="#8b4513" stroke="#000" strokeWidth="2" />
          
          {/* 文件堆 */}
          <rect x="25" y="40" width="15" height="20" rx="2" fill="#fff" stroke="#000" strokeWidth="2" />
          <rect x="27" y="42" width="11" height="16" fill="#f3f3f3" />
          
          {/* 党徽 */}
          <rect x="45" y="30" width="10" height="30" rx="2" fill="#ff0000" stroke="#000" strokeWidth="2" />
          <circle cx="50" cy="40" r="8" fill="#ffd700" stroke="#000" strokeWidth="1" />
          <path d="M50,32 L52,38 L58,38 L54,42 L56,48 L50,44 L44,48 L46,42 L42,38 L48,38 Z" fill="#ff0000" />
          
          {/* 日历 */}
          <rect x="60" y="40" width="15" height="20" rx="2" fill="#fff" stroke="#000" strokeWidth="2" />
          <rect x="60" y="40" width="15" height="6" fill="#ff5263" />
          <text x="67" y="45" textAnchor="middle" fontSize="4" fill="#fff">12</text>
          <rect x="62" y="48" width="11" height="10" fill="#f3f3f3" />
          
          {/* 会议桌 */}
          <rect x="30" y="50" width="40" height="8" rx="1" fill="#8b4513" />
          
          {/* 人员图标 */}
          <circle cx="35" cy="45" r="3" fill="#2575fc" />
          <circle cx="45" cy="45" r="3" fill="#2575fc" />
          <circle cx="55" cy="45" r="3" fill="#2575fc" />
          <circle cx="65" cy="45" r="3" fill="#2575fc" />
          
          {/* 笔和笔记本 */}
          <rect x="75" y="35" width="8" height="15" rx="1" fill="#ffb822" />
          <rect x="75" y="35" width="8" height="3" fill="#ff5263" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-5xl font-black mb-6">
        我的<span className="bg-[#ff5263] text-white px-4 py-1 inline-block transform rotate-1 hover:rotate-3 hover:scale-110 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">技能点</span>
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-16 font-medium text-lg">
        做有意义的事 <br /> Do something meaningful!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {services.map((s, i) => (
          <div key={i} className="bg-white border-[3px] border-black rounded-[2rem] overflow-hidden flex flex-col h-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="bg-[#f3f3f3] p-10 flex justify-center items-center border-b-[3px] border-black h-64 relative">
               {s.icon}
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-700 font-medium leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 space-y-8">
        <h2 className="text-5xl lg:text-6xl font-black leading-[1.1]">
          Welcome to 长江的世界<br />
        <span className="bg-[#2575fc] text-white px-4 py-1 inline-block transform -rotate-1 mt-2 hover:rotate-3 hover:scale-110 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">长江的世界</span>
        </h2>
        <p className="text-gray-700 font-medium text-lg leading-relaxed ml-8">
          嗨，我是长江 <br />
          来自四川德阳 <br />
          正在西南大学读研ing <br />
          一个能拍会剪的新传er <br />
          如果你感兴趣的话 <br />
          可以看看其他页面～
        </p>
      </div>
      <div className="flex-1 flex justify-center w-full">
          <img 
            src="/portrait.png" 
            alt="About Me" 
            className="w-full max-w-[400px] aspect-square object-cover rounded-[2.5rem] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" 
          />
        </div>
    </section>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <h2 className="text-5xl lg:text-6xl font-black leading-[1.1]">
          Take a look at my <span className="bg-[#ffb822] text-black px-4 py-1 inline-block transform rotate-1 transition-all duration-300 hover:scale-110 hover:-rotate-2 hover:shadow-lg cursor-default">journal</span>
        </h2>
        <Link to="/portfolio" className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-green-500 hover:text-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none">
          <PenTool size={20} /> 查看更多文章
        </Link>
      </div>

      <div className="space-y-6">
        {/* Project 3 */}
        <div
          onClick={() => window.open('https://apicnrapp.cnr.cn/html/share.html?id=30563405&ui=vbXdq5vtoVXxZ5UFdbaVo5qfvrOugRq7V/BY4AW40RL3QSiU8p727OCknVeNpBGX&action=share&type=1', '_blank')}
          className="bg-white border-[3px] border-black rounded-[2rem] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-6 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        >
          <div className="rounded-2xl border-[3px] border-black w-full sm:w-48 h-40 relative overflow-hidden shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <img 
              src="/年货市集.png" 
              alt="重庆新春市集" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer z-50">Articles</span>
          </div>
          <div className="flex flex-col justify-center py-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="text-gray-600 text-sm font-bold">央广网</span>
                <span className="w-px h-4 bg-gray-300 mx-2"></span>
                <Calendar size={18} className="text-gray-500" />
                <span className="text-gray-600 text-base font-normal">2026.02</span>
                <span className="ml-3 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">文化</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">非遗</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">科技</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 leading-tight">年味调色盘"入墨"来 重庆新春市集炫彩登场</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              文化、非遗与科技，重庆新春市集尽显山城年味
            </p>
          </div>
        </div>

        {/* Project 5 */}
        <div
          onClick={() => window.open('https://wap.cqrb.cn/xcq/NewsDetail?classId=2267&newsId=2451558&staticUrl=https%3A%2F%2Ft.cqrb.cn%2F4lKCr&RandomTime=1773569548355', '_blank')}
          className="bg-white border-[3px] border-black rounded-[2rem] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-6 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        >
          <div className="rounded-2xl border-[3px] border-black w-full sm:w-48 h-40 relative overflow-hidden shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <img 
              src="/外卖骑手.jpg" 
              alt="外卖骑手" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer z-50">Articles</span>
          </div>
          <div className="flex flex-col justify-center py-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="text-gray-600 text-sm font-bold">重庆日报</span>
                <span className="w-px h-4 bg-gray-300 mx-2"></span>
                <Calendar size={18} className="text-gray-500" />
                <span className="text-gray-600 text-base font-normal">2025.10</span>
                <span className="ml-3 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">外卖骑手</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">新就业</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">城市治理</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 leading-tight">让城市多一双发现问题的眼睛</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              新就业群体和现代城市治理能够天然匹配
            </p>
          </div>
        </div>

        {/* Project 4 */}
        <div
          onClick={() => window.open('https://www.thecover.cn/news/ReLMa4FgDmKH90qSdq8Jkw==', '_blank')}
          className="bg-white border-[3px] border-black rounded-[2rem] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-6 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        >
          <div className="rounded-2xl border-[3px] border-black w-full sm:w-48 h-40 relative overflow-hidden shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <img 
              src="/录取通知书.png" 
              alt="录取通知书" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer z-50">Articles</span>
          </div>
          <div className="flex flex-col justify-center py-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="text-gray-600 text-sm font-bold">封面新闻</span>
                <span className="w-px h-4 bg-gray-300 mx-2"></span>
                <Calendar size={18} className="text-gray-500" />
                <span className="text-gray-600 text-base font-normal">2025.07</span>
                <span className="ml-3 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">录取通知书</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">高校</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">创意</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 leading-tight">2025录取通知书"上新"，有新生名字将被送入太空！哪一个是你的"理想款"？</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              2025多校录取通知书公布，看看有没有你的理想款
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <h2 className="text-5xl lg:text-6xl font-black">Vedio<span className="text-3xl lg:text-4xl mx-1">&amp;</span>Photo<span className="text-3xl lg:text-4xl mx-1">&amp;</span>More</h2>
        <button 
          onClick={() => window.location.href = '/articles'}
          className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-green-500 hover:text-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none cursor-pointer"
        >
          <PenTool size={20} /> 查看更多
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Article */}
        <div 
          onClick={() => window.open('https://www.zcool.com.cn/work/ZNzMzMTI2NTY=.html', '_blank')}
          className="bg-white border-[3px] border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
          <div className="bg-[#f3f3f3] rounded-2xl border-[3px] border-black h-80 mb-8 relative flex items-center justify-center overflow-hidden">
            <span className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full z-10 hover:scale-110 hover:-rotate-6 transition-all duration-300 cursor-pointer">Vedio</span>
            <img 
              src="/好运设计.png" 
              alt="好运设计" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
          <h3 className="text-3xl font-bold mb-8 flex-1 leading-tight">情景短片——好运设计</h3>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#ffb822] rounded-full border-[3px] border-black overflow-hidden flex items-end justify-center">
              <div className="w-10 h-10 bg-[#ff5263] rounded-t-full border-[2px] border-black"></div>
            </div>
            <div>
              <p className="font-bold text-lg">changjiang</p>
              <p className="text-gray-600 font-medium">2026.01</p>
            </div>
          </div>
        </div>

        {/* Side Articles */}
        <div className="space-y-8 flex flex-col">
          {/* Article 2 */}
          <div 
            onClick={() => window.open('https://www.zcool.com.cn/work/ZNzMzMTY1NDg=.html', '_blank')}
            className="bg-white border-[3px] border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-8 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
            <div className="bg-[#f3f3f3] rounded-2xl border-[3px] border-black w-full sm:w-56 h-56 relative flex items-center justify-center shrink-0 overflow-hidden">
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer z-50">Photo</span>
              <img 
                src="/商业人像常其轩.jpg" 
                alt="商业人像常其轩" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="flex flex-col justify-center py-4">
              <h3 className="text-2xl font-bold mb-4 leading-tight">商业摄影——人像</h3>
              <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
                灯光、装造、姿势、后期俺都行
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <div 
            onClick={() => window.open('https://file0e1430c331f7.v4.h5sys.cn/play/TCdGMT7A?code=0413kqFa1OErmL0SjxIa1TFclY03kqFp&state=d6rc5t9ccimig7ut3tb0', '_blank')}
            className="bg-white border-[3px] border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-8 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
            <div className="bg-[#f3f3f3] rounded-2xl border-[3px] border-black w-full sm:w-56 h-56 relative flex items-center justify-center shrink-0 overflow-hidden">
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full hover:scale-110 hover:-rotate-6 transition-all duration-300 cursor-pointer z-50">H5</span>
              <img 
                src="/h5成品首页.jpg" 
                alt="h5成品首页" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="flex flex-col justify-center py-4">
              <h3 className="text-2xl font-bold mb-4 leading-tight">交互广告——人生之旅</h3>
              <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
                手绘图片、交互H5，在互动中展现情景，传达品牌价值观
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'articles'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveTab(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab(id);
  };

  return (
    <div className="font-sans text-black min-h-screen selection:bg-[#ffb822] selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl bg-white border-[3px] border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border-[3px] border-black flex items-center justify-center font-bold text-xl">
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 font-bold text-[15px]">
          <button onClick={() => scrollTo('home')} className={`hover:text-[#2575fc] transition-all hover:scale-110 hover:-rotate-2 active:scale-95 ${activeTab === 'home' && location.pathname === '/' ? 'text-[#2575fc]' : 'text-black'}`}>首页</button>
          <Link to="/about" className={`hover:text-[#2575fc] transition-all hover:scale-110 hover:rotate-2 active:scale-95 ${location.pathname === '/about' ? 'text-[#2575fc]' : 'text-black'}`}>关于我</Link>
          <Link to="/portfolio" className={`hover:text-[#2575fc] transition-all hover:scale-110 hover:rotate-2 active:scale-95 ${location.pathname === '/portfolio' ? 'text-[#2575fc]' : 'text-black'}`}>文章</Link>
          <Link to="/articles" className={`hover:text-[#2575fc] transition-all hover:scale-110 hover:-rotate-2 active:scale-95 ${location.pathname === '/articles' ? 'text-[#2575fc]' : 'text-black'}`}>其他</Link>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#2575fc] transition-all border-[3px] border-black hover:scale-110 hover:rotate-12 active:scale-95"
          >
            <Mail size={20} />
          </button>
        </div>
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <PortfolioSection />
              <ArticlesSection />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="py-12 text-center border-t-[3px] border-black bg-white mt-20">
        <p className="font-bold text-gray-600">© 2026 Chang Jiang. All rights reserved.</p>
      </footer>
    </div>
  );
}
