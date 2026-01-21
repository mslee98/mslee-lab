export function MobileDevWrapper({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      {children}
    </div>
  );
}
