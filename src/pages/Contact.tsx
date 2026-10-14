

import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

import type { ChangeEvent, FormEvent } from "react";



import {

  Mail,

  Phone,

  Clock,

  MessageSquare,

  Send,

  ChevronDown,

} from "lucide-react";



import {

  FaFacebookF,

  FaInstagram,

  FaLinkedinIn,

  FaXTwitter,

  FaYoutube,

} from "react-icons/fa6";



/* =========================================================

   HERO SECTION

========================================================= */



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



/* =========================================================

   CONTACT SECTION

========================================================= */



const ContactSection = () => {

  const [formData, setFormData] = useState({

    firstName: "",

    lastName: "",

    email: "",

    phone: "",

    service: "",

    message: "",

  });



  const [isSending, setIsSending] = useState(false);



  const [status, setStatus] = useState<{

    type: "success" | "error";

    message: string;

  } | null>(null);



  const socialLinks = [

    {

      name: "Facebook",

      icon: FaFacebookF,

      url: "#",

    },

    {

      name: "Instagram",

      icon: FaInstagram,

      url: "#",

    },

    {

      name: "LinkedIn",

      icon: FaLinkedinIn,

      url: "#",

    },

    {

      name: "X",

      icon: FaXTwitter,

      url: "#",

    },

    {

      name: "YouTube",

      icon: FaYoutube,

      url: "#",

    },

  ];



  const handleInputChange = (

    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

  ) => {

    const { name, value } = e.target;



    setFormData((prev) => ({

      ...prev,

      [name]: value,

    }));

  };



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();



    if (isSending) return;



    setIsSending(true);

    setStatus(null);



    try {

      const apiUrl =

        import.meta.env.VITE_API_URL || "http://localhost:5000";



      const response = await fetch(`${apiUrl}/api/send-email`, {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          name: `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim(),

          email: formData.email.trim(),

          phone: formData.phone.trim(),

          message: `Service Interested In: ${formData.service}



Project Details:

${formData.message.trim()}`,

        }),

      });



      const result = await response.json();



      if (!response.ok || !result.success) {

        throw new Error(

          result.message || "Unable to send your message. Please try again."

        );

      }



      setFormData({

        firstName: "",

        lastName: "",

        email: "",

        phone: "",

        service: "",

        message: "",

      });



      setStatus({

        type: "success",

        message: "Thank you! Your message has been sent successfully.",

      });



      window.setTimeout(() => {

        setStatus(null);

      }, 4000);

    } catch (error) {

      setStatus({

        type: "error",

        message:

          error instanceof Error

            ? error.message

            : "Something went wrong. Please try again.",

      });

    } finally {

      setIsSending(false);

    }

  };



  return (

    <section className="bg-gradient-to-br from-slate-50 to-[#e6f9fa] py-15">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-20 lg:grid-cols-2">

          {/* CONTACT INFO */}



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



            {/* CONTACT DETAILS */}



            <div className="mb-10 space-y-6">

              {[

                {

                  icon: Mail,

                  title: "Email Us",

                  value: "info@highpathsolutions.com",

                },

                {

                  icon: Phone,

                  title: "Call Us",

                  value: "(+1)5713531736",

                },

                {

                  icon: Clock,

                  title: "Working Hours",

                  value: "Mon - Sat: 10:00 AM - 6:00 PM",

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

                  </div>

                </motion.div>

              ))}

            </div>



            {/* SOCIAL LINKS */}



            <div>

              <h4 className="mb-4 font-semibold text-slate-900">

                Follow Us

              </h4>



              <div className="flex flex-wrap gap-4">

                {socialLinks.map((social) => {

                  const Icon = social.icon;



                  return (

                    <motion.a

                      key={social.name}

                      href={social.url}

                      target="_blank"

                      rel="noopener noreferrer"

                      whileHover={{

                        scale: 1.1,

                        y: -3,

                      }}

                      whileTap={{

                        scale: 0.95,

                      }}

                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-700 shadow-lg transition-all duration-300 hover:bg-[#e6f9fa] hover:text-[#06bcc9] hover:shadow-xl"

                      aria-label={social.name}

                      title={social.name}

                    >

                      <Icon className="h-5 w-5" />

                    </motion.a>

                  );

                })}

              </div>

            </div>

          </motion.div>



          {/* CONTACT FORM */}



          <motion.div

            initial={{ opacity: 0, x: 50 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

          >

            <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-slate-200/50 lg:p-10">

              {/* FORM HEADER */}



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



              {/* FORM */}



              <form className="space-y-6" onSubmit={handleSubmit}>

                {/* FIRST NAME + LAST NAME */}



                <div className="grid gap-6 md:grid-cols-2">

                  <div>

                    <label

                      htmlFor="contact-first-name"

                      className="mb-2 block text-sm font-semibold text-slate-900"

                    >

                      First Name *

                    </label>



                    <input

                      id="contact-first-name"

                      type="text"

                      name="firstName"

                      value={formData.firstName}

                      onChange={handleInputChange}

                      autoComplete="given-name"

                      required

                      placeholder=""

                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"

                    />

                  </div>



                  <div>

                    <label

                      htmlFor="contact-last-name"

                      className="mb-2 block text-sm font-semibold text-slate-900"

                    >

                      Last Name *

                    </label>



                    <input

                      id="contact-last-name"

                      type="text"

                      name="lastName"

                      value={formData.lastName}

                      onChange={handleInputChange}

                      autoComplete="family-name"

                      required

                      placeholder=""

                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"

                    />

                  </div>

                </div>



                {/* EMAIL */}



                <div>

                  <label

                    htmlFor="contact-email"

                    className="mb-2 block text-sm font-semibold text-slate-900"

                  >

                    Email *

                  </label>



                  <input

                    id="contact-email"

                    type="email"

                    name="email"

                    value={formData.email}

                    onChange={handleInputChange}

                    autoComplete="email"

                    required

                    placeholder=""

                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"

                  />

                </div>



                {/* PHONE */}



                <div>

                  <label

                    htmlFor="contact-phone"

                    className="mb-2 block text-sm font-semibold text-slate-900"

                  >

                    Phone

                  </label>



                  <input

                    id="contact-phone"

                    type="tel"

                    name="phone"

                    value={formData.phone}

                    onChange={handleInputChange}

                    autoComplete="tel"

                    placeholder=""

                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"

                  />

                </div>



                {/* SERVICE */}



                <div>

                  <label

                    htmlFor="contact-service"

                    className="mb-2 block text-sm font-semibold text-slate-900"

                  >

                    Service Interested In *

                  </label>



                  <select

                    id="contact-service"

                    name="service"

                    value={formData.service}

                    onChange={handleInputChange}

                    required

                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-600 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"

                  >

                    <option value="">Select a service</option>

                    <option value="Web Development">

                      Web Development

                    </option>

                    <option value="App Development">

                      App Development

                    </option>

                    <option value="Lead Generation">

                      Lead Generation

                    </option>

                    <option value="Social Media Management">

                      Social Media Management

                    </option>

                    <option value="Branding">Branding</option>

                    <option value="Search Engine Optimization">

                      Search Engine Optimization

                    </option>

                  </select>

                </div>



                {/* PROJECT DETAILS */}



                <div>

                  <label

                    htmlFor="contact-message"

                    className="mb-2 block text-sm font-semibold text-slate-900"

                  >

                    Project Details *

                  </label>



                  <textarea

                    id="contact-message"

                    name="message"

                    value={formData.message}

                    onChange={handleInputChange}

                    rows={3}

                    required

                    placeholder=""

                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06bcc9]"

                  />

                </div>



                {/* SUCCESS / ERROR MESSAGE */}



                {status && (

                  <div

                    role="status"

                    aria-live="polite"

                    className={`rounded-xl border p-4 text-sm font-medium ${

                      status.type === "success"

                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"

                        : "border-red-200 bg-red-50 text-red-700"

                    }`}

                  >

                    {status.message}

                  </div>

                )}



                {/* SUBMIT */}



                <motion.button

                  type="submit"

                  disabled={isSending}

                  whileHover={

                    !isSending

                      ? {

                          scale: 1.02,

                          boxShadow: "0 20px 40px rgba(6, 188, 201, 0.3)",

                        }

                      : undefined

                  }

                  whileTap={!isSending ? { scale: 0.98 } : undefined}

                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#06bcc9] py-5 font-bold text-white shadow-lg transition-all hover:bg-[#0499a3] disabled:cursor-not-allowed disabled:opacity-70"

                >

                  <Send className="h-5 w-5" />

                  {isSending ? "Sending..." : "Send Message"}

                </motion.button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );

};



/* =========================================================

   FAQ SECTION

========================================================= */



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

        {/* HEADING */}



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

                  aria-expanded={isOpen}

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



        {/* BOTTOM CTA */}



        <div className="mt-12 text-center">

          <p className="text-slate-600">Still have questions?</p>



          <a
            href={`https://wa.me/15713531736?text=${encodeURIComponent(
              "Hello, I would like to know more about HighPath Solutions services."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex font-semibold text-[#06bcc9] transition-colors hover:text-[#0499a3]"
          >
            Talk to our team →
          </a>

        </div>

      </div>

    </section>

  );

};



/* =========================================================

   CONTACT PAGE

========================================================= */



export default function Contact() {

  return (

    <>

      <HeroSection />

      <ContactSection />

      <FAQSection />

    </>

  );

}
