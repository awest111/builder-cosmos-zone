import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Villa Moderna",
    location: "Stockholm",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=60",
    description: "Contemporary residential design"
  },
  {
    id: 2,
    title: "Urban Office",
    location: "Göteborg",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60",
    description: "Sustainable office complex"
  },
  {
    id: 3,
    title: "Cultural Center",
    location: "Malmö",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop&q=60",
    description: "Community cultural hub"
  },
  {
    id: 4,
    title: "Riverside Pavilion",
    location: "Uppsala",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&auto=format&fit=crop&q=60",
    description: "Minimalist waterfront structure"
  },
  {
    id: 5,
    title: "Green Housing",
    location: "Lund",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&auto=format&fit=crop&q=60",
    description: "Eco-friendly residential complex"
  },
  {
    id: 6,
    title: "Corporate Tower",
    location: "Stockholm",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=60",
    description: "High-rise office building"
  }
];

type ActiveSection = 'hero' | 'projekt' | 'om' | 'kontakt';

export default function Index() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('hero');
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildingProgress, setBuildingProgress] = useState(0);

  const menuItems = [
    { id: 'projekt' as const, label: 'Projekt', description: 'Våra arkitektoniska verk' },
    { id: 'om' as const, label: 'Om oss', description: 'Vår vision och filosofi' },
    { id: 'kontakt' as const, label: 'Kontakt', description: 'Låt oss skapa tillsammans' }
  ];

  const handleMenuClick = (section: ActiveSection) => {
    if (section === 'hero') {
      setActiveSection(section);
      return;
    }

    setIsBuilding(true);
    setBuildingProgress(0);

    // Simulate building construction
    const buildingSteps = [0, 25, 50, 75, 100];
    let currentStep = 0;

    const buildingInterval = setInterval(() => {
      currentStep++;
      if (currentStep < buildingSteps.length) {
        setBuildingProgress(buildingSteps[currentStep]);
      } else {
        clearInterval(buildingInterval);
        setTimeout(() => {
          setActiveSection(section);
          setIsBuilding(false);
          setBuildingProgress(0);
        }, 300);
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Architectural Construction Overlay */}
      <AnimatePresence>
        {isBuilding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-50 flex items-center justify-center"
          >
            <div className="text-center">
              {/* Technical Drawing Animation */}
              <div className="relative w-96 h-96 mx-auto mb-8 bg-white border border-slate-300 shadow-lg">

                {/* Blueprint Grid Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Phase 1: Site Analysis & Foundation Lines */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: buildingProgress >= 25 ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <svg className="w-full h-full">
                    <motion.rect
                      x="80" y="320" width="240" height="8"
                      fill="none" stroke="#0f172a" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: buildingProgress >= 25 ? 1 : 0 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.line
                      x1="50" y1="324" x2="350" y2="324"
                      stroke="#64748b" strokeWidth="1" strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: buildingProgress >= 25 ? 1 : 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    />
                  </svg>
                </motion.div>

                {/* Phase 2: Structural Framework */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: buildingProgress >= 50 ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <svg className="w-full h-full">
                    <motion.line x1="80" y1="320" x2="80" y2="180" stroke="#0f172a" strokeWidth="2"
                      initial={{ pathLength: 0 }} animate={{ pathLength: buildingProgress >= 50 ? 1 : 0 }} />
                    <motion.line x1="200" y1="320" x2="200" y2="180" stroke="#0f172a" strokeWidth="2"
                      initial={{ pathLength: 0 }} animate={{ pathLength: buildingProgress >= 50 ? 1 : 0 }} />
                    <motion.line x1="320" y1="320" x2="320" y2="180" stroke="#0f172a" strokeWidth="2"
                      initial={{ pathLength: 0 }} animate={{ pathLength: buildingProgress >= 50 ? 1 : 0 }} />
                    <motion.line x1="80" y1="180" x2="320" y2="180" stroke="#0f172a" strokeWidth="2"
                      initial={{ pathLength: 0 }} animate={{ pathLength: buildingProgress >= 50 ? 1 : 0 }} />
                    <motion.line x1="80" y1="250" x2="320" y2="250" stroke="#0f172a" strokeWidth="2"
                      initial={{ pathLength: 0 }} animate={{ pathLength: buildingProgress >= 50 ? 1 : 0 }} />
                    <motion.line x1="70" y1="180" x2="70" y2="320" stroke="#64748b" strokeWidth="1"
                      initial={{ pathLength: 0 }} animate={{ pathLength: buildingProgress >= 50 ? 1 : 0 }} />
                    <circle cx="70" cy="180" r="2" fill="#64748b" />
                    <circle cx="70" cy="320" r="2" fill="#64748b" />
                  </svg>
                </motion.div>

                {/* Phase 3: Envelope & Form */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: buildingProgress >= 75 ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <svg className="w-full h-full">
                    <motion.polygon
                      points="80,180 200,120 320,180 320,320 80,320"
                      fill="rgba(148, 163, 184, 0.1)"
                      stroke="#334155"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: buildingProgress >= 75 ? 1 : 0 }}
                      transition={{ duration: 1 }}
                    />
                    <motion.line x1="80" y1="180" x2="200" y2="120" stroke="#334155" strokeWidth="1.5"
                      initial={{ pathLength: 0 }} animate={{ pathLength: buildingProgress >= 75 ? 1 : 0 }} />
                    <motion.line x1="200" y1="120" x2="320" y2="180" stroke="#334155" strokeWidth="1.5"
                      initial={{ pathLength: 0 }} animate={{ pathLength: buildingProgress >= 75 ? 1 : 0 }} />
                  </svg>
                </motion.div>

                {/* Phase 4: Details & Finishes */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: buildingProgress >= 100 ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <svg className="w-full h-full">
                    <rect x="110" y="200" width="30" height="40"
                      fill="rgba(59, 130, 246, 0.2)" stroke="#334155" strokeWidth="1" />
                    <rect x="185" y="200" width="30" height="40"
                      fill="rgba(59, 130, 246, 0.2)" stroke="#334155" strokeWidth="1" />
                    <rect x="260" y="200" width="30" height="40"
                      fill="rgba(59, 130, 246, 0.2)" stroke="#334155" strokeWidth="1" />
                    <rect x="185" y="270" width="30" height="50"
                      fill="rgba(120, 113, 108, 0.3)" stroke="#334155" strokeWidth="1" />
                    <text x="340" y="250" className="text-xs fill-slate-600" fontFamily="monospace">
                      FORMARK
                    </text>
                    <text x="340" y="265" className="text-xs fill-slate-500" fontFamily="monospace">
                      ARKITEKTBYRÅ
                    </text>
                  </svg>
                </motion.div>

                {/* Technical Title Block */}
                <motion.div
                  className="absolute bottom-4 right-4 bg-white border border-slate-300 p-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="text-xs font-mono text-slate-700">
                    <div>PROJEKT: {buildingProgress >= 25 ? 'GRUND' : buildingProgress >= 50 ? 'STOMME' : buildingProgress >= 75 ? 'KLIMATSKAL' : 'DETALJER'}</div>
                    <div>SKALA: 1:200</div>
                    <div>STATUS: {buildingProgress}%</div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="flex items-center justify-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-8 h-px bg-slate-400" />
                <motion.p
                  className="text-sm font-light tracking-wider text-slate-600 font-mono"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  GENERERAR ARKITEKTONISK UPPLEVELSE
                </motion.p>
                <div className="w-8 h-px bg-slate-400" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main>
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && (
            <motion.section
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-section h-screen relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.85), rgba(248, 250, 252, 0.85)), url('https://images.pexels.com/photos/29138602/pexels-photo-29138602.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="text-center max-w-4xl mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
                <motion.h1
                  className="text-7xl md:text-9xl font-extralight tracking-wider mb-6 text-slate-800"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  FORMARK
                </motion.h1>

                <motion.div
                  className="w-24 h-px bg-slate-700 mx-auto mb-6"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />

                <motion.p
                  className="text-base md:text-lg font-light text-slate-600 max-w-2xl mx-auto leading-relaxed mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Innovativ arkitektur som förenar minimalism med funktionalitet.
                  Vi skapar rum som inspirerar och definierar framtidens byggande.
                </motion.p>

                <motion.div
                  className="text-xs font-light tracking-widest text-slate-500 uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  Arkitektbyrå • Etablerad 2018 • Stockholm
                </motion.div>

                <motion.div
                  className="mt-10 flex justify-center space-x-12"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                >
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      className="group text-center relative overflow-hidden p-4 border border-slate-300/30 hover:border-slate-400/50 transition-colors"
                      onClick={() => handleMenuClick(item.id)}
                      whileHover={{ y: -4 }}
                      whileTap={{ y: 0 }}
                    >
                      <div className="absolute inset-0 bg-slate-200/30 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <div className="relative z-10">
                        <div className="text-sm font-light tracking-wide mb-2 text-slate-700 group-hover:text-slate-900 transition-colors">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-500">
                          {item.description}
                        </div>

                        {/* Architectural elements */}
                        <motion.div
                          className="mt-3 flex justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                        >
                          {item.id === 'projekt' && (
                            <div className="flex space-x-1">
                              <div className="w-4 h-px bg-slate-400" />
                              <div className="w-2 h-px bg-slate-400" />
                              <div className="w-3 h-px bg-slate-400" />
                            </div>
                          )}
                          {item.id === 'om' && (
                            <div className="w-4 h-4 border border-slate-400 rounded-full" />
                          )}
                          {item.id === 'kontakt' && (
                            <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-slate-400" />
                          )}
                        </motion.div>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === 'projekt' && (
            <motion.section
              key="projekt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="h-screen flex flex-col pt-20"
            >
              <div className="container mx-auto px-6 flex-1 flex flex-col">
                <motion.div
                  className="text-center mb-8"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight tracking-wider mb-3">
                    PROJEKT
                  </h2>
                  <div className="w-16 h-px bg-foreground mx-auto mb-4" />
                  <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                    Utforska våra senaste arkitektoniska skapelser som definierar modern design
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="project-grid-item group cursor-pointer"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -8 }}
                    >
                      <div className="relative overflow-hidden bg-muted h-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-sm font-light mb-1">{project.title}</h3>
                          <p className="text-xs text-white/80 mb-1">{project.location} • {project.year}</p>
                          <p className="text-xs text-white/60">{project.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === 'om' && (
            <motion.section
              key="om"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="h-screen flex items-center justify-center pt-20"
            >
              <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.h2
                  className="text-3xl md:text-4xl font-extralight tracking-wider mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  OM OSS
                </motion.h2>

                <motion.div
                  className="w-16 h-px bg-foreground mx-auto mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                />

                <motion.div
                  className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <p>
                    Formark grundades med visionen att skapa arkitektur som transcenderar tid och trender. 
                    Vi tror på kraften i minimalism – att mindre kan vara mer kraftfullt, mer meningsfullt.
                  </p>
                  <p>
                    Vårt tillvägagångssätt bygger på djup förståelse för plats, funktion och användare. 
                    Varje projekt är en unik dialog mellan det befintliga och det nya, mellan det praktiska och det poetiska.
                  </p>
                  <p>
                    Vi strävar efter att skapa rum som inte bara tjänar sin funktion, 
                    utan som också inspirerar och förhöjer den mänskliga upplevelsen.
                  </p>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === 'kontakt' && (
            <motion.section
              key="kontakt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="h-screen flex items-center justify-center pt-20"
            >
              <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                  className="text-center mb-8"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight tracking-wider mb-4">
                    KONTAKT
                  </h2>
                  <div className="w-16 h-px bg-foreground mx-auto mb-4" />
                  <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                    Låt oss diskutera ditt nästa projekt och skapa något extraordinärt tillsammans
                  </p>
                </motion.div>

                <motion.div
                  className="grid md:grid-cols-2 gap-8"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-light tracking-wide uppercase mb-2 text-muted-foreground">Studio</h3>
                      <p className="text-base leading-relaxed">
                        Storgatan 15<br />
                        111 51 Stockholm<br />
                        Sverige
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-light tracking-wide uppercase mb-2 text-muted-foreground">Kontakt</h3>
                      <p className="text-base leading-relaxed">
                        +46 8 123 456 78<br />
                        info@formark.se
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-light tracking-wide uppercase mb-1 text-muted-foreground">
                        Namn
                      </label>
                      <input
                        type="text"
                        className="w-full border-0 border-b border-border bg-transparent py-1 focus:border-foreground focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-light tracking-wide uppercase mb-1 text-muted-foreground">
                        E-post
                      </label>
                      <input
                        type="email"
                        className="w-full border-0 border-b border-border bg-transparent py-1 focus:border-foreground focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-light tracking-wide uppercase mb-1 text-muted-foreground">
                        Meddelande
                      </label>
                      <textarea
                        rows={3}
                        className="w-full border-0 border-b border-border bg-transparent py-1 focus:border-foreground focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      className="w-full py-2 bg-foreground text-background font-light tracking-wide hover:bg-foreground/90 transition-colors text-sm"
                      whileHover={{ y: -1 }}
                      whileTap={{ y: 0 }}
                    >
                      SKICKA MEDDELANDE
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
