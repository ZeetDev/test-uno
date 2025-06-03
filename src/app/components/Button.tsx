"use client"

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  mt?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  mt,
  children,
  onClick
}: ButtonProps) {
  
  const baseStyles = "rounded-full font-buttonM transition-colors duration-200";
  
  const variantStyles = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-secondary text-white hover:opacity-90",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white"
  };
  
  const sizeStyles = {
    sm: "text-buttonS px-4 py-2",
    md: "text-buttonM px-5 py-2.5",
    lg: "text-buttonL px-6 py-3"
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button 
      className={styles}
      mt={mt}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button