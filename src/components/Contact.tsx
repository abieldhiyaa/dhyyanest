import { Mail, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/wa";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0895-4015-88510",
    href: waLink("Halo dhyyanest, saya tertarik untuk memesan..."),
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "muhamadabiel12otkp3ukk14@gmail.com",
    href: "mailto:muhamadabiel12otkp3ukk14@gmail.com",
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@bieldhiyya",
    href: "https://instagram.com/bieldhiyya",
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <div className="glass rounded-3xl p-8 shadow-elegant md:p-14">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
              Hubungi Kami
            </div>
            <h2 className="mt-5 font-display text-4xl font-light md:text-5xl">
              Mari berbicara — <span className="italic text-gradient">kami mendengarkan</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
              Punya pertanyaan, ingin memesan, atau sekadar menyapa? Kami selalu siap.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className="card-lift group flex flex-col gap-3 rounded-2xl border border-border bg-secondary/40 p-5 transition-colors hover:border-accent"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={18} className="text-accent" strokeWidth={1.6} />
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-1 break-all text-sm text-foreground">{c.value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-display text-base text-foreground">dhyyanest</span>
        </div>
        <div>© {new Date().getFullYear()} dhyyanest. Crafted with care.</div>
      </div>
    </footer>
  );
}
