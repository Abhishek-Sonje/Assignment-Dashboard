import { clsx } from 'clsx';
import { User } from 'lucide-react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  const sizeClasses = {
    xs: 'w-5 h-5',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <div className={clsx("relative rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shrink-0", sizeClasses[size], className)}>
      {src ? (
        <img src={src} alt={alt || "Avatar"} className="w-full h-full object-cover" />
      ) : (
        <User className="text-gray-400 w-1/2 h-1/2" />
      )}
    </div>
  );
}
