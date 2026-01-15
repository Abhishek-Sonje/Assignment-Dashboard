import { ChevronDown, MoreHorizontal } from 'lucide-react';
import Avatar from '@/components/ui/Avatar';

export default function PlatformValueCard() {
  return (
    <div className="bg-[#E11D48] rounded-[2rem] p-6 text-white relative h-full flex flex-col justify-between overflow-hidden">
        {/* Background gradient/pattern simulation */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full filter blur-[80px] opacity-50 -mr-16 -mt-16 pointer-events-none"></div>

        <div>
            <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-xl">🏀</span>
                    </div>
                </div>
                <div className="flex bg-black/20 rounded-full p-1 backdrop-blur-sm">
                    <button className="px-3 py-1 rounded-full bg-black text-xs font-bold">Revenue</button>
                    <button className="px-3 py-1 rounded-full text-white/70 text-xs font-medium hover:text-white">Leads</button>
                    <button className="px-3 py-1 rounded-full text-white/70 text-xs font-medium hover:text-white">W/L</button>
                </div>
            </div>
            
            <div className="mb-2 relative z-10">
                <div className="text-white/60 text-xs font-medium">Platform value</div>
                 <div className="flex items-center gap-2 font-bold text-lg">
                    Dribbble <ChevronDown className="w-4 h-4 text-white/60" />
                </div>
            </div>
        </div>

        {/* Vertical Bars Chart Simulation (CSS) */}
        <div className="flex items-end justify-between h-32 gap-2 relative z-10 mt-4 px-2">
             <div className="flex flex-col items-center gap-2 group cursor-pointer w-full">
                 <div className="bg-[#F43F5E] text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$18,552</div>
                 <div className="w-full bg-[#BE123C] rounded-t-md h-16 group-hover:bg-white transition-colors relative">
                      {/* Active bar gradient/glow */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-white/30 rounded-t-md opacity-0 group-hover:opacity-100"></div>
                 </div>
                 <div className="text-[10px] text-white/60">Revenue</div>
             </div>

             <div className="flex flex-col items-center gap-2 w-full">
                 <div className="bg-[#F43F5E] text-[10px] font-bold px-2 py-0.5 rounded relative mb-1">
                     $8,901
                     <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#F43F5E] rotate-45"></div>
                 </div>
                 <div className="w-full bg-white rounded-t-md h-10 shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
                 <div className="text-[10px] text-white/60">Sep</div>
             </div>

             {/* More bars... simple fill */}
             {['$11,035', '$9,288', '', '', ''].map((val, i) => (
                 <div key={i} className="flex flex-col items-center gap-2 w-full h-full justify-end">
                      {val && <div className="bg-[#F43F5E] text-[10px] font-bold px-1.5 py-0.5 rounded mb-1">{val}</div>}
                      <div className="w-full bg-[#BE123C] rounded-t-md opacity-60" style={{ height: `${30 + Math.random() * 40}%`}}></div>
                      <div className="text-[10px] text-white/60">{['Oct', 'Nov', 'Dec', 'Jan'][i] || '.'}</div>
                 </div>
             ))}
        </div>
        
        {/* Avatars at bottom */}
         <div className="flex items-center -space-x-2 mt-4 relative z-10">
                <Avatar src="https://i.pravatar.cc/150?u=9" size="sm" className="border-2 border-[#E11D48]" />
                <Avatar src="https://i.pravatar.cc/150?u=8" size="sm" className="border-2 border-[#E11D48]" />
                <Avatar src="https://i.pravatar.cc/150?u=7" size="sm" className="border-2 border-[#E11D48]" />
         </div>
    </div>
  );
}
