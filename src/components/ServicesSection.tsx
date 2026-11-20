import FadeIn from './FadeIn'

const SERVICES = [
  {
    num: '01',
    name: '3D Modeling',
    desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.'
  },
  {
    num: '02',
    name: 'Rendering',
    desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.'
  },
  {
    num: '03',
    name: 'Motion Design',
    desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.'
  },
  {
    num: '04',
    name: 'Branding',
    desc: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.'
  },
  {
    num: '05',
    name: 'Web Design',
    desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.'
  }
]

const ServicesSection = () => (
  <section className="bg-white text-[#0c0c0c] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
                     px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
    <h2 className="text-[#0c0c0c] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
      Services
    </h2>

    <div className="max-w-5xl mx-auto flex flex-col">
      {SERVICES.map((s, i) => (
        <FadeIn key={i} delay={i * 0.1} y={30} duration={0.7}
          className="flex items-start gap-8 py-8 sm:py-10 md:py-12 border-b border-black/15">
          <span className="font-black leading-none shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0c0c0c' }}>
            {s.num}
          </span>
          <div className="flex flex-col gap-3 pt-2">
            <span className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: '#0c0c0c' }}>
              {s.name}
            </span>
            <span className="font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6, color: '#0c0c0c' }}>
              {s.desc}
            </span>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
)

export default ServicesSection