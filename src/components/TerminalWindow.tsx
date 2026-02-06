interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
}

export function TerminalWindow({ title = "bash", children }: TerminalWindowProps) {
  return (
    <div className="border border-terminal-gray rounded-md overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-terminal-gray/50 border-b border-terminal-gray">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-terminal-green-dim ml-2">{title}</span>
      </div>
      {/* Content */}
      <div className="p-4">{children}</div>
    </div>
  );
}
