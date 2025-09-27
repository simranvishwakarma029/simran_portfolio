import { FC } from "react";
import { FaXTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

const Footer: FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="relative bg-[#220153e7] text-white">
      {/* Footer Content */}
      <div className="relative flex flex-col items-center justify-center py-20">
        {/* Gradient Letter */}
        <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          S
        </h1>
        <p className="mt-2 text-m text-slate-500">
          Simran Vishwakarma | Portfolio
        </p>

        {/* Social Icons */}
        <div className="flex gap-8 mt-6 text-2xl">
          <a
            href="https://x.com/simran_0026"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/simran-vishwakarma-07b44422b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/simranvishwakarma029"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaGithub />
          </a>
           <a
            href="mailto:simranvishwakarma029@gmail.com"
            className="hover:text-pink-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-5 text-xxl text-slate-400">
          © {year} Copyright 2025{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
            Simran Vishwakarma
          </span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
