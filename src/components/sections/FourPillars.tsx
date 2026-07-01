import { Moon, Activity, Apple, Sun } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";
import BentoImageCard from "../ui/BentoImageCard";
import AnimatedReveal from "../ui/AnimatedReveal";
import { pillars } from "../../data/content";

const icons = [Moon, Activity, Apple, Sun];

export default function FourPillars() {
  return (
    <SectionWrapper id="pillars" bg="bg-[#EEF6FF]">
      <SectionHeader
        eyebrow="Daily Energy Management"
        title="The Four Pillars of Daily Energy Management"
        description="Sustainable energy is built on four interconnected foundations. Strengthen each one, and everything else becomes easier."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <AnimatedReveal className="lg:row-span-2">
          <BentoImageCard
            image={pillars[0].image}
            title={pillars[0].title}
            description={pillars[0].desc}
            icon={<Moon size={22} />}
            large
            className="h-full min-h-[420px] lg:min-h-full"
          />
        </AnimatedReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {pillars.slice(1).map((p, i) => {
            const Icon = icons[i + 1];
            return (
              <AnimatedReveal key={p.title} delay={i * 0.1}>
                <BentoImageCard image={p.image} title={p.title} description={p.desc} icon={<Icon size={20} />} />
              </AnimatedReveal>
            );
          })}
        </div>
      </div>

      <AnimatedReveal className="mt-14 text-center">
        <p className="mx-auto max-w-2xl font-serif text-2xl italic text-[#17213A]">
          Master these four pillars and you build the foundation for lifelong well-being.
        </p>
      </AnimatedReveal>
    </SectionWrapper>
  );
}
