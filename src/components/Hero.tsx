import { ArrowRight, Sparkles } from "lucide-react";
import { waLink } from "@/lib/wa";

export function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <div className="fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <Sparkles size={12} className="text-accent" />
          <span>Premium Gaming & Culinary Studio</span>
        </div>

        <h1 className="fade-up text-balance text-5xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Crafted for{" "}
          <span className="text-gradient italic">players</span>
          <br />
          made with <span className="text-gradient italic">love</span>
        </h1>

        <p
          className="fade-up mx-auto mt-8 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ animationDelay: "0.15s" }}
        >
          dhyyanest menghadirkan dua dunia dalam satu rumah —
          jasa joki gaming premium dan puding homemade yang dibuat dengan ketelitian.
        </p>

        <div
          className="fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#services"
            className="shine group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Lihat Layanan
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={waLink("Halo dhyyanest, saya tertarik untuk memesan layanan Anda.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-all hover:border-accent hover:text-accent"
          >
            Hubungi via WhatsApp
          </a>
        </div>

        {/* Subtle divider stats */}
        <div
          className="fade-up mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-10"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            { k: "100+", v: "Pesanan Selesai" },
            { k: "2", v: "Lini Layanan" },
            { k: "24/7", v: "Respon Cepat" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="font-display text-3xl text-foreground md:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
