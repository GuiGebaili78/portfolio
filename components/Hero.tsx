"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-light-cream rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-orange rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary-medium rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Guilherme
              <span className="block text-light-cream">Gebaili</span>
            </h1>
            <div className="text-xl md:text-2xl text-light-cream font-light">
              Desenvolvedor de Software
            </div>
          </div>

          <p className="text-lg md:text-xl text-light-cream max-w-3xl mx-auto leading-relaxed">
            Em transição de carreira para a área de tecnologia, busco minha
            primeira oportunidade profissional como desenvolvedor.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:guilhermecorretor@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Contato
            </a>
            <a
              href="https://github.com/GuiGebaili78"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="pt-8">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center text-white hover:text-light-cream transition-colors group"
            >
              <span className="mr-2">Conheça mais sobre mim</span>
              <ArrowDown
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
