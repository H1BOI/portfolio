import { Github, Linkedin, Mail } from "lucide-react"

const links = [
  {
    label: "GitHub",
    href: "https://github.com/H1BOI",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hiboi/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:Chun457596692@gmail.com",
    icon: Mail,
    external: false,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-3 text-foreground">Get in touch</h2>
        <p className="text-muted-foreground mb-16 max-w-sm mx-auto text-sm leading-relaxed">
          Open to new opportunities, collaborations, or just a good conversation.
        </p>
        <div className="flex gap-10 justify-center">
          {links.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-3 text-muted-foreground hover:text-purple-400 transition-colors group"
            >
              <div className="p-4 rounded-xl border border-border group-hover:border-purple-500/40 transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm">{label}</span>
            </a>
          ))}
        </div>
        <p className="mt-20 text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Chun Lin
        </p>
      </div>
    </section>
  )
}
