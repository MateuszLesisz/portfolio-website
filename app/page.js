import Header from "@/components/Header";
import Contacts from "@/components/Contacts";
import About from "@/components/About";
import Skills from "@/components/skills";
import WorkHistory from "@/components/WorkHistory";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="max-w-screen-x1 w-full mx-auto px-4">
      <div className="mt-20">
        <Header />
          <Contacts />
          <About />
          <Skills />
          <WorkHistory />
          <Projects />
      </div>
    </main>
  );
}
