interface SplitNumberProps {
  value: string;
  className?: string;
  decimalOpacity?: string; 
}

export default function SplitNumber({
  value,
  className = "",
  decimalOpacity = "opacity-60",
}: SplitNumberProps) {
 
  const [whole, decimal] = value.split(".");

  return (
    <span className={`${className} inline-flex items-center`}>
      {whole}
      {decimal !== undefined && (
        <span className={`${decimalOpacity} font-medium`}>.{decimal}</span>
      )}
    </span>
  );
}
