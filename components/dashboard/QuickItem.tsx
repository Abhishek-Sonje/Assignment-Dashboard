import Avatar from "../ui/Avatar";
import { QUICK_LIST_ITEMS } from "../../lib/mock-data";

export default function QuickItem() {
  const items = QUICK_LIST_ITEMS;

  return (
    <div>
      {/* Bottom Quick items list */}
      <div className="flex items-center justify-between border-t border-gray-100 mt-6">
        <div className="flex items-center flex-1 bg-[#f0f0f0] rounded-full px-2 py-1 mx-1 gap-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-full px-2 py-0.5 min-w-0"
              style={{ width: `${item.percentage}%` }}
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                {item.avatar ? (
                  <Avatar src={item.avatar} size="sm" />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                    {item.initial}
                  </div>
                )}
                <span className="font-bold text-sm text-gray-700 truncate">
                  {item.amount}
                </span>
              </div>
              <div className="h-8 w-px bg-gray-100 mx-2 flex-shrink-0"></div>
              <div className="text-xs text-gray-400 flex-shrink-0">
                {item.percentage}%
              </div>
            </div>
          ))}
        </div>

        <button className="bg-black text-white text-sm font-medium px-4 py-2.5 mx-3 rounded-full hover:bg-gray-800 transition-colors flex-shrink-0">
          Details
        </button>
      </div>
    </div>
  );
}
