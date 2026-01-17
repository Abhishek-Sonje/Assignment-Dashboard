import { PLATFORM_STATS } from '@/lib/mock-data';
import { Dribbble, Filter, Instagram, Menu } from 'lucide-react';
import { clsx } from 'clsx';

// Icons mapping mock
const Icons: Record<string, string> = {
    'Dribbble': '🏀',
    'Instagram': '📷',
    'Behance': 'Bd',
    'Google': 'G',
};

export default function SocialStatsCard() {
  return (
    <div className="bg-[#f0f0f0] rounded-3xl p-4 shadow-soft flex flex-col">
       <div className="flex items-center justify-between mb-6">
           <div className="p-2 rounded-lg">
               <Menu className="w-5 h-5 text-gray-600" />
           </div>
           <button className="flex items-center gap-2 text-sm font-medium text-gray-800  px-3 py-1.5 rounded-xl border border-gray-300 hover:bg-gray-100">
               Filters <Filter className="w-3 h-3" />
           </button>
       </div>

       <div className="flex-1 space-y-2">
           {PLATFORM_STATS.map((platform) => (
               <div key={platform.name} className="flex items-center justify-between bg-white py-2 px-2 rounded-xl shadow-sm ">
                   <div className="flex items-center gap-3">
                       <div className={clsx(
                           "w-8 h-8 rounded-full flex items-center justify-center text-sm shadow",
                           platform.name === 'Dribbble' ? ' text-pink-500' : 
                           platform.name === 'Instagram' ? ' text-orange-500' :
                           platform.name === 'Behance' ? ' text-blue-500' : ' text-green-500'
                       )}>
                           {platform.name === 'Dribbble' && <span className="text-pink-500"><Dribbble className="w-5 h-5" /></span>}
                           {platform.name === 'Instagram' && <span className="text-orange-500"><Instagram className="w-5 h-5" /></span>}
                           {platform.name === 'Behance' && <span className="text-blue-500 font-bold">Bē</span>}
                           {platform.name === 'Google' && <span className="text-green-500 font-bold">G</span>}
                       </div>
                       <span className="text-sm font-medium text-gray-700">{platform.name}</span>
                   </div>
                   
                   <div className="flex items-center gap-4">
                       <span className="text-sm font-bold text-gray-900">{platform.value}</span>
                       <span className={clsx("text-xs font-medium py-0.5 rounded-full bg-gray-200 px-2 text-gray-500")}>
                           {platform.percent}
                       </span>
                   </div>
               </div>
           ))}
       </div>
    </div>
  );
}
