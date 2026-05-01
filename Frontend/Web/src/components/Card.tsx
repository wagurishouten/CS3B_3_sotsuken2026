export const Card = ({ children, title }: { children: React.ReactNode, title?: string }) => {
  return (
    <div className="bg-white p-6 rounded-card shadow-xl shadow-orange-50 border border-orange-50">
      {title && <h3 className="text-lg font-bold text-orange-900 mb-4">{title}</h3>}
      {children}
    </div>
  );
};