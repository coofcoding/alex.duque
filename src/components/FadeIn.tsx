import { motion, type Variants, type MotionProps } from 'framer-motion'
import type { ReactNode, ComponentType } from 'react'

interface FadeInProps extends MotionProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  style?: React.CSSProperties
  as?: string | ComponentType<unknown>
}

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  style = {},
  as = 'div'
}: FadeInProps) => {
  const MotionEl = motion.create(as) as typeof motion.div

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] }
    }
  }

  return (
    <MotionEl
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '50px', amount: 0 }}
    >
      {children}
    </MotionEl>
  )
}

export default FadeIn