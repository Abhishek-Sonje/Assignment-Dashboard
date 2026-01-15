import { BarChart3, Filter } from 'lucide-react';

export default function ReferrerChartCard() {
  return (
    <div className="bg-[#F3F4F6] rounded-3xl p-6 h-full flex flex-col relative overflow-hidden">
        {/* Using a slight gradient bg or just gray per design */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 opacity-50"></div>
        
        <div className="relative z-10 flex items-center justify-between mb-4">
           <div className="p-2">
               <BarChart3 className="w-4 h-4 text-gray-400" />
           </div>
           <button className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-white/60 px-3 py-1.5 rounded-full hover:bg-white">
               Filters <Filter className="w-3 h-3" />
           </button>
       </div>

       <div className="relative z-10 flex-1 flex items-end justify-center gap-4 pb-2">
            {/* Visual CSS-only bars placeholder until Chart.js is ready */}
            <div className="w-8 bg-blue-100 rounded-t-xl h-[40%] relative group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm text-[10px] hidden group-hover:block">Be</div>
            </div>
            <div className="w-8 bg-pink-100 rounded-t-xl h-[70%] relative group">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white p-1 rounded-full shadow-sm">
                    <span className="text-pink-500 text-[10px]">🏀</span>
                </div>
            </div>
            <div className="w-8 bg-orange-100 rounded-t-xl h-[50%]"></div>
            <div className="w-8 bg-green-100 rounded-t-xl h-[30%] relative">
                 <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white p-1 rounded-full shadow-sm w-5 h-5 flex items-center justify-center">
                    <span className="text-green-500 text-[8px] font-bold">G</span>
                </div>
            </div>
            <div className="w-8 bg-gray-200 rounded-t-xl h-[20%]"></div>
       </div>

       <div className="relative z-10 mt-2">
           <h4 className="text-sm font-semibold text-gray-600">Deals amount</h4>
           <div className="flex items-center gap-1 text-xs text-gray-400 cursor-pointer">
               by referrer category <span className="text-[10px]">▼</span>
           </div>
       </div>
    </div>
  );
}
