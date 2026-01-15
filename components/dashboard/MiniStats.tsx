import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

interface MiniCardProps {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  subValue?: string;
  active?: boolean;
}

function MiniCard({ label, value, change, trend, subValue, active }: MiniCardProps) {
  return (
    <div className={`rounded-2xl p-4 flex flex-col justify-between min-h-[100px] border transition-all ${active ? 'bg-white border-pink-100 shadow-md ring-1 ring-pink-50' : 'bg-white border-transparent hover:border-gray-100'}`}>
        <div className="flex justify-between items-start">
             <span className="text-xs font-semibold text-gray-500">{label}</span>
             {trend === 'up' ? (
                 <div className="flex items-center text-[10px] font-bold text-gray-400">
                    <TrendingUp className="w-3 h-3 mr-1" /> {subValue}
                 </div>
             ) : (
                <div className="flex items-center text-[10px] font-bold text-gray-400">
                    <TrendingDown className="w-3 h-3 mr-1" /> {subValue}
                </div>
             )}
        </div>

        <div className="mt-2">
            <div className={`text-xl font-bold ${active ? 'text-[#E11D48]' : 'text-gray-900'}`}>{value}</div>
             <div className="flex items-center gap-1 mt-1">
                 <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${active ? 'bg-pink-100 text-[#E11D48]' : 'bg-gray-100 text-gray-500'}`}>
                     {trend === 'up' ? '↗' : '↘'} {change}
                 </span>
             </div>
        </div>
    </div>
  );
}

export default function MiniStats() {
  return (
    <div className="col-span-12 xl:col-span-4 grid grid-cols-3 gap-3 h-full">
       <MiniCard 
         label="Deals" 
         value="256" 
         change="5" 
         subValue="128" 
         trend="down" 
       />
       <MiniCard 
         label="Value" 
         value="528k" 
         change="7.9%" 
         subValue="" 
         trend="up" 
         active={true}
       />
       <MiniCard 
         label="Win rate" 
         value="44%" 
         change="1.2%" 
         subValue="" 
         trend="up" 
       />
    </div>
  );
}
