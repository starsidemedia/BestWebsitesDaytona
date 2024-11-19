"use client";

import { useState } from "react";
import {
  Zap,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, type: "newsletter" }),
      });

      if (response.ok) {
        setStatus("Subscribed successfully!");
        setEmail("");
      } else {
        setStatus("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold">
              <span className="text-yellow-400">BEST</span>
              <span className="text-red-500">DAYTONA</span>
            </h2>
            <p className="text-gray-300">
              Crafting the most aggressive websites for Daytona's finest
              businesses. Stand out. Dominate. Succeed.
            </p>
            <div className="flex space-x-4">
              <SocialIcon
                Icon={Facebook}
                href="#"
              />
              <SocialIcon
                Icon={Twitter}
                href="#"
              />
              <SocialIcon
                Icon={Instagram}
                href="#"
              />
              <SocialIcon
                Icon={Linkedin}
                href="#"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#web-design">Web Design</FooterLink>
              <FooterLink href="#seo">SEO Optimization</FooterLink>
              <FooterLink href="#e-commerce">E-commerce Solutions</FooterLink>
              <FooterLink href="#mobile-apps">
                Mobile App Development
              </FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Recent Projects</h3>
            <ul className="space-y-2">
              <FooterLink href="#project1">
                Daytona Speedway Redesign
              </FooterLink>
              <FooterLink href="#project2">Beach Street Boutique</FooterLink>
              <FooterLink href="#project3">Ocean View Restaurant</FooterLink>
              <FooterLink href="#project4">Volusia Mall Online</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-yellow-400" />
                <a
                  href="mailto:info@bestdaytona.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  info@bestdaytona.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-yellow-400" />
                <a
                  href="tel:+13861234567"
                  className="hover:text-yellow-400 transition-colors"
                >
                  (386) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-yellow-400" />
                <span>123 Beach Street, Daytona Beach, FL 32114</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-2 sm:mb-0"
                  required
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-md transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Subscribe
                </button>
              </form>
              {status && <p className="mt-2 text-yellow-400">{status}</p>}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55565.65638567503!2d-81.05340304979248!3d29.210636500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6db12a7a8c745%3A0x4c36384dc6d3d77!2sDaytona%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1652409551833!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Best Websites Daytona. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#terms"
              className="text-gray-400 hover:text-white mr-4 text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="bg-red-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white font-bold text-lg mb-4 md:mb-0">
            Ready to dominate the Daytona web scene?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            Get Your Free Consultation
            <Zap className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="hover:text-yellow-400 transition-colors flex items-center"
      >
        <ChevronRight className="mr-2 h-4 w-4 text-yellow-400" />
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ Icon, href }: { Icon: React.ElementType; href: string }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6" />
    </a>
  );
}
