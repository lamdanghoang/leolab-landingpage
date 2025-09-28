import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Industries } from "@/components/Industries";
import { ExecutionProcess } from "@/components/ExecutionProcess";

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
