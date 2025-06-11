export default function StatusTerminal() {
  return (
    <div className="mt-6 bg-gray-900 border border-green-500 rounded p-2 flex justify-between items-center text-sm">
      <div className="flex items-center gap-4">
        <span className="text-green-400">Status: [ONLINE]</span>
        <span className="text-green-400">Uptime: 24/7</span>
        <span className="text-green-400">Security: [MAXIMUM]</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-green-400">System Ready</span>
      </div>
    </div>
  )
}
