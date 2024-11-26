"use client";

import { Activity, Rocket, Zap, Award, Search, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 1000);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <header className="py-6 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center animate-pulse">
          BEST WEBSITES DAYTONA
        </h1>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-bounce">
            YOU&apos;RE HERE BECAUSE WE&apos;RE THE BEST
          </h2>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            And that&apos;s not just talk. It&apos;s cold, hard, digital truth.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Search className="mr-2" /> SEO MASTERS
            </h3>
            <p>
              We don&apos;t just play the SEO game. We wrote the rulebook. Your
              site will climb rankings faster than a rocket on steroids.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-blue-500 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Palette className="mr-2" /> DESIGN GENIUSES
            </h3>
            <p>
              Our designs don&apos;t just turn heads. They break necks. Prepare
              for a visual feast that&apos;ll make your competitors weep.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-400 to-pink-500 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Zap className="mr-2" /> LIGHTNING FAST
            </h3>
            <p>
              Slow sites are for losers. Our websites load faster than your
              competitors can blink. Speed is our middle name.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-indigo-500 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Award className="mr-2" /> AWARD-WINNING
            </h3>
            <p>
              We&apos;ve got more awards than you&apos;ve had hot dinners. But
              we&apos;re not in it for the trophies. We&apos;re in it to make
              you #1.
            </p>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            THE PROOF IS IN THE PUDDING
          </h2>
          <div className="flex justify-center items-center space-x-4 text-4xl font-bold">
            <Activity className="animate-pulse" />
            <span>{count} SATISFIED CLIENTS</span>
            <Rocket className="animate-bounce" />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            READY TO DOMINATE THE WEB?
          </h2>
          <Button className="bg-gradient-to-r from-yellow-400 to-red-500 text-white text-xl py-3 px-8 rounded-full hover:from-red-500 hover:to-yellow-400 transform hover:scale-110 transition-all duration-300">
            LAUNCH YOUR ROCKET NOW!
          </Button>
        </section>
      </main>

      <footer className="py-6 px-4 bg-gradient-to-r from-purple-600 to-pink-600 mt-12">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Best Websites Daytona. All rights
          reserved. Prepare for digital domination.
        </p>
      </footer>

      <style
        jsx
        global
      >{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
