import React from 'react';
import { User, Mail } from 'lucide-react';
import { Timeline } from './Timeline';

export const About = () => {
  return (
    <section id="about" className="pt-48 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center gap-16">
      <div className="flex flex-col md:flex-row items-center gap-16 w-full">
        <div className="flex-1 space-y-8">
          <h2 className="text-5xl lg:text-6xl font-black leading-[1.1]">
            welcome to<br />
            <span className="bg-[#2575fc] text-white px-4 py-1 inline-block transform -rotate-1 mt-2">长江的世界</span>
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
          className="w-full max-w-[400px] aspect-square object-cover transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:scale-105" 
        />
      </div>
      </div>

      <Timeline />
    </section>
  );
};
