"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link";

export const businesses = [
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

export default function PortfolioComponent() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white sm:pt-16 pt-16">
      <header className="relative h-[40vh] bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 ">
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
                  <Image
                    src={business.logoUrl}
                    alt={business.businessName}
                    layout="fill" // This ensures the image takes up the entire container
                    objectFit="contain" // Keep aspect ratio while filling
                    className="p-4"
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
                      <Image
                        src={business.logoUrl}
                        alt={business.businessName}
                        layout="fill"
                        objectFit="contain"
                        className="p-4"
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
                      <Link
                        href={business.businessUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-colors duration-200"
                      >
                        Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
