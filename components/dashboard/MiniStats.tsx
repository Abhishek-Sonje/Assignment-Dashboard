import { TrendingUp, TrendingDown, ArrowRight, ChevronUp, ChevronDown } from "lucide-react";

interface MiniCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  subValue?: string;
  active?: boolean;
}

function MiniCard({
  label,
  value,
  change,
  trend,
  subValue,
  active,
}: MiniCardProps) {
  return (
    <div
      className={`rounded-2xl py-2 mx-2 shadow shadow-gray-400 flex flex-col justify-center items-center min-h-[100px] border transition-all ${
        active
          ? "bg-white border-pink-50 shadow-md ring-1 ring-pink-600"
          : "bg-white border-transparent hover:border-gray-100"
      }`}
    >
      <div className="flex justify-center items-start">
        <span className="text-md font-semibold text-gray-800">{label}</span>
      </div>

      <div className="mt-2 w-full flex flex-col justify-center items-center">
        <div
          className={`text-sm font-medium ${
            active
              ? "bg-[#E11D48] text-white rounded-4xl px-2 "
              : "bg-gray-300 text-white rounded-4xl px-2"
          }`}
        >
          {value}
        </div>
        <div className="flex items-center gap-1 mt-1">
          <span
            className={`font-bold flex justify-center items-center gap-1 py-0.5 rounded ${
              active
                ? " text-md"
                : " text-sm"
            }`}
          >
            {trend === "up" ? <ChevronUp /> : <ChevronDown/>} {change}
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
