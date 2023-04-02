export function MainView({ children }: { children: any }) {
  return (
    <main className=" lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8 bg-slate-200">
        <div className="min-h-screen">{children}</div>
      </div>
    </main>
  );
}
