import { ShieldCheck, Clock, Heart, Zap } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Aman & Tepercaya", desc: "Privasi akun dan kualitas produk adalah prioritas utama kami." },
  { icon: Clock, title: "Respon Cepat", desc: "Pesanan dan pertanyaan direspon dengan sigap setiap hari." },
  { icon: Heart, title: "Dibuat dengan Hati", desc: "Setiap layanan dan puding dikerjakan dengan ketelitian dan cinta." },
  { icon: Zap, title: "Hasil Konsisten", desc: "Kualitas yang stabil dari pesanan pertama hingga seterusnya." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
              Tentang dhyyanest
            </div>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-5xl">
              Sebuah studio kecil dengan{" "}
              <span className="italic text-gradient">standar besar</span>.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              dhyyanest lahir dari perpaduan dua kecintaan: dunia gaming yang kompetitif
              dan kuliner rumahan yang penuh ketelitian. Kami percaya kualitas hadir dari
              perhatian pada detail — dan itulah yang kami berikan di setiap pesanan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="card-lift glass rounded-2xl p-5 shadow-elegant"
                >
                  <Icon size={20} className="text-accent" strokeWidth={1.6} />
                  <h4 className="mt-4 font-medium">{v.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
