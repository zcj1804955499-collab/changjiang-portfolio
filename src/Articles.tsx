import React from 'react';
import { PenTool, Layout, Smartphone } from 'lucide-react';

export const Articles = () => {
  return (
    <section id="articles" className="pt-48 pb-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <h2 className="text-5xl lg:text-6xl font-black">Vedio<span className="text-3xl lg:text-4xl mx-1">&amp;</span>Photo<span className="text-3xl lg:text-4xl mx-1">&amp;</span>More</h2>
      </div>

      {/* First section: left + right 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Main Article */}
        <div 
          onClick={() => window.open('https://www.zcool.com.cn/work/ZNzMzMTI2NTY=.html', '_blank')}
          className="bg-white border-[3px] border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
          <div className="bg-[#f3f3f3] rounded-2xl border-[3px] border-black h-80 mb-8 relative flex items-center justify-center overflow-hidden">
            <span className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full z-10">Vedio</span>
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
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-50">Photo</span>
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
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-50">H5</span>
              <img 
                src="/h5成品首页.jpg" 
                alt="h5成品首页" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="flex flex-col justify-center py-4">
              <h3 className="text-2xl font-bold mb-4 leading-tight">交互广告——人生之旅</h3>
              <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
                手绘图片、交互h5，在互动中展现情景，传达品牌价值观
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second section: 1 and 2 each on separate lines */}
      <div className="space-y-8">
        {/* Article 4 (Copy 1) */}
          <div 
            onClick={() => window.open('https://www.zcool.com.cn/work/ZNzMzMTYwNjg=.html', '_blank')}
            className="bg-white border-[3px] border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-8 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
            <div className="bg-[#f3f3f3] rounded-2xl border-[3px] border-black w-full sm:w-56 h-56 relative flex items-center justify-center shrink-0 overflow-hidden">
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-50">Vedio</span>
              <img 
                src="/赵万民教授.png" 
                alt="赵万民教授" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          <div className="flex flex-col justify-center py-4">
            <h3 className="text-2xl font-bold mb-4 leading-tight">个人采访视频</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              重庆城市科技学院赵万民教授的个人采访
            </p>
          </div>
        </div>

        {/* Article 5 (Copy 2) */}
          <div 
            onClick={() => window.open('https://www.zcool.com.cn/work/ZNzMzMTY3MDQ=.html', '_blank')}
            className="bg-white border-[3px] border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-8 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
            <div className="bg-[#f3f3f3] rounded-2xl border-[3px] border-black w-full sm:w-56 h-56 relative flex items-center justify-center shrink-0 overflow-hidden">
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-50">策划案</span>
              <img 
                src="/石头机器人.png" 
                alt="石头扫地机器人" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          <div className="flex flex-col justify-center py-4">
            <h3 className="text-2xl font-bold mb-4 leading-tight">石头扫地机器人整合营销策划</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              石头机器人 ｜ 苏宁易购 双十一整合营销方案
            </p>
          </div>
        </div>

        {/* Article 6 (Copy 3) */}
          <div 
            onClick={() => window.open('https://www.zcool.com.cn/work/ZNzMzMTU5OTI=.html', '_blank')}
            className="bg-white border-[3px] border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-8 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
            <div className="bg-[#f3f3f3] rounded-2xl border-[3px] border-black w-full sm:w-56 h-56 relative flex items-center justify-center shrink-0 overflow-hidden">
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-50">Vedio</span>
              <img 
                src="/ai悼念.png" 
                alt="AI悼念视频" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          <div className="flex flex-col justify-center py-4">
            <h3 className="text-2xl font-bold mb-4 leading-tight">AI悼念视频</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              悼念视频，使用ai完成图片视频化、声音克隆
            </p>
          </div>
        </div>

        {/* Article 7 (Copy 4) */}
          <div 
            onClick={() => window.open('https://www.zcool.com.cn/work/ZNzMzMTY2MzI=.html', '_blank')}
            className="bg-white border-[3px] border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-8 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
            <div className="bg-[#f3f3f3] rounded-2xl border-[3px] border-black w-full sm:w-56 h-56 relative flex items-center justify-center shrink-0 overflow-hidden">
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-50">海报</span>
              <img 
                src="/漫画海报.png" 
                alt="个人海报" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          <div className="flex flex-col justify-center py-4">
            <h3 className="text-2xl font-bold mb-4 leading-tight">个人海报</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              真人海报、媒体封面、漫画……
            </p>
          </div>
        </div>

        {/* Article 8 (Copy 5) */}
          <div 
            onClick={() => window.open('https://www.zcool.com.cn/work/ZNzMzMTYwMjg=.html', '_blank')}
            className="bg-white border-[3px] border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-8 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
            <div className="bg-[#f3f3f3] rounded-2xl border-[3px] border-black w-full sm:w-56 h-56 relative flex items-center justify-center shrink-0 overflow-hidden">
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-50">Vedio</span>
              <img 
                src="/萤火虫港湾.png" 
                alt="萤火虫港湾" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          <div className="flex flex-col justify-center py-4">
            <h3 className="text-2xl font-bold mb-4 leading-tight">微纪录片：萤火虫港湾</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              重庆萤火虫港湾爆火背后的情况
            </p>
          </div>
        </div>

        {/* Article 9 (Copy 6) */}
          <div 
            onClick={() => window.open('https://www.zcool.com.cn/work/ZNzMzMTY3NDQ=.html', '_blank')}
            className="bg-white border-[3px] border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-8 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
            <div className="bg-[#f3f3f3] rounded-2xl border-[3px] border-black w-full sm:w-56 h-56 relative flex items-center justify-center shrink-0 overflow-hidden">
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-50">策划案</span>
              <img 
                src="/纳爱斯.png" 
                alt="纳爱斯牙膏" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          <div className="flex flex-col justify-center py-4">
            <h3 className="text-2xl font-bold mb-4 leading-tight">纳爱斯牙膏整合营销策划</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              亲近一点，更nice
            </p>
          </div>
        </div>

        {/* Article 10 (Copy 7) */}
          <div 
            onClick={() => window.open('https://www.zcool.com.cn/work/ZNzMzMTYxOTI=.html', '_blank')}
            className="bg-white border-[3px] border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-8 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
            <div className="bg-[#f3f3f3] rounded-2xl border-[3px] border-black w-full sm:w-56 h-56 relative flex items-center justify-center shrink-0 overflow-hidden">
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-50">Vedio</span>
              <img 
                src="/其他视频.png" 
                alt="更多视频" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          <div className="flex flex-col justify-center py-4">
            <h3 className="text-2xl font-bold mb-4 leading-tight">更多视频</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              营销、党建、微课、vlog等
            </p>
          </div>
        </div>

        {/* Article 11 (Copy 8) */}
        <div className="bg-white border-[3px] border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-8 flex-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <div className="bg-[#f3f3f3] rounded-2xl border-[3px] border-black w-full sm:w-56 h-56 relative flex items-center justify-center shrink-0">
            <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-50">more</span>
            <Smartphone size={48} />
          </div>
          <div className="flex flex-col justify-center py-4">
            <h3 className="text-2xl font-bold mb-4 leading-tight">更多内容正在逐步更新中</h3>
            <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
              正在更新ing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
