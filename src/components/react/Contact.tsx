import { useState } from "react";
import { FaXTwitter, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Thanks! I will get back to you soon.");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative bg-[#0f0f0f]">
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-200">
          Contact Me
        </h2>

        {/* ✅ Top Center Heading */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
            Let's collaborate!
          </h3>
          <p className="text-gray-300 mt-2">
            Contact me to discuss your web development needs <br /> or just to say hello. 🙂
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
          {/* Left side */}
          <div className="flex flex-col items-center text-center relative">
            <div className="relative">
              <img
                src="/assets/images/ContactVector.svg"
                alt="Person"
                className="mx-auto w-64 h-auto"
              />

              {/* Social Icons Circle */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="relative w-[330px] h-[330px] rounded-full border border-dashed border-gray-600">
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black rounded-full p-3">
                    <FaXTwitter className="text-white text-xl" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black rounded-full p-3">
                    <FaGithub className="text-white text-xl" />
                  </div>
                  <div className="absolute top-1/2 -left-7 -translate-y-1/2 bg-black rounded-full p-3">
                    <FaLinkedin className="text-white text-xl" />
                  </div>
                  <div className="absolute top-1/2 -right-7 -translate-y-1/2 bg-black rounded-full p-3">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side (Form) */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="card p-6 grid gap-4 max-w-xl mx-auto"
            >
              <input
                name="name"
                required
                placeholder="Your Name"
                className="bg-transparent border border-white/10 rounded-xl px-4 py-3 outline-none"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="bg-transparent border border-white/10 rounded-xl px-4 py-3 outline-none"
              />
              <textarea
                name="message"
                required
                placeholder="Message"
                rows={5}
                className="bg-transparent border border-white/10 rounded-xl px-4 py-3 outline-none"
              />
              <button className="btn-primary w-fit" type="submit">
                Send Message
              </button>
              {status && <p className="text-sm text-emerald-400">{status}</p>}
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Purple Wave fixed at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <img
          src="/assets/images/purpleWave.svg"
          alt="wave"
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
