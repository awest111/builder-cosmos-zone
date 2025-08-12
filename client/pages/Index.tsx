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
      {/* Pixel Growing Animation Overlay */}
      <AnimatePresence>
        {isBuilding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center"
          >
            <div className="relative">
              {/* Pixel Growth Animation */}
              <motion.div
                className="bg-slate-200"
                initial={{
                  width: 1,
                  height: 1,
                  borderRadius: '50%'
                }}
                animate={{
                  width: buildingProgress < 100 ? Math.max(1, buildingProgress * 8) : window.innerWidth * 2,
                  height: buildingProgress < 100 ? Math.max(1, buildingProgress * 8) : window.innerHeight * 2,
                  borderRadius: buildingProgress >= 50 ? '0%' : '50%'
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut"
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1
                }}
              />

              {/* Pixel Progress Text */}
              <motion.div
                className="relative z-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: buildingProgress < 75 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-white font-mono text-sm mb-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  GENERERAR SIDA...
                </motion.div>
                <div className="text-white font-mono text-xs">
                  {buildingProgress}% | {Math.floor(buildingProgress * 8)}px
                </div>

                {/* Pixel visualization */}
                <motion.div
                  className="mt-4 flex justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="grid grid-cols-8 gap-px">
                    {Array.from({ length: 64 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1"
                        initial={{ backgroundColor: '#1e293b' }}
                        animate={{
                          backgroundColor: i < (buildingProgress * 64 / 100) ? '#e2e8f0' : '#1e293b'
                        }}
                        transition={{ delay: i * 0.01, duration: 0.1 }}
                      />
                    ))}
                  </div>
                </motion.div>
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
              className="h-screen flex flex-col"
            >
              {/* Navigation Header */}
              <motion.header
                className="flex justify-between items-center p-6 border-b border-border/30"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <motion.button
                  className="text-xl font-light tracking-wider hover:text-foreground/80 transition-colors"
                  onClick={() => setActiveSection('hero')}
                  whileHover={{ scale: 1.02 }}
                >
                  FORMARK
                </motion.button>

                <nav className="flex space-x-8">
                  <motion.button
                    className="text-sm font-light tracking-wide py-2 border-b-2 border-foreground"
                    onClick={() => handleMenuClick('projekt')}
                  >
                    Projekt
                  </motion.button>
                  <motion.button
                    className="text-sm font-light tracking-wide py-2 hover:text-foreground/80 transition-colors"
                    onClick={() => handleMenuClick('om')}
                  >
                    Om oss
                  </motion.button>
                  <motion.button
                    className="text-sm font-light tracking-wide py-2 hover:text-foreground/80 transition-colors"
                    onClick={() => handleMenuClick('kontakt')}
                  >
                    Kontakt
                  </motion.button>
                </nav>
              </motion.header>

              <div className="container mx-auto px-6 flex-1 flex flex-col">
                <motion.div
                  className="text-center mb-8 pt-8"
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
              className="h-screen flex flex-col"
            >
              {/* Navigation Header */}
              <motion.header
                className="flex justify-between items-center p-6 border-b border-border/30"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <motion.button
                  className="text-xl font-light tracking-wider hover:text-foreground/80 transition-colors"
                  onClick={() => setActiveSection('hero')}
                  whileHover={{ scale: 1.02 }}
                >
                  FORMARK
                </motion.button>

                <nav className="flex space-x-8">
                  <motion.button
                    className="text-sm font-light tracking-wide py-2 hover:text-foreground/80 transition-colors"
                    onClick={() => handleMenuClick('projekt')}
                  >
                    Projekt
                  </motion.button>
                  <motion.button
                    className="text-sm font-light tracking-wide py-2 border-b-2 border-foreground"
                    onClick={() => handleMenuClick('om')}
                  >
                    Om oss
                  </motion.button>
                  <motion.button
                    className="text-sm font-light tracking-wide py-2 hover:text-foreground/80 transition-colors"
                    onClick={() => handleMenuClick('kontakt')}
                  >
                    Kontakt
                  </motion.button>
                </nav>
              </motion.header>

              <div className="container mx-auto px-6 max-w-4xl text-center flex-1 flex flex-col justify-center">
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
              className="h-screen flex flex-col"
            >
              {/* Navigation Header */}
              <motion.header
                className="flex justify-between items-center p-6 border-b border-border/30"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <motion.button
                  className="text-xl font-light tracking-wider hover:text-foreground/80 transition-colors"
                  onClick={() => setActiveSection('hero')}
                  whileHover={{ scale: 1.02 }}
                >
                  FORMARK
                </motion.button>

                <nav className="flex space-x-8">
                  <motion.button
                    className="text-sm font-light tracking-wide py-2 hover:text-foreground/80 transition-colors"
                    onClick={() => handleMenuClick('projekt')}
                  >
                    Projekt
                  </motion.button>
                  <motion.button
                    className="text-sm font-light tracking-wide py-2 hover:text-foreground/80 transition-colors"
                    onClick={() => handleMenuClick('om')}
                  >
                    Om oss
                  </motion.button>
                  <motion.button
                    className="text-sm font-light tracking-wide py-2 border-b-2 border-foreground"
                    onClick={() => handleMenuClick('kontakt')}
                  >
                    Kontakt
                  </motion.button>
                </nav>
              </motion.header>

              <div className="container mx-auto px-6 max-w-4xl flex-1 flex flex-col justify-center">
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
