import DraftSequence from "@/components/draft/DraftSequence";
import HUDFrame from "@/components/hud/HUDFrame";
import AmbientParticles from "@/components/ui/AmbientParticles";
import HeroPortrait from "@/components/sections/HeroPortrait";
import Attributes from "@/components/sections/Attributes";
import Abilities from "@/components/sections/Abilities";
import TalentTree from "@/components/sections/TalentTree";
import Inventory from "@/components/sections/Inventory";
import Stats from "@/components/sections/Stats";
import Lore from "@/components/sections/Lore";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <DraftSequence />
      <HUDFrame />
      <AmbientParticles />
      {/* Viewport frame border */}
      <div className="viewport-frame" />
      <main className="relative pt-14">
        <HeroPortrait />
        <Attributes />
        <Abilities />
        <TalentTree />
        <Inventory />
        <Stats />
        <Lore />
        <Contact />
      </main>
    </>
  );
}
