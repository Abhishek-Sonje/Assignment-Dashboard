import React from "react";
import {
  BarChart3,
  ChevronDown,
  SlidersHorizontal,
  Dribbble,
  Instagram,
  ShoppingBag,
} from "lucide-react";

const ReferrerChartCard = () => {
  // Custom CSS for the striped pattern seen in the Behance and Shopping bars
  const stripedStyle = {
    backgroundImage: `repeating-linear-gradient(
      45deg,
      #f3f4f6,
      #f3f4f6 2px,
      #ffffff 2px,
      #ffffff 8px
    )`,
  };

  return (
    <div className="w-80 bg-[#f0f0f0] rounded-[32px] p-4 font-sans shadow-sm">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center text-gray-600">
          <BarChart3 size={20} strokeWidth={2.5} />
          <ChevronDown size={16} className="ml-0.5" />
        </div>
        <button className="flex items-center gap-2 text-sm  text-gray-800  px-3 py-1.5 rounded-xl border border-gray-300 hover:bg-gray-100">
          Filters
          <SlidersHorizontal size={14} className="text-gray-400" />
        </button>
      </div>

      {/* Chart Area */}
      <div className="flex items-end justify-between h-40 gap-2 mb-6">
        {/* Behance Bar */}
        <div className="relative w-full h-[65%] bg-white rounded-2xl flex flex-col items-center overflow-hidden">
          <div className="w-full h-1/2" style={stripedStyle}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#0057ff] font-bold text-lg">Bē</span>
          </div>
        </div>

        {/* Dribbble Bar */}
        <div className="w-full h-[95%] bg-white rounded-2xl flex items-start justify-center pt-4">
          <Dribbble className="text-[#ea4c89]" size={22} />
        </div>

        {/* Google Bar */}
        <div className="w-full h-[55%] bg-white rounded-2xl flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </div>

        {/* Instagram Bar */}
        <div className="w-full h-[40%] bg-white rounded-2xl flex items-center justify-center">
          <Instagram className="text-[#e4405f]" size={20} />
        </div>

        {/* Shopping/Generic Bar */}
        <div className="relative w-full h-[80%] bg-white rounded-2xl flex flex-col items-center overflow-hidden">
          <div className="w-full h-full" style={stripedStyle}></div>
          <div className="absolute top-4 flex items-center justify-center bg-white rounded-lg p-1 shadow-sm">
            <ShoppingBag className="text-gray-800" size={18} />
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div>
        <p className="text-gray-400 font-medium text-[15px]">Deals amount</p>
        <div className="flex items-center gap-1 cursor-pointer group">
          <span className="font-bold text-gray-800 text-lg">
            by referrer category
          </span>
          <ChevronDown
            size={18}
            className="text-gray-800 mt-1 group-hover:translate-y-0.5 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default ReferrerChartCard;
