export default function MarginLines({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full">
      {/* Fixed margin lines */}
      <div className="pointer-events-none fixed inset-0 z-10">
        <div className="mx-auto size-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-full border-x border-zinc-300" />
        </div>
      </div>

      {/* Content area */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
