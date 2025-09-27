import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiRedux } from "react-icons/si";

const projects = [
   {
    title: "Pest control services",
    desc: "A responsive website for pest control services where users can explore service details, learn about treatments, and easily book appointments online.",
    techIcons: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />, <FaReact key="react" />],
    link: "https://pest-control-services-website.vercel.app",
    image: "/assets/images/pest.png",
  },
  {
    title: "Portfolio",
    desc: "Personal portfolio website showcasing my projects, skills, and achievements. Fully responsive and modern design.",
  techIcons: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />, <FaReact key="react" />],
    link: "#",
        image: "/assets/images/portfolio.png",
  },
  {
    title: "Real-Estate eAuctionMart",
    desc: "EAuctionMart is a real estate platform for browsing property listings with advanced search, filters, and a user-friendly real-time auction system.",
    techIcons: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />, <FaReact key="react" />],
    link: "#",

    image: "/assets/images/real_state.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section py-16 bg-[#0f0a2c]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative block rounded-3xl overflow-hidden shadow-lg hover:scale-105 transform transition-transform bg-[#1a103d] h-[420px] w-full"
            >
              {/* Top Image with Curve */}
              <div className="relative h-1/2 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Curve Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#1a103d] rounded-t-[50%]"></div>
              </div>

              {/* Bottom Content */}
              <div className="p-6 h-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-300 text-sm">{p.desc}</p>
                </div>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {p.techIcons.map((icon, i) => (
                    <span key={i} className="text-xl text-white">{icon}</span>
                  ))}
                </div>
              </div>

              {/* External Link Icon */}
              <span className="absolute top-4 right-4 text-white text-xl p-2 rounded-full border border-white/30 group-hover:bg-white/20 transition-colors">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
