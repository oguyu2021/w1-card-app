import Footer from "./components/Footer";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

export default function Home(){
  return(
    <main className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <Header />
        <ProfileCard />
        <Footer />
      </div>
    </main>
  )
}