export function Layout({
  rightColumn,
  children,
}: {
  rightColumn?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="pb-8 -mt-24 dark:bg-gray-700">
      <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-start grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {/* Left column */}
          <div
            className={`grid grid-cols-1 gap-4 ${
              rightColumn ? "lg:col-span-2" : "lg:col-span-3"
            }`}
          >
            {children}
          </div>

          {/* Right column */}
          {rightColumn && (
            <div className="grid grid-cols-1 gap-4">{rightColumn}</div>
          )}
        </div>
      </div>
    </main>
  );
}
