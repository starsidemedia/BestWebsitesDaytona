"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
        body: JSON.stringify({ name, email, message, type: "contact" }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 bg-green-600">
        <h1 className="text-4xl font-extrabold text-center animate-pulse">
          Race to the Finish Line - Contact Us!
        </h1>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Burn Rubber to Success!</h2>
            <p className="mb-6">
              Ready to leave your competition in the dust? Fill out this form
              faster than a pit stop, and we'll turbocharge your web presence!
            </p>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name (Speed Demon)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Your Email (Faster than light)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Your Message (Make it roar!)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="inline-block mr-2" /> Launch Your Message!
              </motion.button>
              {status && (
                <p className="text-center text-yellow-400">{status}</p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 p-1 rounded-lg"
          >
            <div className="bg-black p-6 rounded-lg h-full">
              <h2 className="text-3xl font-bold mb-6">Pit Stop Info</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone className="mr-4 text-green-500" />
                  <span>(555) FAST-WEB</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-4 text-blue-500" />
                  <span>zoom@bestwebsitesdaytona.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-4 text-purple-500" />
                  <span>123 Speedway Blvd, Daytona Beach, FL</span>
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Race Hours</h3>
                <p>Monday - Friday: 9AM - 5PM</p>
                <p>Saturday: 10AM - 2PM</p>
                <p>Sunday: Closed (We're at the track!)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="mt-12 p-6 bg-green-600 text-center overflow-hidden">
        <p className="text-2xl font-bold">
          Don't let your website finish last!
        </p>
        <motion.p
          className="mt-4 text-4xl font-extrabold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Contact us now and take the checkered flag!
        </motion.p>
      </footer>
    </div>
  );
}
