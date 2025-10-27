import { Code, Database, Globe, Smartphone, Users, Award } from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      technologies: ["Node.js", "Java", "C#", ".NET", "APIs REST"],
    },
    {
      category: "Banco de Dados",
      icon: <Database className="w-6 h-6" />,
      technologies: ["MySQL", "PostgreSQL", "Oracle"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["Android Studio", "Kotlin"],
    },
    {
      category: "Ferramentas",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Jest", "GitHub", "Docker"],
    },
    {
      category: "Metodologias",
      icon: <Users className="w-6 h-6" />,
      technologies: ["Scrum", "MVC", "POO"],
    },
  ];

  return (
    <section id="about" className="section-padding bg-light-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-accent-orange" />
              <h3 className="text-2xl font-semibold text-primary-dark">
                Formação e Experiência
              </h3>
            </div>

            <p className="text-lg text-primary-medium leading-relaxed">
              Sou <strong>Desenvolvedor de Software</strong> formado em{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong> pela FIAP
              (2022 - 2024). Durante minha trajetória acadêmica, em projetos
              pessoais e trabalhos freelance, tive a oportunidade de trabalhar
              com diversas tecnologias, atuando tanto no{" "}
              <strong>Back-end</strong> quanto no <strong>Front-end</strong>.
            </p>

            <p className="text-lg text-primary-medium leading-relaxed">
              Durante a formação, desenvolvi aplicações utilizando diversas
              linguagens como <strong>Java</strong>, <strong>C#</strong> e{" "}
              <strong>Kotlin</strong>, além de bancos de dados, desenvolvimento
              mobile, APIs REST e metodologias ágeis. Atualmente, foco em
              tecnologias como <strong>React</strong>, <strong>Next.js</strong>{" "}
              e <strong>TypeScript</strong>.
            </p>

            <div className="bg-gradient-to-r from-accent-orange to-primary-600 text-white p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">
                Objetivo Profissional
              </h4>
              <p className="text-light-cream">
                Em transição de carreira para a área de tecnologia, busco minha
                primeira oportunidade profissional como desenvolvedor.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary-dark mb-8">
              Tecnologias e Conhecimentos
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-accent-orange">{skill.icon}</div>
                    <h4 className="font-semibold text-primary-dark">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-light-cream text-primary-dark px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
