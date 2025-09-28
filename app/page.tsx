import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { Industries } from "@/components/Industries";

export default function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Services />
                <Industries />
                <Portfolio />
            </main>
            <Footer />
        </div>
    );
}
