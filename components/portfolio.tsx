"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Star, Zap, Trophy, Rocket } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PortfolioComponent() {
  const [selectedId, setSelectedId] = useState(null);

  const businesses = [
    {
      businessName: "IV Direct",
      businessUrl: "https://iv.direct/",
      description:
        "IV Direct offers personalized intravenous hydration therapies aimed at enhancing health, wellness, and recovery. Their services are tailored for various needs, including athletic performance, illness recovery, and general well-being.",
      logoUrl: "/IVDirect.webp",
      category: "Health & Wellness",
    },
    {
      businessName: "Fixed By T",
      businessUrl: "https://fixedbyt.com/",
      description:
        "Fixed By T provides a wide range of handyman services in Volusia County, specializing in home repairs, installations, and maintenance with high-quality workmanship.",
      logoUrl: "/FixedByT.webp",
      category: "Services",
    },
    {
      businessName: "Sobak Music",
      businessUrl: "https://sobakmusic.com/",
      description:
        "Sobak Music, by Anthony Sobak, blends rock music with spiritual themes, aiming to inspire through a unique musical experience that explores personal growth and spirituality.",
      logoUrl: "/Sobak.webp",
      category: "Entertainment",
    },
    {
      businessName: "Guideline Gopher",
      businessUrl: "https://guidelinegopher.com/",
      description:
        "Guideline Gopher is an AI-powered tool that simplifies mortgage guidelines for professionals and borrowers, offering quick, accurate interpretations to streamline lending processes.",
      logoUrl: "/GuidelineGopher.png",
      category: "Technology",
    },
    {
      businessName: "Sam Boyd Real Estate",
      businessUrl: "https://samboydrealestate.com/",
      description:
        "Sam Boyd Real Estate specializes in luxury properties on Florida's Space Coast, offering expert service for buyers and sellers in the high-end market.",
      logoUrl: "/SamBoyd.webp",
      category: "Real Estate",
    },
    {
      businessName: "Daybreak Concrete",
      businessUrl: "https://daybreakconcrete.com/",
      description:
        "Daybreak Concrete, Decorative Concrete Specialists, offers a wide range of concrete services, including stamped concrete, concrete overlays, and concrete countertops.",
      logoUrl: "/Daybreak.png",
      category: "Construction",
    },
    {
      businessName: "PGX University",
      businessUrl: "https://pgxuniversity.com/",
      description:
        "PGX University offers educational resources and personalized learning programs focused on pharmacogenomics, helping healthcare professionals enhance their understanding of personalized medicine.",
      logoUrl: "/PGxText.png",
      category: "Education",
    },
    {
      businessName: "Crystal Clean Blasting",
      businessUrl: "https://crystalcleanblasting.com/",
      description:
        "Crystal Clean Blasting is a multimedia blasting company based in Baltimore, offering paint removal, surface cleaning, and restoration services using eco-friendly blasting techniques.",
      logoUrl: "/CrystalClean.webp",
      category: "Services",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative h-[40vh] bg-gradient-to-r from-blue-900 via-purple-900 to-red-900">
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              Dominating the Digital Space
            </h1>
            <p className="text-xl md:text-2xl">
              Transforming Daytona Businesses into Online Powerhouses
            </p>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        >
          {businesses.map((business) => (
            <motion.div
              layoutId={`card-${business.businessName}`}
              onClick={() => setSelectedId(business.businessName)}
              key={business.businessName}
              className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-1 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-gray-900 p-4 rounded-lg h-full flex flex-col">
                <div
                  className={`h-48 relative mb-4 rounded-md overflow-hidden ${
                    [
                      "Fixed By T",
                      "Sam Boyd Real Estate",
                      "PGX University",
                      "Crystal Clean Blasting",
                    ].includes(business.businessName)
                      ? "bg-white"
                      : "bg-black"
                  }`}
                >
                  <img
                    src={business.logoUrl}
                    alt={business.businessName}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h2 className="text-xl font-bold mb-2">
                  {business.businessName}
                </h2>
                <p className="text-sm text-gray-400 mb-2">
                  {business.category}
                </p>
                <p className="text-sm text-gray-300 flex-grow">
                  {business.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-2 right-2 text-white hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
              {businesses
                .filter((business) => business.businessName === selectedId)
                .map((business) => (
                  <div key={business.businessName}>
                    <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                      <img
                        src={business.logoUrl}
                        alt={business.businessName}
                        className={`w-full h-full object-contain p-4 ${
                          [
                            "Fixed By T",
                            "Sam Boyd Real Estate",
                            "PGX University",
                            "Crystal Clean Blasting",
                          ].includes(business.businessName)
                            ? "bg-white"
                            : "bg-black"
                        }`}
                      />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">
                      {business.businessName}
                    </h2>
                    <p className="text-gray-400 mb-4">
                      Category: {business.category}
                    </p>
                    <p className="mb-4">{business.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Star className="text-yellow-400" />
                        <Star className="text-yellow-400" />
                        <Star className="text-yellow-400" />
                        <Star className="text-yellow-400" />
                        <Star className="text-yellow-400" />
                      </div>
                      <a
                        href={business.businessUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-colors duration-200"
                      >
                        Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Best Websites Daytona?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
            <p>
              Optimized for speed and performance, ensuring your site loads
              instantly!
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Results Driven</h3>
            <p>Proven track record of success with local Daytona businesses!</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Future-Proof</h3>
            <p>
              Built with cutting-edge technology that scales with your business!
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="mt-12 p-6 bg-gradient-to-r from-red-600 to-purple-600 text-center">
        <p className="text-2xl font-bold">Ready to dominate your market?</p>
        <motion.button
          className="mt-4 px-8 py-3 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-100 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Launch Your Success Story Now!
        </motion.button>
      </footer>
    </div>
  );
}
