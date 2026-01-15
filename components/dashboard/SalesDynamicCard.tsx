import { ChevronRight } from 'lucide-react';
import SalesLineChart from '@/components/charts/SalesLineChart';

export default function SalesDynamicCard() {
  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-soft h-full flex flex-col relative overflow-hidden">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
            <div>
                 <div className="flex items-center gap-2 mb-4">
                     <span className="px-3 py-1 rounded-full bg-gray-50 text-xs font-semibold text-gray-500 flex items-center">
                         Top sales <span className="text-orange-400 ml-1">🔥</span>
                     </span>
                     <span className="px-3 py-1 rounded-full bg-white border border-gray-100 text-xs font-semibold text-gray-500 shadow-sm">
                         Sales streak 🔥
                     </span>
                     <span className="px-3 py-1 rounded-full bg-white border border-gray-100 text-xs font-semibold text-gray-500 shadow-sm">
                         Top review 👍
                     </span>
                 </div>
                 
                 <div className="text-xs text-gray-400 font-semibold mb-1">Work with platforms</div>
                 <div className="flex items-center gap-2">
                     <div className="flex items-center gap-1 font-bold text-gray-700">
                         <span className="text-pink-500">🏀</span> Dribbble
                     </div>
                 </div>
            </div>

            {/* Right side stats */}
            <div className="flex flex-col items-end gap-2">
                 <div className="flex items-center gap-2">
                      <div className="px-2 py-0.5 bg-[#E11D48] text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                          🔥 3
                      </div>
                      <div className="text-[#E11D48] font-bold text-sm bg-pink-50 px-2 py-0.5 rounded-full">
                          $156,841
                      </div>
                 </div>
                 
                 <div className="space-y-1 text-right">
                     <div className="flex items-center justify-end gap-2 text-xs font-semibold text-gray-600">
                         <span className="text-orange-500">📷</span> Instagram
                     </div>
                     <div className="text-[10px] text-green-500 font-bold">14.1% $22,144</div>
                     
                     <div className="flex items-center justify-end gap-2 text-xs font-semibold text-gray-600 mt-2">
                         <span className="text-blue-500 font-bold">G</span> Google
                     </div>
                     <div className="text-[10px] text-gray-400">28.1% $44,072</div>

                     <div className="flex items-center justify-end gap-2 text-xs font-semibold text-gray-400 mt-2">
                         <div className="w-3 h-3 rounded bg-gray-200"></div> Other
                     </div>
                     <div className="text-[10px] text-gray-300">7.1% $11,135</div>
                 </div>
            </div>
        </div>

        {/* Value Big */}
        <div className="mb-6">
             <div className="text-3xl font-bold text-gray-900 flex items-baseline gap-2">
                 45.3% <span className="text-gray-300 text-2xl font-medium">$71,048</span>
             </div>
             <div className="text-xs text-gray-400 font-medium mt-1">Sales dynamic</div>
        </div>

        {/* Chart Area Simulation - Now Real Chart */}
        <div className="flex-1 w-full relative -ml-2">
             <div className="h-full w-full absolute inset-0">
                  <SalesLineChart />
             </div>
             
             {/* Floating avatars on chart points - Positioned absolutely to simulate data points */}
             <div className="absolute top-[40%] left-[20%] w-6 h-6 rounded-full overflow-hidden border-2 border-white shadow-md z-10 transition-transform hover:scale-125 hover:z-20 cursor-pointer">
                 <img src="https://i.pravatar.cc/150?u=12" alt="" />
             </div>
             <div className="absolute top-[30%] right-[30%] w-6 h-6 rounded-full overflow-hidden border-2 border-white shadow-md z-10 transition-transform hover:scale-125 hover:z-20 cursor-pointer">
                 <img src="https://i.pravatar.cc/150?u=15" alt="" />
             </div>
             <div className="absolute bottom-[20%] right-[10%] w-6 h-6 rounded-full overflow-hidden border-2 border-white shadow-md z-10 transition-transform hover:scale-125 hover:z-20 cursor-pointer">
                 <img src="https://i.pravatar.cc/150?u=22" alt="" />
             </div>
        </div>
        
        {/* X Axis is handled by Chart.js now, but custom labels in design are specific spacing */}
    </div>
  );
}
