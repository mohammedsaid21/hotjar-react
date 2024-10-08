export default function MarginLines({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex w-full grow flex-col">
      {/* Fixed margin lines */}
      <div className="pointer-events-none fixed inset-0 z-10">
        <div className="loomli-max-screen mx-auto size-full px-4 sm:px-6 lg:px-8">
          <div className="h-full border-x border-zinc-200" />
        </div>
      </div>

      {/* Content area */}
      <div className="loomli-max-screen relative z-20 flex grow flex-col px-4 sm:px-8 lg:px-10">
        {children}
      </div>
    </div>
  );
}
