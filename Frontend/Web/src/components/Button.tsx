type ButtonProps = {
  label: string;
  variant?: 'main' | 'sub' | 'danger';
  onClick?: () => void;
};

export const Button = ({ label, variant = 'main', onClick }: ButtonProps) => {
  const styles = {
    main: "bg-main text-white hover:bg-main-dark shadow-orange-200",
    sub: "bg-main-light text-main border border-orange-200 hover:bg-orange-100",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-red-100",
  };

  return (
    <button 
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg ${styles[variant]}`}
    >
      {label}
    </button>
  );
};