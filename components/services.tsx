"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Globe,
  Code,
  Smartphone,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ServicesAndPricingComponent() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Web Design",
      description:
        "Stunning, responsive designs that capture Daytona's spirit and your brand's essence.",
      features: [
        "Custom, mobile-first designs",
        "User experience (UX) optimization",
        "Brand integration",
        "Responsive layouts",
        "High-performance animations",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Lightning-fast, scalable websites built with cutting-edge technologies.",
      features: [
        "Next.js and React development",
        "E-commerce solutions",
        "Content Management Systems (CMS)",
        "API integrations",
        "Performance optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform apps that put your business in your customers' pockets.",
      features: [
        "iOS and Android development",
        "React Native for cross-platform",
        "App Store optimization",
        "Push notifications",
        "Offline functionality",
      ],
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Data-driven strategies to amplify your online presence and drive results.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) advertising",
        "Social media marketing",
        "Email marketing campaigns",
        "Analytics and reporting",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,999",
      description:
        "Perfect for small businesses just starting their online journey.",
      features: [
        "Custom 5-page website",
        "Mobile-responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "1 month of support",
      ],
    },
    {
      name: "Accelerator",
      price: "$4,999",
      description:
        "Ideal for growing businesses looking to expand their online presence.",
      features: [
        "Custom 10-page website",
        "E-commerce functionality (up to 50 products)",
        "Advanced SEO package",
        "Social media integration",
        "3 months of support and maintenance",
      ],
    },
    {
      name: "Turbo",
      price: "$9,999",
      description:
        "For established businesses ready to dominate their market online.",
      features: [
        "Fully custom website with unlimited pages",
        "Advanced e-commerce (unlimited products)",
        "Custom app development (iOS or Android)",
        "Comprehensive digital marketing campaign",
        "6 months of support, maintenance, and optimization",
      ],
    },
  ];

  const faqs = [
    {
      question:
        "What makes Best Websites Daytona different from other web design companies?",
      answer:
        "We combine the speed and precision of Daytona's racing heritage with cutting-edge web technologies. Our team of local experts understands the Daytona market intimately, allowing us to create websites that truly resonate with your audience. Plus, our turnaround times are unmatched – we deliver high-quality websites faster than our competitors can change their tires!",
    },
    {
      question:
        "How long does it typically take to complete a website project?",
      answer:
        "Our project timelines vary based on the complexity of the project, but we pride ourselves on our speed. A basic website can be completed in as little as 2-3 weeks, while more complex e-commerce or custom application projects may take 6-8 weeks. We'll provide you with a detailed timeline during our initial consultation.",
    },
    {
      question:
        "Do you offer ongoing support and maintenance after the website is launched?",
      answer:
        "We offer various support and maintenance packages to keep your website running at peak performance. From regular updates and security checks to content updates and performance optimization, we've got you covered long after your site crosses the finish line.",
    },
    {
      question: "Can you help with marketing my website after it's built?",
      answer:
        "Yes, we offer comprehensive digital marketing services to help drive traffic to your new website and convert visitors into customers. Our services include SEO, PPC advertising, social media marketing, and email marketing campaigns. We'll create a custom strategy to help your business take the checkered flag in your industry.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative h-[50vh] bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Accelerate Your Online Success
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Daytona's Premier Web Services - Faster, Bolder, Better
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-500 text-white font-bold rounded-full text-lg"
              >
                Get a Free Consultation <Zap className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our High-Octane Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gradient-to-r from-red-600 to-purple-600 p-1 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gray-900 p-6 rounded-lg h-full">
                  <service.icon className="w-12 h-12 mb-4 text-yellow-400" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center"
                      >
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Pricing Plans That Fit Your Speed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gray-900 p-6 rounded-lg h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-4">{plan.price}</p>
                  <p className="mb-4 flex-grow">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center"
                      >
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold">
                    Choose {plan.name}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why We're the Fastest in the Race
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Local Expertise",
                description:
                  "We know Daytona like the back of our hand, ensuring your website resonates with the local audience.",
              },
              {
                title: "Cutting-Edge Tech",
                description:
                  "We use the latest web technologies to build lightning-fast, scalable websites and applications.",
              },
              {
                title: "Unmatched Speed",
                description:
                  "Our streamlined process allows us to deliver high-quality websites faster than the competition.",
              },
              {
                title: "Results-Driven",
                description:
                  "We focus on creating websites that not only look great but also drive real business results.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-gray-800 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <span className="font-bold">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="p-4 bg-gray-700">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Leave Your Competition in the Dust?
          </h2>
          <p className="text-xl mb-8">
            Contact us now for a free consultation and let's accelerate your
            online success!
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-500 text-white font-bold rounded-full text-lg"
          >
            Start Your Engines! <Zap className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </main>

      <footer className="mt-12 py-6 bg-gradient-to-r from-red-600 to-purple-600 text-center">
        <p className="text-2xl font-bold mb-4">
          Best Websites Daytona: Where Speed Meets Innovation
        </p>
        <p className="mb-4">
          123 Speedway Blvd, Daytona Beach, FL 32114 | (386) 123-4567 |
          info@bestwebsitesdaytona.com
        </p>
        <p>© 2024 Best Websites Daytona. All rights reserved.</p>
      </footer>
    </div>
  );
}
