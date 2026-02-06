import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <pre className="text-terminal-green-dim text-xs leading-tight mb-6">
{`
  ██████╗ ██╗   ██╗██╗      █████╗ ███╗   ██╗
  ██╔══██╗╚██╗ ██╔╝██║     ██╔══██╗████╗  ██║
  ██║  ██║ ╚████╔╝ ██║     ███████║██╔██╗ ██║
  ██║  ██║  ╚██╔╝  ██║     ██╔══██║██║╚██╗██║
  ██████╔╝   ██║   ███████╗██║  ██║██║ ╚████║
  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝
`}
        </pre>

        <div className="space-y-2 text-sm">
          <p>
            <span className="text-terminal-green-dim">$</span> cat /etc/motd
          </p>
          <p className="text-terminal-green-bright">
            Welcome to dylan.dev — Developer Portfolio v1.0.0
          </p>
          <p className="text-terminal-green-dim">
            Last login: {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="space-y-2 text-sm">
        <p>
          <span className="text-terminal-green-dim">$</span> whoami
        </p>
        <p>
          Full-stack developer who builds things for the web.
        </p>
      </section>

      <section className="space-y-2 text-sm">
        <p>
          <span className="text-terminal-green-dim">$</span> ls ./
        </p>
        <div className="flex gap-8">
          <Link href="/blog" className="text-terminal-amber hover:underline">
            blog/
          </Link>
          <Link href="/projects" className="text-terminal-amber hover:underline">
            projects/
          </Link>
        </div>
      </section>

      <section className="text-sm">
        <p>
          <span className="text-terminal-green-dim">$</span> echo $STATUS
        </p>
        <p className="mt-1">
          System Ready...<span className="animate-blink">█</span>
        </p>
      </section>
    </div>
  );
}
