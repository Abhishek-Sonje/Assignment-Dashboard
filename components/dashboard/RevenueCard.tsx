import { REVENUE_STATS } from "@/lib/mock-data";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Avatar from "@/components/ui/Avatar";
import { ChevronRight } from "lucide-react";
import SplitNumber from "../ui/SplitValue";

export default function RevenueCard() {
  //   const amountStr = String(REVENUE_STATS.amount);
  const [whole, decimal] = REVENUE_STATS.amount.split(".");
  console.log(whole, decimal);
  return (
    <div className="col-span-12 xl:col-span-8 relative group">
      <div className="flex justify-between items-start ">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-1">Revenue</h3>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
              <SplitNumber
                value={REVENUE_STATS.total}
                decimalOpacity="text-gray-400"
              />
            </span>
            <div className="flex items-center gap-2">
              <span className="bg-[#E11D48] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-0.5" />{" "}
                {REVENUE_STATS.change}
              </span>
              <span className="bg-[#E11D48] text-white text-xs font-bold px-2 py-1 rounded-full">
                <SplitNumber
                  value={REVENUE_STATS.amount}
                  decimalOpacity="text-gray-400"
                />
              </span>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-2 font-bold">
            {REVENUE_STATS.comparison}{" "}
            <span className="text-gray-300 mx-1">•</span> {REVENUE_STATS.period}
          </p>
        </div>

        {/* Small Cards embedded in big card */}
        <div className="flex gap-4">
          {/* Top Sales */}
          <div className="bg-gray-50 hover:scale-[1.02]  rounded-2xl p-4 w-40 flex flex-col justify-between shadow shadow-gray-400 h-full transition-colors cursor-pointer">
            <div>
              <div className="text-xs text-gray-500 font-medium mb-1">
                Top sales
              </div>
              <div className="text-xl font-bold text-gray-900">72</div>
            </div>
            <div className="flex items-center justify-between mt-1.5">
              <div className="flex items-center gap-2">
                <Avatar
                  src="https://i.pravatar.cc/150?u=3"
                  size="xs"
                  className="w-5 h-5"
                />
                <span className="text-xs font-medium text-gray-700">
                  Mikasa
                </span>
              </div>
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </div>
          </div>

          {/* Best Deal */}
          <div className="bg-black text-white rounded-2xl p-4 w-40 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">
            <div>
              <div className="flex justify-between items-start">
                <div className="text-xs text-gray-400 font-medium mb-1">
                  Best deal
                </div>
                <div className="text-gray-500">★</div>
              </div>
              <div className="text-xl font-bold">$42,300</div>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs font-medium text-gray-300">
                Rolf Inc.
              </span>
              <div className="bg-white rounded-md p-1">
                <ChevronRight className="w-3 h-3 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quick items list */}
      {/* <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
              <Avatar src="https://i.pravatar.cc/150?u=5" size="sm" />
              <span className="font-bold text-sm text-gray-700">$209,633</span>
          </div>
           <div className="h-8 w-px bg-gray-100"></div>
           <div className="text-xs text-gray-400">39.63%</div>
           
           <div className="flex items-center gap-2">
              <Avatar src="https://i.pravatar.cc/150?u=2" size="sm" />
              <span className="font-bold text-sm text-gray-700">$156,841</span>
          </div>
           <div className="h-8 w-px bg-gray-100"></div>
           <div className="text-xs text-gray-400">29.65%</div>

           <div className="flex items-center gap-2">
              <Avatar src="https://i.pravatar.cc/150?u=1" size="sm" />
              <span className="font-bold text-sm text-gray-700">$117,115</span>
          </div>
           <div className="h-8 w-px bg-gray-100"></div>
           <div className="text-xs text-gray-400">22.14%</div>

           <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">C</div>
              <span className="font-bold text-sm text-gray-700">$45,386</span>
          </div>
           <div className="text-xs text-gray-400">8.58%</div>
           
           <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
               Details
           </button>
       </div> */}
    </div>
  );
}
