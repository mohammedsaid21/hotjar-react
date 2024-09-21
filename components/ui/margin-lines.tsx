export default function MarginLines({children}: {children: React.ReactNode}) {
  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="fixed inset-x-0 top-0 bottom-0 pointer-events-none z-10">
        <div className="h-full max-w-7xl mx-auto border-l border-r border-red-900">
        </div>
      </div>
      <div className="relative z-20 px-4">
        {children}
      </div>
    </div>
  );
}