interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
}

export function TerminalWindow({ title = "bash", children }: TerminalWindowProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-bg-card hover:bg-bg-card-hover hover:border-border-hover transition-all duration-300 card-glow">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-bg-secondary border-b border-border">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs text-text-muted ml-2">{title}</span>
      </div>
      {/* Content */}
      <div className="p-4">{children}</div>
    </div>
  );
}
