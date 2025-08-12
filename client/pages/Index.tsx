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

  const menuItems = [
    { id: 'projekt' as const, label: 'Projekt', description: 'Våra arkitektoniska verk' },
    { id: 'om' as const, label: 'Om oss', description: 'Vår vision och filosofi' },
    { id: 'kontakt' as const, label: 'Kontakt', description: 'Låt oss skapa tillsammans' }
  ];

  const handleMenuClick = (section: ActiveSection) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Logo and Menu */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-light tracking-wider cursor-pointer"
              onClick={() => setActiveSection('hero')}
              whileHover={{ scale: 1.02 }}
            >
              FORMARK
            </motion.div>
            
            <nav className="flex space-x-12">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  className="menu-item text-sm font-light tracking-wide py-2 hover:text-foreground/80"
                  onClick={() => handleMenuClick(item.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && (
            <motion.section
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.85), rgba(248, 250, 252, 0.85)), url('https://images.pexels.com/photos/29138602/pexels-photo-29138602.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
                <motion.h1
                  className="text-6xl md:text-8xl font-extralight tracking-wider mb-8 text-slate-800"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  FORMARK
                </motion.h1>

                <motion.div
                  className="w-24 h-px bg-slate-700 mx-auto mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />

                <motion.p
                  className="text-lg md:text-xl font-light text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Innovativ arkitektur som förenar minimalism med funktionalitet.
                  Vi skapar rum som inspirerar och definierar framtidens byggande.
                </motion.p>

                <motion.div
                  className="text-sm font-light tracking-widest text-slate-500 uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  Arkitektbyrå • Etablerad 2018 • Stockholm
                </motion.div>
                
                <motion.div 
                  className="mt-16 flex justify-center space-x-16"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                >
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      className="group text-center"
                      onClick={() => handleMenuClick(item.id)}
                      whileHover={{ y: -4 }}
                      whileTap={{ y: 0 }}
                    >
                      <div className="text-sm font-light tracking-wide mb-2 text-slate-700 group-hover:text-slate-900 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-500">
                        {item.description}
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
              className="min-h-screen py-20"
            >
              <div className="container mx-auto px-6">
                <motion.div 
                  className="text-center mb-16"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-4">
                    PROJEKT
                  </h2>
                  <div className="w-16 h-px bg-foreground mx-auto mb-6" />
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Utforska våra senaste arkitektoniska skapelser som definierar modern design
                  </p>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                      <div className="relative overflow-hidden bg-muted">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-light mb-1">{project.title}</h3>
                          <p className="text-sm text-white/80 mb-1">{project.location} • {project.year}</p>
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
              className="min-h-screen flex items-center justify-center py-20"
            >
              <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.h2 
                  className="text-4xl md:text-5xl font-extralight tracking-wider mb-8"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  OM OSS
                </motion.h2>
                
                <motion.div 
                  className="w-16 h-px bg-foreground mx-auto mb-12"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                />
                
                <motion.div 
                  className="space-y-8 text-lg leading-relaxed text-muted-foreground"
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
              className="min-h-screen flex items-center justify-center py-20"
            >
              <div className="container mx-auto px-6 max-w-4xl">
                <motion.div 
                  className="text-center mb-16"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-8">
                    KONTAKT
                  </h2>
                  <div className="w-16 h-px bg-foreground mx-auto mb-8" />
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Låt oss diskutera ditt nästa projekt och skapa något extraordinärt tillsammans
                  </p>
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-2 gap-16"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-light tracking-wide uppercase mb-4 text-muted-foreground">Studio</h3>
                      <p className="text-lg leading-relaxed">
                        Storgatan 15<br />
                        111 51 Stockholm<br />
                        Sverige
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-light tracking-wide uppercase mb-4 text-muted-foreground">Kontakt</h3>
                      <p className="text-lg leading-relaxed">
                        +46 8 123 456 78<br />
                        info@formark.se
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-light tracking-wide uppercase mb-2 text-muted-foreground">
                        Namn
                      </label>
                      <input 
                        type="text" 
                        className="w-full border-0 border-b border-border bg-transparent py-2 focus:border-foreground focus:outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-light tracking-wide uppercase mb-2 text-muted-foreground">
                        E-post
                      </label>
                      <input 
                        type="email" 
                        className="w-full border-0 border-b border-border bg-transparent py-2 focus:border-foreground focus:outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-light tracking-wide uppercase mb-2 text-muted-foreground">
                        Meddelande
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full border-0 border-b border-border bg-transparent py-2 focus:border-foreground focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    
                    <motion.button 
                      className="w-full py-3 bg-foreground text-background font-light tracking-wide hover:bg-foreground/90 transition-colors"
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
