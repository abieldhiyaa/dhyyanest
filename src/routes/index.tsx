import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact, Footer } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "dhyyanest — Gaming Services & Homemade Pudding" },
      {
        name: "description",
        content:
          "dhyyanest menghadirkan jasa joki premium Mobile Legends & Haikyu!! Fly High, serta puding homemade yang lezat. Premium, aman, dan dibuat dengan hati.",
      },
      { property: "og:title", content: "dhyyanest — Gaming & Culinary Studio" },
      {
        property: "og:description",
        content: "Premium gaming services dan homemade pudding dari dhyyanest.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
