"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Parallax } from "react-parallax";
import {
  ChevronDown,
  Zap,
  Globe,
  Code,
  Smartphone,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LandingPageComponent() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1 - scrollY / 500 });
  }, [scrollY, controls]);

  const services = [
    {
      icon: Globe,
      title: "Web Design",
      description: "Designs that'll leave your competitors in the dust!",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Code that performs like a Daytona 500 winner!",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Apps smoother than Daytona Beach at sunrise!",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategies that roar louder than Daytona's engines!",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Parallax
        bgImage="/car.jpg"
        strength={500}
        bgImageStyle={{
          objectFit: "fit",
          width: "100%",
          height: "100%",
        }}
        className="w-full h-[80vh] md:h-screen"
      >
        <header className="h-screen flex items-center justify-center relative bg-black bg-opacity-40">
          <div className="text-center z-10 ">
            <Image
              src="/logos/logo_resize.svg"
              width={900}
              height={900}
              alt="Best Websites Daytona"
              dangerouslyallowsvg
            />
            {/* <motion.h1
              className="stroke-text text-6xl md:text-8xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 py-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Best Websites Daytona
            </motion.h1> */}
            <motion.p
              className=" text-2xl md:text-3xl mb-8 py-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Turbocharging Daytona&#39;s Digital Presence
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Rev Up Your Website
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={controls}
          >
            <ChevronDown className="w-12 h-12 animate-bounce" />
          </motion.div>
        </header>
      </Parallax>
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our High-Octane Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-800 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <service.icon className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Choose Best Websites Daytona?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gradient-to-r from-red-500 to-yellow-500 p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-16 h-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
              <p>
                Our websites load faster than a Daytona 500 winner crosses the
                finish line!
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-r from-yellow-500 to-green-500 p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="w-16 h-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">Local Expertise</h3>
              <p>
                We know Daytona better than the back of our pit crew&#39;s
                hands!
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-16 h-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">Cutting-Edge Tech</h3>
              <p>
                We use tech more advanced than the latest NASCAR innovations!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Take the Checkered Flag in Daytona&#39;s Digital Race?
          </h2>
          <p className="text-xl mb-12">
            Don&#39;t let your competitors leave you in the digital dust.
            It&#39;s time to take pole position in Daytona&#39;s online world!
          </p>
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              See What We Offer!
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Best Websites Daytona</h2>
              <p>Accelerating Daytona&#39;s Digital Dreams</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
              <p>Servicing Central Florida Commercial Businesses</p>
              <Link href="mailto:contact@bestwebsitesdaytona.com">
                <p>contact@bestwebsitesdaytona.com</p>
              </Link>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <p>&copy; 2023 Best Websites Daytona. All rights reserved.</p>
              <Link href="https://www.starside.media/">
                <p>Powered by Starside Media</p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
