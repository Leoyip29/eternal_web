export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)] py-12 px-4">
      <div className="w-8 h-8 border-4 border-zinc-300 dark:border-zinc-600 border-t-black dark:border-t-white rounded-full animate-spin" />
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">Loading...</p>
    </div>
  );
}
