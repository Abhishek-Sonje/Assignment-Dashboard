import { Search, Bell, Mic } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-8 bg-[#f2eeed] sticky top-0 z-10">
      {/* Search Bar */}
      <div className="flex-1 max-w-lg">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-10 py-2.5 border-none rounded-full leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 shadow-sm sm:text-sm transition-all"
            placeholder='Try searching "Insights"'
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {/* Mic icon placeholder if strictly following design, or just empty */}
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 ml-4">
        {/* Toggle/Switcher */}
        <div className="flex items-center bg-white rounded-full p-1 shadow-sm">
          <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100">
            <div className="w-4 h-3 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-sm"></div>
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100">
            <div className="w-4 h-1 bg-gray-400 rounded-full"></div>
          </button>
        </div>

        {/* Add Button */}
        <button className="w-10 h-10 rounded-full bg-[#E11D48] text-white flex items-center justify-center shadow-lg hover:bg-[#be123c] transition-colors">
          <span className="text-xl font-light">+</span>
        </button>
      </div>
    </header>
  );
}
