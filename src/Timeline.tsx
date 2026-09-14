import React from 'react';
import { Rocket, Code, TrendingDown, Video, ChevronUp, GraduationCap, Award, Camera, ShoppingBag, Users, Mic, Car, Flag, Megaphone } from 'lucide-react';

export const Timeline = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div className="w-full flex justify-center mb-12">
        <div className="bg-[#f3f3f3] border-[3px] border-black rounded-xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full max-w-3xl flex justify-center">
          <p className="text-2xl font-black text-center leading-relaxed overflow-hidden whitespace-nowrap border-r-4 border-black animate-typing inline-block">
            "追风赶月莫停留，平芜尽处是春山"
          </p>
        </div>
      </div>
      <h2 className="text-4xl lg:text-5xl font-black text-center mb-12">
        地球Online <span className="bg-[#ff5263] text-black px-4 py-1 inline-block transform -rotate-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:rotate-3 hover:scale-110 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">开放游戏进度</span>
      </h2>

      <div className="bg-white border-[4px] border-black rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 lg:p-12 relative overflow-hidden bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
        {/* Header Tags */}
        <div className="flex justify-between items-center mb-16 relative z-10">
          <div className="flex-1 flex justify-center">
            <div className="bg-white border-[3px] border-black px-6 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-black text-xl italic">主线任务</span>
            </div>
          </div>
          
          <div className="bg-white border-[3px] border-black p-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-20">
            <ChevronUp size={24} strokeWidth={3} />
          </div>

          <div className="flex-1 flex justify-center">
            <div className="bg-white border-[3px] border-black px-6 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-black text-xl italic">支线任务</span>
            </div>
          </div>
        </div>

        {/* Timeline Center Line */}
        <div className="absolute left-1/2 top-32 bottom-12 w-0 border-l-[4px] border-black border-dashed transform -translate-x-1/2 z-0"></div>

        <div className="relative z-10 space-y-6">
          
          {/* Item New - Right (Side Quest) */}
          <div className="flex justify-end items-center relative w-full">
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white border-[4px] border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
            <div className="w-[45%] pl-8">
            </div>
          </div>

          {/* Item 1 - Right (Side Quest) */}
          <div className="flex justify-end items-center relative w-full">
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white border-[4px] border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
            <div className="w-[45%] pl-8">
              <div className="bg-white border-[3px] border-black rounded-xl px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#2575fc] transition-all flex items-center justify-between gap-4">
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-3 mb-1">
                    <span className="font-black text-lg">2026.02</span>
                    <span className="bg-black text-white text-xs font-bold px-2 py-0.5">支线</span>
                  </div>
                  <p className="font-bold text-base leading-tight">开始vibe code，上线个人网站，解锁"代码+内容"双技能💻</p>
                </div>
                <div className="w-10 h-10 bg-[#2575fc] border-[3px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                  <Code className="text-white" size={20} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 - Right (Side Quest) */}
          <div className="flex justify-end items-center relative w-full">
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white border-[4px] border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
            <div className="w-[45%] pl-8">
              <div className="bg-white border-[3px] border-black rounded-xl px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#ff5263] transition-all flex items-center justify-between gap-4">
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-3 mb-1">
                    <span className="font-black text-lg">2025.10</span>
                    <span className="bg-black text-white text-xs font-bold px-2 py-0.5">支线</span>
                  </div>
                  <p className="font-bold text-base leading-tight">央广网实习记者，写稿40+，多篇全网推荐，从新媒体人进阶新闻人🎙️</p>
                </div>
                <div className="w-10 h-10 bg-[#ff5263] border-[3px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                  <Mic className="text-white" size={20} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* Item - Right (Side Quest) - 党务 */}
          <div className="flex justify-end items-center relative w-full">
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white border-[4px] border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
            <div className="w-[45%] pl-8">
              <div className="bg-white border-[3px] border-black rounded-xl px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#ffb822] transition-all flex items-center justify-between gap-4">
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-3 mb-1">
                    <span className="font-black text-lg">2025.09</span>
                    <span className="bg-black text-white text-xs font-bold px-2 py-0.5">支线</span>
                  </div>
                  <p className="font-bold text-base leading-tight">担任学生支部副书记，化身党务小能手，党日、发展、转接全都会</p>
                </div>
                <div className="w-10 h-10 bg-[#ffb822] border-[3px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                  <Flag className="text-white" size={20} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* Item 4 - Right (Side Quest) */}
          <div className="flex justify-end items-center relative w-full">
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white border-[4px] border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
            <div className="w-[45%] pl-8">
              <div className="bg-white border-[3px] border-black rounded-xl px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#ff5263] transition-all flex items-center justify-between gap-4">
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-3 mb-1">
                    <span className="font-black text-lg">2025.06</span>
                    <span className="bg-black text-white text-xs font-bold px-2 py-0.5">支线</span>
                  </div>
                  <p className="font-bold text-base leading-tight">封面新闻实习，运营抖音栏目，4条视频播放破百万，摸透流量密码📱</p>
                </div>
                <div className="w-10 h-10 bg-[#ff5263] border-[3px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                  <Video className="text-white" size={20} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* Item 5 - Left (Main Quest) */}
          <div className="flex justify-start items-center relative w-full">
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white border-[4px] border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
            <div className="w-[45%] pr-8 flex justify-end">
              <div className="bg-white border-[3px] border-black rounded-xl px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative w-full group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#2575fc] transition-all flex items-center justify-between gap-4">
                <div className="w-10 h-10 bg-[#2575fc] border-[3px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                  <GraduationCap className="text-white" size={20} strokeWidth={3} />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-start gap-3 mb-1">
                    <span className="bg-black text-white text-xs font-bold px-2 py-0.5">主线</span>
                    <span className="font-black text-lg">2024.09-至今</span>
                  </div>
                  <p className="font-bold text-base leading-tight">西南大学，新闻与传播，硕士</p>
                </div>
              </div>
            </div>
          </div>

          {/* Item 6 - Right (Side Quest) */}
          <div className="flex justify-end items-center relative w-full">
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white border-[4px] border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
            <div className="w-[45%] pl-8">
              <div className="bg-white border-[3px] border-black rounded-xl px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#ffb822] transition-all flex items-center justify-between gap-4">
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-3 mb-1">
                    <span className="font-black text-lg">2024.09</span>
                    <span className="bg-black text-white text-xs font-bold px-2 py-0.5">支线</span>
                  </div>
                  <p className="font-bold text-base leading-tight">兼职研究生辅导员，化身同学小管家，搞定综测和奖助贷，收获师生好评✨</p>
                </div>
                <div className="w-10 h-10 bg-[#ffb822] border-[3px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                  <Users className="text-white" size={20} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* Item 7 - Right (Side Quest) */}
          <div className="flex justify-end items-center relative w-full">
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white border-[4px] border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
            <div className="w-[45%] pl-8">
              <div className="bg-white border-[3px] border-black rounded-xl px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#ffb822] transition-all flex items-center justify-between gap-4">
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-3 mb-1">
                    <span className="font-black text-lg">2024.09</span>
                    <span className="bg-black text-white text-xs font-bold px-2 py-0.5">支线</span>
                  </div>
                  <p className="font-bold text-base leading-tight">成为校园新媒体打工人，推文阅读破万，解锁"写爆款"成就📈</p>
                </div>
                <div className="w-10 h-10 bg-[#ffb822] border-[3px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                  <Video className="text-white" size={20} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* Item 8 - Left (Main Quest) */}
          <div className="flex justify-start items-center relative w-full">
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white border-[4px] border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
            <div className="w-[45%] pr-8 flex justify-end">
              <div className="bg-white border-[3px] border-black rounded-xl px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative w-full group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#2575fc] transition-all flex items-center justify-between gap-4">
                <div className="w-10 h-10 bg-[#2575fc] border-[3px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                  <GraduationCap className="text-white" size={20} strokeWidth={3} />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-start gap-3 mb-1">
                    <span className="bg-black text-white text-xs font-bold px-2 py-0.5">主线</span>
                    <span className="font-black text-lg">2020.09-2024.06</span>
                  </div>
                  <p className="font-bold text-base leading-tight">西南交通大学，传播学，本科</p>
                </div>
              </div>
            </div>
          </div>

          {/* Item 9 - Right (Side Quest) */}
          <div className="flex justify-end items-center relative w-full">
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white border-[4px] border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
            <div className="w-[45%] pl-8">
              <div className="bg-white border-[3px] border-black rounded-xl px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#ff5263] transition-all flex items-center justify-between gap-4">
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-3 mb-1">
                    <span className="font-black text-lg">2023.12</span>
                    <span className="bg-black text-white text-xs font-bold px-2 py-0.5">支线</span>
                  </div>
                  <p className="font-bold text-base leading-tight">苏宁易购实习打工，靠市集和直播带货，把门店流量和业绩拉满💸</p>
                </div>
                <div className="w-10 h-10 bg-[#ff5263] border-[3px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                  <ShoppingBag className="text-white" size={20} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* Item - Right (Side Quest) - 公众号 */}
          <div className="flex justify-end items-center relative w-full">
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white border-[4px] border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
            <div className="w-[45%] pl-8">
              <div className="bg-white border-[3px] border-black rounded-xl px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#ffb822] transition-all flex items-center justify-between gap-4">
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-3 mb-1">
                    <span className="font-black text-lg">2022.06</span>
                    <span className="bg-black text-white text-xs font-bold px-2 py-0.5">支线</span>
                  </div>
                  <p className="font-bold text-base leading-tight">负责搭建西南交通大学传播系公众号，公号运营从0到1</p>
                </div>
                <div className="w-10 h-10 bg-[#ffb822] border-[3px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                  <Megaphone className="text-white" size={20} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
