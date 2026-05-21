import { Gamepad2, Sword, Volleyball, IceCreamCone, Cookie, Sparkles, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/wa";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  message: string;
};

const gaming: Service[] = [
  {
    icon: Sword,
    title: "Mobile Legends",
    desc: "Joki rank, classic, dan winrate. Mythic, Mythical Glory hingga top tier — dikerjakan oleh player tepercaya.",
    message: "Halo dhyyanest, saya tertarik memesan jasa joki Mobile Legends.",
  },
  {
    icon: Volleyball,
    title: "Haikyu!! Fly High",
    desc: "Push event, level up tim, dan farming bahan. Konsisten, aman, dan progres cepat.",
    message: "Halo dhyyanest, saya tertarik memesan jasa joki Haikyu!! Fly High.",
  },
];

const culinary: Service[] = [
  {
    icon: IceCreamCone,
    title: "Signature Pudding",
    desc: "Puding homemade premium dengan tekstur lembut, manis seimbang, dan topping pilihan.",
    message: "Halo dhyyanest, saya tertarik untuk memesan Signature Pudding.",
  },
  {
    icon: Cookie,
    title: "Custom Order",
    desc: "Pesanan untuk acara, hampers, atau bingkisan ulang tahun. Bisa disesuaikan rasa & dekorasi.",
    message: "Halo dhyyanest, saya tertarik untuk memesan puding custom.",
  },
];

function ServiceCard({ s, accentVar }: { s: Service; accentVar: string }) {
  const Icon = s.icon;
  return (
    <div
      className="card-lift glass group relative flex flex-col gap-5 rounded-3xl p-7 shadow-elegant md:p-8"
      style={{ borderColor: "var(--glass-border)" }}
    >
      <div
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
        style={{ background: `color-mix(in oklab, ${accentVar} 20%, transparent)`, color: accentVar }}
      >
        <Icon size={22} strokeWidth={1.6} />
      </div>
      <div>
        <h3 className="text-2xl font-medium">{s.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
      </div>
      <a
        href={waLink(s.message)}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm transition-all hover:border-accent hover:bg-accent/10"
      >
        <span className="flex items-center gap-2">
          <MessageCircle size={15} />
          Pesan via WhatsApp
        </span>
        <span className="text-muted-foreground transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}

function Category({
  label,
  title,
  desc,
  icon: Icon,
  accentVar,
  services,
}: {
  label: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  accentVar: string;
  services: Service[];
}) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
          style={{
            borderColor: `color-mix(in oklab, ${accentVar} 35%, transparent)`,
            color: accentVar,
          }}
        >
          <Icon size={12} />
          {label}
        </div>
        <h3 className="mt-4 font-display text-3xl font-light md:text-4xl">{title}</h3>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">{desc}</p>
      </div>
      <div className="flex flex-col gap-5">
        {services.map((s) => (
          <ServiceCard key={s.title} s={s} accentVar={accentVar} />
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles size={12} className="text-accent" />
            Layanan Kami
          </div>
          <h2 className="mt-5 text-balance font-display text-4xl font-light md:text-5xl">
            Dua keahlian, <span className="italic text-gradient">satu dedikasi</span>.
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Pilih layanan sesuai kebutuhanmu — dari rank push hingga puding untuk acara spesial.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-10">
          <Category
            label="Gaming Services"
            title="Joki Premium"
            desc="Push rank dengan aman, cepat, dan profesional. Tepercaya untuk Mobile Legends dan Haikyu!! Fly High."
            icon={Gamepad2}
            accentVar="var(--color-gaming)"
            services={gaming}
          />
          <Category
            label="Culinary"
            title="Homemade Pudding"
            desc="Dibuat dalam batch kecil dengan bahan pilihan. Lembut, premium, dan selalu fresh."
            icon={IceCreamCone}
            accentVar="var(--color-culinary)"
            services={culinary}
          />
        </div>
      </div>
    </section>
  );
}
