import { SALES_TEAM } from '@/lib/mock-data';
import Avatar from '@/components/ui/Avatar';
import { ChevronUp } from 'lucide-react';

export default function SalesTeamCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-soft h-full">
         <div className="grid grid-cols-12 text-xs text-gray-400 font-medium mb-4 px-2">
             <div className="col-span-3">Sales</div>
             <div className="col-span-3">Revenue</div>
             <div className="col-span-2 text-center">Leads</div>
             <div className="col-span-2 text-center">KPI</div>
             <div className="col-span-2 text-center">W/L</div>
         </div>

         <div className="space-y-4">
             {SALES_TEAM.map((member, idx) => (
                 <div key={member.name} className="grid grid-cols-12 items-center px-2 py-2 hover:bg-gray-50 rounded-xl transition-colors group">
                     <div className="col-span-3 flex items-center gap-3">
                         <Avatar src={`https://i.pravatar.cc/150?u=${idx + 10}`} size="sm" />
                         <span className="text-sm font-semibold text-gray-700">{member.name}</span>
                     </div>
                     <div className="col-span-3 text-sm font-bold text-gray-800">
                         {member.revenue}
                     </div>
                     <div className="col-span-2 flex justify-center">
                         <div className="bg-black text-white text-xs font-bold w-8 h-6 rounded-lg flex items-center justify-center">
                             {member.leads}
                         </div>
                         <span className="text-xs text-gray-400 ml-2 py-1">{member.deals}</span>
                     </div>
                     <div className="col-span-2 text-center text-sm text-gray-600 font-medium">
                         {member.kpi}
                     </div>
                     <div className="col-span-2 flex items-center justify-between pl-2">
                         <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
                             <span>{member.win}</span>
                             <span className="font-normal text-gray-400">{member.total}</span>
                         </div>
                         {/* Expand button just for the middle row as in design */}
                         {idx === 1 && (
                             <button className="w-6 h-6 bg-[#E11D48] text-white rounded-full flex items-center justify-center shadow-md -mr-2">
                                 <ChevronUp className="w-4 h-4" />
                             </button>
                         )}
                     </div>
                 </div>
             ))}
         </div>
    </div>
  );
}
