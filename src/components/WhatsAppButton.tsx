
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  // WhatsApp number: country code + number, without +, spaces or brackets.
  const phoneNumber = "15713531736";

  const message =
    "Hello, I would like to know more about HighPath Solutions services.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/40"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 fill-current"
        aria-hidden="true"
      >
        <path d="M16.003 3C8.822 3 3 8.82 3 16c0 2.3.602 4.545 1.745 6.52L3 29l6.665-1.715A12.94 12.94 0 0016.003 29C23.18 29 29 23.18 29 16S23.18 3 16.003 3zm0 23.67a10.62 10.62 0 01-5.414-1.48l-.388-.23-3.956 1.018 1.057-3.858-.252-.397A10.62 10.62 0 015.38 16C5.38 10.146 10.148 5.38 16.003 5.38c5.854 0 10.618 4.766 10.618 10.62 0 5.853-4.764 10.67-10.618 10.67zm5.822-7.95c-.318-.16-1.88-.928-2.17-1.033-.29-.107-.5-.16-.712.16-.21.318-.818 1.033-1.003 1.244-.184.213-.37.24-.685.08-.318-.16-1.34-.494-2.55-1.575-.942-.84-1.577-1.878-1.762-2.195-.184-.32-.02-.49.14-.65.143-.142.318-.37.478-.555.16-.185.212-.318.318-.53.107-.212.053-.398-.027-.558-.08-.16-.712-1.716-.976-2.35-.258-.618-.52-.534-.712-.544l-.606-.01c-.212 0-.557.08-.848.398-.29.318-1.11 1.086-1.11 2.65 0 1.563 1.136 3.073 1.294 3.285.16.212 2.236 3.415 5.42 4.79.758.327 1.35.522 1.812.668.762.242 1.456.208 2.004.126.61-.09 1.88-.77 2.145-1.51.264-.742.264-1.377.185-1.51-.08-.133-.292-.212-.61-.37z" />
      </svg>
    </motion.a>
  );
}
