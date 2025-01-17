import Header from "@/components/Header";
import Contacts from "@/components/Contacts";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkHistory from "@/components/WorkHistory";
import Projects from "@/components/Projects";
import Certification from "@/components/Cerification";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";


export default function Home() {
  return (
      <>
        <main className="max-w-screen-x1 w-full mx-auto px-4">
          <div className="mt-20">
            <Header/>
            <Contacts/>
            <About/>
            <Skills/>
            <WorkHistory/>
            <Projects/>
            <Certification/>
            {/*<Reviews/>*/}
          </div>
        </main>
        <Footer/>
      </>

  );
}
