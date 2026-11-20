import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
  offset?: [string, string]
}

const AnimatedText = ({ text, className = '', style = {}, offset = ['start 0.8', 'end 0.2'] }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as never
  })

  return (
    <p ref={ref} className={className} style={{ position: 'relative', ...style }}>
      {text.split('').map((char, i) => {
        const progress = useTransform(scrollYProgress, [0, 1], [0.2, 1])
        return (
          <span key={i} style={{ position: 'relative', display: 'inline-block', width: '0.45em' }}>
            <motion.span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: progress,
                display: 'inline-block',
                width: '0.45em'
              }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
            <span style={{ opacity: 0.2, display: 'inline-block', width: '0.45em' }}>
              {char === ' ' ? ' ' : char}
            </span>
          </span>
        )
      })}
    </p>
  )
}

export default AnimatedText