import { useEffect } from "react";
import gsap from "gsap";
import {
  FaDownload,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaHome,
} from "react-icons/fa";

export default function About() {
  useEffect(() => {
    // GSAP animation for right side boxes
    gsap.from(".info-box", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="py-12 bg-gray" id="about">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Software Developer | Problem Solver | Tech Explorer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm <span className="font-bold">Simran Vishwakarma</span>, a
              passionate Software Developer with real-world experience in modern
              JavaScript frameworks and backend technologies. Skilled in{" "}
              <span className="font-semibold">
                React.js, Next.js, Node.js, Express, and CSS frameworks
              </span>
              , I specialize in creating clean, modern, and user-focused web
              experiences.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              My journey in web development has allowed me to transform ideas
              into interactive and impactful solutions. I am always eager to
              explore new technologies, improve my craft, and combine creativity
              with efficiency in every project I take on.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              I have contributed to impactful projects such as{" "}
              <span className="font-semibold">Pest Control Services</span>,{" "}
              <span className="font-semibold">
                Real Estate Auction Platform
              </span>
              , and <span className="font-semibold">Job Portal</span> during my
              time at <span className="font-semibold">Yash Soft Solution</span>,
              where I delivered scalable and practical solutions tailored to
              client needs.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
              >
                Get in Touch
              </a>
              <a
                href="/resume/SimranResume.pdf"
                download
                className="px-5 py-2 bg-gray-800 text-white rounded-lg shadow-md flex items-center gap-2 hover:bg-gray-900 transition"
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </div>

          {/* Right Info Boxes */}
          <div className="space-y-6">
            {/* Education */}
            <div className="info-box relative rounded-2xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-border-spin">
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-xl flex items-start gap-3">
                <FaGraduationCap className="text-indigo-600 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-indigo-700 text-xl mb-1">
                    Education
                  </h4>
                  <p className="text-gray-700">
                    MCA - GYAN GANGA INSTITUTE OF TECHNOLOGY & SCIENCE (RGPV) Jabalpur
                  </p>
                </div>
              </div>
            </div>

            {/* Permanent Location */}
            <div className="info-box relative rounded-2xl p-[2px] bg-gradient-to-r from-green-400 via-teal-500 to-emerald-600 animate-border-spin">
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-xl flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-600 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-green-700 text-xl mb-1">
                    Permanent Location
                  </h4>
                  <p className="text-gray-700">Jabalpur, Madhya Pradesh</p>
                </div>
              </div>
            </div>

            {/* Current Location */}
            <div className="info-box relative rounded-2xl p-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 animate-border-spin">
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-xl flex items-start gap-3">
                <FaHome className="text-pink-600 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-pink-700 text-xl mb-1">
                    Current Location
                  </h4>
                  <p className="text-gray-700">Indore, Madhya Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
