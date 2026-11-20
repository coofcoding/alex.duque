import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'

const HeroSection = () => (
  <section className="relative h-screen flex flex-col overflow-x-clip bg-[#1c1c1c]">
    {/* Navbar */}
    <nav className="flex justify-between items-center text-[#d7e2ea] font-medium uppercase tracking-wider px-6 md:px-10 pt-6 md:pt-8 text-sm md:text-lg lg:text-[1.4rem]">
      <a href="#hero" className="text-white font-bold text-xl tracking-tight">
        Alex<span className="text-[#b6f500]">.</span>
      </a>
      <div className="flex gap-8">
        <a href="#acerca-de" className="hover:opacity-70 transition-opacity duration-200">About</a>
        <a href="#servicios" className="hover:opacity-70 transition-opacity duration-200">Price</a>
        <a href="#proyectos" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
        <a href="#contacto" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
      </div>
    </nav>

    <div className="flex-1 flex flex-col justify-between pb-7 sm:pb-8 md:pb-10">
      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40} duration={0.8}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m alex
          </h1>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end gap-6">
        <FadeIn delay={0.35} y={20} duration={0.8}>
          <p className="text-[#d7e2ea] font-light uppercase tracking-wide leading-snug"
             style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)', maxWidth: 'clamp(160px, 260px, 260px)' }}>
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} duration={0.8}>
          <ContactButton />
        </FadeIn>
      </div>
    </div>

    {/* Hero Portrait */}
    <Magnet padding={150} strength={3}
      activeTransition="transform 0.3s ease-out"
      inactiveTransition="transform 0.6s ease-in-out">
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
                      top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <img
          src="/photo.webp"
          alt="Alexander Duque"
          loading="lazy"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </Magnet>
  </section>
)

export default HeroSection