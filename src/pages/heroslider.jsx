import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/deno.jpg"
          alt="Happy Family"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay: Blur only on the left, clear on the right */}
      <div
        className="
        absolute inset-0 
        bg-gradient-to-r from-white/60 to-transparent 
        backdrop-blur-sm md:backdrop-blur-0
      "
      ></div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left Content with Animation */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-blue-600 font-semibold">A Life Full of Care</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
           <span classname="text-blue-900">Royalsome</span>  Helps you <br /> Protect your Family
          </h1>
          <p className="text-gray-700 max-w-md">
            We are an independent insurance brokerage agency in the USA. We
            represent more than 20 top local & national insurance carriers.
          </p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-blue-600 font-medium">
              ▶ How it Works
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side (clear family photo, no blur) */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center"></div>
      </div>
    </section>
  );
}
