import React, { useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="portfolio" className="pt-48 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl lg:text-6xl font-black leading-[1.1]">
          Take a look at my <span className="bg-[#ffb822] text-black px-4 py-1 inline-block transform rotate-1 transition-all duration-300 hover:scale-110 hover:-rotate-2 hover:shadow-lg cursor-default">journal</span>
        </h2>
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
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-50">Articles</span>
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
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-50">Articles</span>
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
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-50">Articles</span>
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



        {/* Project 4 (Copy) */}
        <div
          onClick={() => window.open('https://mp.weixin.qq.com/s/Ilvbg_aGaoPSj6Xw8vZIjA', '_blank')}
          className="bg-white border-[3px] border-black rounded-[2rem] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-6 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        >
          <div className="rounded-2xl border-[3px] border-black w-full sm:w-48 h-40 relative overflow-hidden shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <img 
              src="/川西小环线.png" 
              alt="川西小环线" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-50">Articles</span>
          </div>
          <div className="flex flex-col justify-center py-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="text-gray-600 text-sm font-bold">旅行部落</span>
                <span className="w-px h-4 bg-gray-300 mx-2"></span>
                <Calendar size={18} className="text-gray-500" />
                <span className="text-gray-600 text-base font-normal">2023.07</span>
                <span className="ml-3 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">川西</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">旅行</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">小环线</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 leading-tight">川西小环线 ｜ 此生必驾的一场冒险</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              来到川西感受一场山野万里 阳光充足 雪山洁白的旷野
            </p>
          </div>
        </div>

        {/* Project 5 (Copy 2) */}
        <div
          onClick={() => window.open('https://mp.weixin.qq.com/s/anLScIzIcu5dS_86oqyZJg', '_blank')}
          className="bg-white border-[3px] border-black rounded-[2rem] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-6 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        >
          <div className="rounded-2xl border-[3px] border-black w-full sm:w-48 h-40 relative overflow-hidden shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <img 
              src="/西大毛衣.jpg" 
              alt="西大毛衣" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-50">Articles</span>
          </div>
          <div className="flex flex-col justify-center py-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="text-gray-600 text-sm font-bold">西大研会</span>
                <span className="w-px h-4 bg-gray-300 mx-2"></span>
                <Calendar size={18} className="text-gray-500" />
                <span className="text-gray-600 text-base font-normal">2024.12</span>
                <span className="ml-3 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">西大建筑</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">AI</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">毛衣</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 leading-tight">降温啦！SWU建筑也穿上了毛衣~</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              入冬，校园多地标建筑穿上 “毛衣”啦！
            </p>
          </div>
        </div>

        {/* Project 6 (Copy 3) */}
        <div
          onClick={() => window.open('https://mp.weixin.qq.com/s/-0fRvh7eyc5-TAYBXykzZQ', '_blank')}
          className="bg-white border-[3px] border-black rounded-[2rem] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-6 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        >
          <div className="rounded-2xl border-[3px] border-black w-full sm:w-48 h-40 relative overflow-hidden shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <img 
              src="/课程成果展.png" 
              alt="课程成果展示与投票" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-50">Articles</span>
          </div>
          <div className="flex flex-col justify-center py-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="text-gray-600 text-sm font-bold">西南交大传播系</span>
                <span className="w-px h-4 bg-gray-300 mx-2"></span>
                <Calendar size={18} className="text-gray-500" />
                <span className="text-gray-600 text-base font-normal">2022.12</span>
                <span className="ml-3 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">课程</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">展示</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">投票</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 leading-tight">课程成果展示与投票</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              西南交大传播系课程成果展示
            </p>
          </div>
        </div>

        {/* Project 7 (Copy 4) */}
        <div
          onClick={() => window.open('http://www.cq.xinhuanet.com/20251202/4ff969630286443ea7cb2bba7b183039/c.html', '_blank')}
          className="bg-white border-[3px] border-black rounded-[2rem] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-6 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        >
          <div className="rounded-2xl border-[3px] border-black w-full sm:w-48 h-40 relative overflow-hidden shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <img 
              src="/低空经济.png" 
              alt="低空经济" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-50">Articles</span>
          </div>
          <div className="flex flex-col justify-center py-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="text-gray-600 text-sm font-bold">新华网</span>
                <span className="w-px h-4 bg-gray-300 mx-2"></span>
                <Calendar size={18} className="text-gray-500" />
                <span className="text-gray-600 text-base font-normal">2025.12</span>
                <span className="ml-3 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">低空经济</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">清安储能</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">车路云</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 leading-tight">科研、产业、治理的三重变革——重庆培育涵养创新生态推动城市能级跃迁</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              重庆以科研、产业、治理三重变革培育创新生态，推动城市能级跃迁
            </p>
          </div>
        </div>

        {/* Project 8 (Copy 5) */}
        <div
          onClick={() => window.open('https://apicnrapp.cnr.cn/html/share.html?id=30411493&ui=OWurbd2/uhbj6TNq5Ejitvx1qZFizs0FbbJz+Z2G1zIYn8QZqysM+bsLzdXPXa6S&action=share&type=1', '_blank')}
          className="bg-white border-[3px] border-black rounded-[2rem] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-6 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        >
          <div className="rounded-2xl border-[3px] border-black w-full sm:w-48 h-40 relative overflow-hidden shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <img 
              src="/长安汽车.png" 
              alt="长安汽车" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-50">Articles</span>
          </div>
          <div className="flex flex-col justify-center py-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="text-gray-600 text-sm font-bold">央广网</span>
                <span className="w-px h-4 bg-gray-300 mx-2"></span>
                <Calendar size={18} className="text-gray-500" />
                <span className="text-gray-600 text-base font-normal">2025.11</span>
                <span className="ml-3 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">长安</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">汽车</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">创新</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 leading-tight">向"新"出发 ｜满电出发 重庆"新汽车"智驭全球</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              长安汽车自主创新推动重庆智能网联新能源汽车远销全球
            </p>
          </div>
        </div>

        {/* Project 9 (Copy 6) */}
        <div
          onClick={() => window.open('https://apicnrapp.cnr.cn/html/share.html?id=30520605&ui=Sx44q3wmcFOOHqL/I386bWIOiCFsIeeAK4Ayard0HxNtHfrPnzWllT+RW8eN0aeh&action=share&type=1', '_blank')}
          className="bg-white border-[3px] border-black rounded-[2rem] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-6 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        >
          <div className="rounded-2xl border-[3px] border-black w-full sm:w-48 h-40 relative overflow-hidden shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <img 
              src="/赵伍面庄.png" 
              alt="赵伍面庄" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-50">Articles</span>
          </div>
          <div className="flex flex-col justify-center py-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="text-gray-600 text-sm font-bold">央广网</span>
                <span className="w-px h-4 bg-gray-300 mx-2"></span>
                <Calendar size={18} className="text-gray-500" />
                <span className="text-gray-600 text-base font-normal">2026.01</span>
                <span className="ml-3 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">重庆小面</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">匠心传承</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">父子坚守</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 leading-tight">百面重庆｜父子三十年坚守：小面要味道 不要"网红"</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              重庆赵伍父子三十年坚守匠心做好传统小面，拒绝网红营销，凭地道口味火出圈并传承老味道。
            </p>
          </div>
        </div>

        {/* Project 10 (Copy 7) */}
        <div
          onClick={() => window.open('https://mp.weixin.qq.com/s/p1LFPND432H90Z6wbaZbQA', '_blank')}
          className="bg-white border-[3px] border-black rounded-[2rem] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-6 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        >
          <div className="rounded-2xl border-[3px] border-black w-full sm:w-48 h-40 relative overflow-hidden shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <img 
              src="/SWU拼图.png" 
              alt="SWU拼图" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-50">Articles</span>
          </div>
          <div className="flex flex-col justify-center py-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="text-gray-600 text-sm font-bold">西大研会</span>
                <span className="w-px h-4 bg-gray-300 mx-2"></span>
                <Calendar size={18} className="text-gray-500" />
                <span className="text-gray-600 text-base font-normal">2024.12</span>
                <span className="ml-3 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">公众号</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">拼图</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">创意</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 leading-tight">想把2024年"拼"好给你~</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              在拼图中看见SWU的年度时光
            </p>
          </div>
        </div>

        {/* More Articles Coming Soon */}
        <div className="bg-gray-100 border-[3px] border-gray-300 rounded-[2rem] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-4 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-4xl animate-pulse">📝</span>
            <h3 className="text-2xl font-bold text-gray-700">更多文章正在陆续更新中</h3>
          </div>
          <p className="text-gray-500 font-medium text-center">
            敬请期待，更多精彩内容即将上线！
          </p>
        </div>

      </div>
    </section>
  );
};
