export default function MarginLines({children}: {children: React.ReactNode}) {
  return (
    <div className="relative w-full">
      {/* Fixed margin lines */}
      <div className="fixed inset-x-0 top-0 bottom-0 pointer-events-none z-10">
        <div className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full border-l border-r border-zinc-300" />
        </div>
      </div>

      {/* Content area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}