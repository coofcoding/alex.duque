import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'

const DECORATIONS = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    pos: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    w: 'w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.1, x: -80, y: 0
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    pos: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    w: 'w-[100px] sm:w-[140px] md:w-[180px]',
    delay: 0.25, x: -80, y: 0
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    pos: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    w: 'w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.15, x: 80, y: 0
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    pos: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    w: 'w-[130px] sm:w-[170px] md:w-[220px]',
    delay: 0.3, x: 80, y: 0
  }
]

const AboutSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 py-20 bg-[#1c1c1c] relative overflow-hidden">
    {DECORATIONS.map((d, i) => (
      <FadeIn key={i} delay={d.delay} x={d.x} y={d.y} duration={0.9} className={`absolute ${d.pos} ${d.w} z-10 pointer-events-none`}>
        <img src={d.src} alt="" loading="lazy" className="w-full h-full object-contain" />
      </FadeIn>
    ))}

    <div className="relative z-10 flex flex-col items-center">
      <FadeIn delay={0} y={40} duration={0.8} className="hero-heading font-black uppercase leading-none tracking-tight mb-10 sm:mb-14 md:mb-16"
               style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        About me
      </FadeIn>

      <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <AnimatedText
          text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
          className="text-[#d7e2ea] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
        <ContactButton />
      </div>
    </div>
  </section>
)

export default AboutSection