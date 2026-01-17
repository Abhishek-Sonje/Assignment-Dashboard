import { Plus, Grip, Download, Share2, Calendar } from "lucide-react";
import Avatar from "@/components/ui/Avatar";

export default function TopControls() {
  return (
    <div className="flex flex-col gap-6 mb-8">
      {/* Top Row: Avatars & Page Title Controls */}
      <div className="flex items-center justify-between">
        {/* Left: Add Button & Avatars */}
        <div className="flex items-center gap-4">
          <button className="w-7 h-7 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-800 transition-colors">
            <Plus className="w-5 h-5" />
          </button>

          <div className="flex items-center -space-x-2">
            <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-100">
              <Avatar
                src="https://i.pravatar.cc/150?u=1"
                alt="Armin"
                size="sm"
                className="border-2 border-[#F3F4F6]"
              />
              <div className="px-3 py-1.5 text-xs font-medium text-gray-800   ">
                Armin A.
              </div>
            </div>
          </div>
          <div className="flex items-center -space-x-2">
            <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-100">
              <Avatar
                src="https://i.pravatar.cc/150?u=2"
                alt="Eren"
                size="sm"
                className="border-2 border-[#F3F4F6]"
              />
              <div className="px-3 py-1.5 text-xs font-medium text-gray-800   ">
                Eren Y.
              </div>
            </div>
          </div>
          <div className="flex items-center -space-x-2">
            <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-100">
              <Avatar
                src="https://i.pravatar.cc/150?u=3"
                alt="Mikasa"
                size="sm"
                className="border-2 border-[#F3F4F6]"
              />
              <div className="px-3 py-1.5 text-xs font-medium text-gray-800   ">
                Mikasa A.
              </div>
            </div>
          </div>

          <div className="border border-solid  border-gray-400   rounded-full ">
            <button className="w-6 h-6 rounded-full bg-black m-1 text-white flex items-center justify-center text-xs font-bold">
              C
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button title="index" className="w-9 h-9 bg-white rounded-full shadow-sm hover:shadow-md flex items-center justify-center text-gray-700">
            <Grip className="w-4 h-4" />
          </button>
          <button title="index" className="w-9 h-9 bg-white rounded-full shadow-sm hover:shadow-md flex items-center justify-center text-gray-700">
            <Download className="w-4 h-4" />
          </button>
          <button title="index" className="w-9 h-9 bg-white rounded-full shadow-sm hover:shadow-md flex items-center justify-center text-gray-700">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Second Row: Title & Date Filter */}
      <div className="flex items-end justify-between">
        <h1 className="text-4xl font-bold text-gray-400">New report</h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full">
            <div className="w-8 h-4 bg-black rounded-full relative cursor-pointer">
              <div className="absolute right-0.5 top-0.5 bg-white w-3 h-3 rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-gray-600">Timeframe</span>
          </div>

          <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full shadow-sm text-sm font-medium text-gray-600 cursor-pointer hover:bg-gray-50">
            <span>Sep 1 – Nov 30, 2023</span>
            <Calendar className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
