import { ActiveSectionProvider } from "@/components/layout/ActiveSectionProvider";
import { Sidebar } from "@/components/layout/Sidebar";
import { RightNav } from "@/components/layout/RightNav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ChatButton } from "@/components/layout/ChatButton";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Technologies } from "@/components/sections/Technologies";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <ActiveSectionProvider>
      <MobileMenu />

      <div className="mx-auto flex w-full max-w-[1440px]">
        <Sidebar />

        <main id="main-content" className="min-w-0 flex-1 pt-20 lg:pt-0">
          <Container className="max-w-5xl">
            <Hero />
            <Clients />
            <About />
            <Experience />
            <Projects />
            <Services />
            <Process />
            <Technologies />
            <Testimonials />
          </Container>
        </main>

        <RightNav />
      </div>

      <ChatButton />
    </ActiveSectionProvider>
  );
}
