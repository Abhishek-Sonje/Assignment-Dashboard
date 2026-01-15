import { PLATFORM_STATS } from '@/lib/mock-data';
import { Filter, Menu } from 'lucide-react';
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
    <div className="bg-white rounded-3xl p-6 shadow-soft h-full flex flex-col">
       <div className="flex items-center justify-between mb-6">
           <div className="p-2 bg-gray-50 rounded-lg">
               <Menu className="w-4 h-4 text-gray-400" />
           </div>
           <button className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full hover:bg-gray-100">
               Filters <Filter className="w-3 h-3" />
           </button>
       </div>

       <div className="flex-1 space-y-6">
           {PLATFORM_STATS.map((platform) => (
               <div key={platform.name} className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                       <div className={clsx(
                           "w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm",
                           platform.name === 'Dribbble' ? 'bg-pink-50 text-pink-500' : 
                           platform.name === 'Instagram' ? 'bg-orange-50 text-orange-500' :
                           platform.name === 'Behance' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'
                       )}>
                           {platform.name === 'Dribbble' && <span className="text-pink-500">🏀</span>}
                           {platform.name === 'Instagram' && <span className="text-orange-500">📷</span>}
                           {platform.name === 'Behance' && <span className="text-blue-500 font-bold">Bē</span>}
                           {platform.name === 'Google' && <span className="text-green-500 font-bold">G</span>}
                       </div>
                       <span className="text-sm font-semibold text-gray-700">{platform.name}</span>
                   </div>
                   
                   <div className="flex items-center gap-4">
                       <span className="text-sm font-bold text-gray-900">{platform.value}</span>
                       <span className={clsx("text-xs font-medium px-2 py-0.5 rounded-full bg-gray-50 text-gray-500")}>
                           {platform.percent}
                       </span>
                   </div>
               </div>
           ))}
       </div>
    </div>
  );
}
