import Header from "@/components/Header";
import Contacts from "@/components/Contacts";


export default function Home() {
  return (
    <main className="max-w-screen-x1 w-full mx-auto px-4">
      <div className="mt-20">
        <Header />
          <Contacts />
      </div>
    </main>
  );
}
