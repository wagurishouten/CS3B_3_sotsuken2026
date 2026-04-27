type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

export const Input = ({ label, type = 'text', placeholder }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-bold text-orange-900 ml-1">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className="px-4 py-3 rounded-xl border-2 border-orange-100 focus:border-main focus:outline-none bg-white transition-colors"
      />
    </div>
  );
};