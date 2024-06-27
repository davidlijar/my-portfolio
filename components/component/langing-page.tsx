import Link from "next/link";

import SubNav from "./subNav";



import AboutPage from "@/app/about/page";
import MySkills from "./myskills";
import MyProjects from "./my-projects";
import ContactForm from "./contact-form";
import MainIntro from "./main-intro";

export function LandingPage() {
  
  return (
    <>
      <main className="flex flex-col gap-16 py-12 md:py-16 lg:py-24">
        <section>
          <MainIntro />
        </section>
        <section className="z-20">
          <SubNav />
        </section>
        <section>
          <MySkills />
        </section>

        <section>
          <MyProjects />
        </section>

        <section className="mt-[-50px]">
          <AboutPage />
        </section>

        <section>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
