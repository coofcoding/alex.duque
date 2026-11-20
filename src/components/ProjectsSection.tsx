import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from './LiveProjectButton'

const PROJECTS = [
  {
    num: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    images: {
      leftTop: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      leftBottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      right: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85'
    }
  },
  {
    num: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    images: {
      leftTop: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      leftBottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      right: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85'
    }
  },
  {
    num: '03',
    category: 'Client',
    name: 'Solaris Digital',
    images: {
      leftTop: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      leftBottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      right: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-99ab-c4e6cb830f5b.png&w=1280&q=85'
    }
  }
]

const TOTAL_CARDS = 3
const SCALE_STEP = 0.03

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => {
  const { scrollYProgress } = useScroll({
    target: document.body,
    offset: [
      ['start end', `start ${index * 100}%`],
      ['end end', `end ${index * 100}%`]
    ]
  })

  // Sticky stacking: each card scales down as you scroll past it
  // The target scale for each card
  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * SCALE_STEP

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])
  const y = useTransform(scrollYProgress, [0, 1], [0, index * 28])

  return (
    <motion.div
      style={{
        scale,
        y,
        position: 'sticky',
        top: '24px',
        zIndex: TOTAL_CARDS - index,
        willChange: 'transform'
      }}
      className="h-[85vh] flex flex-col"
    >
      <div className="flex-1 flex flex-col bg-[#0c0c0c] border-2 border-[#d7e2ea]
                    rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 overflow-hidden">
        {/* Top row: Number, category, name, Live Project button */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <span className="font-black leading-none shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0c0c0c' }}>
            {project.num}
          </span>
          <div className="flex flex-col items-end sm:items-end gap-1">
            <span className="font-medium uppercase text-[#d7e2ea]"
                  style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}>
              {project.category}
            </span>
            <span className="font-black uppercase text-[#d7e2ea]"
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}>
              {project.name}
            </span>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1 overflow-hidden">
          {/* Left column (40%) - 2 stacked images */}
          <div className="flex flex-col gap-4 flex-[0_0_40%] min-h-0">
            <img
              src={project.images.leftTop}
              alt={`${project.name} detail 1`}
              loading="lazy"
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.images.leftBottom}
              alt={`${project.name} detail 2`}
              loading="lazy"
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Right column (60%) - 1 tall image */}
          <div className="flex-[0_0_60%] min-h-0">
            <img
              src={project.images.right}
              alt={`${project.name} main`}
              loading="lazy"
              className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectsSection = () => (
  <section className="relative bg-[#0c0c0c] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
                    -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
    <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
      Project
    </h2>

    <div className="max-w-5xl mx-auto">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.num} project={project} index={i} />
      ))}
    </div>
  </section>
)

export default ProjectsSection