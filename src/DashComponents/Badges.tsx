// Badge.tsx

import classNames from 'classnames';

// Define types for badge styles and variants
type BadgeStyle = 'success' | 'alert' | 'danger' | 'neutral' | 'light';
type BadgeVariant = 'solid' | 'outline' | 'semitransparent';

interface BadgeProps {
  style: BadgeStyle;
  variant: BadgeVariant;
  children: React.ReactNode;
}

const Badges: React.FC<BadgeProps> = ({ style, variant, children }) => {
  const baseClasses = 'px-3 py-1 rounded text-sm font-medium';
  
// Define style mappings
const styleClasses = {
  success: 'text-white bg-green-500 rounded-lg ring-1 ring-inset ring-yellow-600/20',
  alert: 'text-white bg-amber-500 rounded-lg',
  danger: 'text-white bg-red-600 rounded-lg',
  neutral: 'text-white bg-neutral-300 rounded-lg',
  light: 'text-gray-600 bg-gray-100 rounded-lg',
};

// Define variant mappings with updated text colors for contrast
const variantClasses = {
  solid: '',
  outline: 'border border-current bg-opacity-50 text-current', // Ensure text color contrasts with the border
  semitransparent: 'bg-opacity-80 text-current', // Adjust text color for better contrast
};


  // Combine classes based on props
  const badgeClasses = classNames(
    baseClasses,
    styleClasses[style],
    variantClasses[variant]
  );

  return <span className={badgeClasses}>{children}</span>;
};

export default Badges;
