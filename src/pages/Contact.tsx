import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Globe,
  ChevronDown,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#064b52] to-slate-950 pt-32 pb-20">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6, 188, 201, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 188, 201, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#06bcc9]/30 bg-[#06bcc9]/10 px-4 py-2 text-sm font-semibold text-[#7eeaf0]">
            Contact Us
          </span>

          <h1 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-[#06bcc9] to-[#7eeaf0] bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl text-slate-300">
            Have a project in mind? We'd love to hear about it. Reach out and
            let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-[#e6f9fa] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
              Get in Touch
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-slate-600">
              We're here to help and answer any questions you might have. We
              look forward to hearing from you.
            </p>

            <div className="mb-10 space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  value: "contact@highpathsolutions.com",
                  // description: "We respond within 24 hours",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  value: "+1 (555) 123-4567",
                  // description: "Mon-Fri from 8am to 6pm",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  value: "123 Tech Street, San Francisco, CA 94102",
                  // description: "Come say hello!",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  value: "Mon - Sat: 10:00 AM - 6:00 PM",
                  // description: "Weekend support available",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="rounded-xl bg-[#06bcc9] p-3">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {contact.title}
                    </h4>

                    <p className="text-slate-700">{contact.value}</p>

                    {/* <p className="text-sm text-slate-500">
                      {contact.description}
                    </p> */}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mb-4 font-semibold text-slate-900">
                Follow Us
              </h4>

              <div className="flex gap-4">
                {[
                  // {
                  //   name: "LinkedIn",
                  //   icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
                  // },
                  {
  name: "Facebook",
  icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
},
                  {
                    name: "Instagram",
                    icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z",
                  },
                  // {
                  //   name: "GitHub",
                  //   icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
                  // },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="rounded-xl bg-white p-3 shadow-lg transition-all duration-300 hover:bg-[#e6f9fa] hover:shadow-xl"
                    aria-label={social.name}
                  >
                    <svg
                      className="h-5 w-5 text-slate-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-slate-200/50 lg:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="rounded-xl bg-[#06bcc9] p-3">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Send us a message
                  </h3>

                  <p className="text-sm text-slate-500">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-900">
                      First Name *
                    </label>

                    <input
                      type="text"
                      required
                      placeholder=""
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-900">
                      Last Name *
                    </label>

                    <input
                      type="text"
                      required
                      placeholder=""
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Email *
                  </label>

                  <input
                    type="email"
                    required
                    placeholder=""
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder=""
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"
                  />
                </div>

                {/* <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"
                  />
                </div> */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Service Interested In *
                  </label>

                  <select
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-600 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="lead">Lead Generation</option>
                    <option value="social">Social Media Management</option>
                    <option value="branding">Branding</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Budget Range
                  </label>

                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-600 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]">
                    <option value="">Select budget range</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div> */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">
                    Project Details *
                  </label>

                  <textarea
                    rows={3}
                    required
                    placeholder=""
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(6, 188, 201, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#06bcc9] py-5 font-bold text-white shadow-lg transition-all hover:bg-[#0499a3]"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// const MapSection = () => {
//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-7xl px-6 py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center"
//         >
//           <h2 className="mb-4 text-3xl font-bold text-slate-900">
//             Our Locations
//           </h2>

//           <p className="text-slate-600">
//             We have offices around the world to serve you better.
//           </p>
//         </motion.div>

//         <div className="grid gap-8 md:grid-cols-3">
//           {[
//             {
//               city: "San Francisco",
//               country: "USA",
//               address: "123 Tech Street, SF, CA 94102",
//               phone: "+1 (555) 123-4567",
//             },
//             {
//               city: "London",
//               country: "UK",
//               address: "45 Innovation Lane, London, EC2A 4NE",
//               phone: "+44 20 1234 5678",
//             },
//             {
//               city: "Singapore",
//               country: "Singapore",
//               address: "78 Digital Drive, Singapore 018989",
//               phone: "+65 6123 4567",
//             },
//           ].map((location, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="rounded-2xl bg-gradient-to-br from-slate-50 to-[#e6f9fa] p-8 transition-shadow hover:shadow-xl"
//             >
//               <div className="mb-4 w-fit rounded-xl bg-[#06bcc9] p-3">
//                 <Globe className="h-6 w-6 text-white" />
//               </div>

//               <h3 className="mb-1 text-xl font-bold text-slate-900">
//                 {location.city}
//               </h3>

//               <p className="mb-3 font-medium text-[#06bcc9]">
//                 {location.country}
//               </p>

//               <p className="mb-2 text-sm text-slate-600">
//                 {location.address}
//               </p>

//               <p className="text-sm text-slate-600">
//                 {location.phone}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. A typical web application takes 2-4 months, while mobile apps may take 3-6 months. We provide detailed timelines during our proposal phase.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Absolutely! We work with businesses of all sizes, from early-stage startups to established companies. We have flexible engagement models to suit different budgets and needs.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We work with a wide range of modern technologies and platforms. Our team stays current with the latest technologies to provide scalable and effective solutions.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-15">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#e6f9fa] blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#d7f6f8] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex rounded-full bg-[#e6f9fa] px-4 py-2 text-sm font-semibold text-[#06bcc9]">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Frequently Asked

            <span className="block bg-gradient-to-r from-[#06bcc9] to-[#0499a3] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Got questions? We've got answers. Find answers to some of the most
            common questions about our services and process.
          </p>
        </motion.div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#06bcc9]/30 bg-[#e6f9fa]/60 shadow-lg shadow-[#06bcc9]/10"
                    : "border-slate-200 bg-white hover:border-[#06bcc9]/30 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7 md:py-6"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                        isOpen
                          ? "bg-[#06bcc9] text-white"
                          : "bg-[#e6f9fa] text-[#06bcc9]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className={`text-base font-semibold md:text-lg ${
                        isOpen ? "text-[#0499a3]" : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#06bcc9] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-[#06bcc9]/10 px-6 pb-6 pt-5 md:px-7 md:pl-[5.25rem]">
                        <p className="text-sm leading-7 text-slate-600 md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600">Still have questions?</p>

          <Link
            to="/contact"
            className="mt-3 inline-flex font-semibold text-[#06bcc9] transition-colors hover:text-[#0499a3]"
          >
            Talk to our team →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Contact() {
  return (
    <>
      <HeroSection />
      <ContactSection />
      {/* <MapSection /> */}
      <FAQSection />
    </>
  );
}