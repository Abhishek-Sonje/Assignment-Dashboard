import React from "react";
import { Dribbble, ChevronDown } from "lucide-react";
import Avatar from "@/components/ui/Avatar";

const PlatformValueCard = () => {
  // CSS for the diagonal striped bars
  const stripedStyle = {
    backgroundImage: `repeating-linear-gradient(
      45deg,
      #e5e7eb,
      #e5e7eb 2px,
      #ffffff 2px,
      #ffffff 8px
    )`,
  };

  const users = [
    { id: 1, img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Armin" },
    { id: 2, img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mikasa" },
    { id: 3, img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eren" },
  ];

  return (
    <div className="bg-[#f9f9f9] rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 w-full max-w-2xl">
      {/* HEADER SECTION - Gray Background */}
      <div className="bg-[#f3f3f3] p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <Dribbble size={20} className="text-[#ea4c89]" />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight leading-none">
              Platform value
            </p>
            <div className="flex items-center gap-1">
              <span className="font-bold text-gray-800">Dribbble</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Toggle Options */}
        <div className="flex bg-gray-200/50 rounded-full p-1">
          <button className="px-4 py-1.5 bg-black text-white text-xs font-bold rounded-full shadow-sm">
            Revenue
          </button>
          <button className="px-4 py-1.5 text-gray-500 text-xs font-bold rounded-full hover:text-gray-700">
            Leads
          </button>
          <button className="px-4 py-1.5 text-gray-500 text-xs font-bold rounded-full hover:text-gray-700">
            W/L
          </button>
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <div className="flex h-64">
        {/* LEFT SIDE - Red Summary Panel (Top-Right Rounded) */}
        <div className="w-1/3 bg-[#e11d48] p-6 text-white flex flex-col justify-between rounded-tr-[2.5rem] relative">
          {/* Vertical Label */}
          <div className="absolute left-4 bottom-19 origin-bottom-left -rotate-90 text-white/30 text-[9px] font-bold uppercase tracking-widest whitespace-nowrap">
            Average monthly
          </div>

          <div className="ml-6 space-y-5">
            <div>
              <p className="text-white/60 text-[10px] font-bold uppercase">
                Revenue
              </p>
              <p className="text-xl font-bold">$18,552</p>
            </div>
            <div>
              <p className="text-white/60 text-[10px] font-bold uppercase">
                Leads
              </p>
              <p className="text-xl font-bold">
                373{" "}
                <span className="text-xs font-medium text-white/50">
                  97/276
                </span>
              </p>
            </div>
            <div>
              <p className="text-white/60 text-[10px] font-bold uppercase">
                Win/lose
              </p>
              <p className="text-xl font-bold">
                16%{" "}
                <span className="text-xs font-medium text-white/50">
                  51/318
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - The Graph Area */}
        <div className="flex-1 p-6 relative flex flex-col">
          {/* Grid Lines and Y-Axis Labels */}
          <div className="absolute inset-x-6 inset-y-8 flex flex-col justify-between pointer-events-none">
            {["$14,500", "$11,000", "$7,500", "$4,000"].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <div className="flex-1 border-t border-gray-200/60"></div>
                <span className="text-[9px] font-bold text-gray-300">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Monthly Bars */}
          <div className="flex-1 flex justify-around items-end z-10 pb-2 px-2">
            {/* September Group */}
            <BarGroup
              month="Sep"
              users={users}
              heights={[45, 65, 30]}
              tooltip="$6,901"
              stripedStyle={stripedStyle}
            />

            {/* October Group */}
            <BarGroup
              month="Oct"
              users={users}
              heights={[85, 55, 40]}
              tooltip="$11,035"
              stripedStyle={stripedStyle}
            />

            {/* November Group */}
            <BarGroup
              month="Nov"
              users={users}
              heights={[75, 50, 45]}
              tooltip="$9,288"
              stripedStyle={stripedStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal component for the bar groupings
interface BarGroupProps {
  month: string;
  users: Array<{ id: number; img: string }>;
  heights: number[];
  tooltip: string;
  stripedStyle: React.CSSProperties;
}

const BarGroup = ({
  month,
  users,
  heights,
  tooltip,
  stripedStyle,
}: BarGroupProps) => (
  <div className="flex flex-col items-center">
    <div className="flex items-end gap-1.5 h-32 relative">
      {/* Red Price Tooltip */}
      <div className="absolute -top-7 left-0 z-20">
        <div className="bg-[#e11d48] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm relative whitespace-nowrap">
          {tooltip}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-4 border-t-[#e11d48]"></div>
        </div>
      </div>

      {/* Grouped Bars */}
      {users.map((user: { id: number; img: string }, idx: number) => (
        <div key={user.id} className="flex flex-col items-center gap-1">
          <div
            className="w-4 rounded-md border border-transparent transition-all hover:scale-105"
            style={{
              height: `${heights[idx]}px`,
              backgroundColor: idx === 0 ? "transparent" : "#d1d5db",
              ...(idx === 0 ? stripedStyle : {}),
              border: idx === 0 ? "1px solid #e5e7eb" : "none",
            }}
          />
          <Avatar src={`https://i.pravatar.cc/150?u=${idx + 10}`} size="sm" />
        </div>
      ))}
    </div>
    <span className="mt-2 text-[10px] font-bold text-gray-300 uppercase tracking-tighter">
      {month}
    </span>
  </div>
);

export default PlatformValueCard;
