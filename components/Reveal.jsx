'use client'
import { motion } from 'framer-motion'

/*
 * Scroll-reveal wrapper. Fades + slides its children in once they enter the
 * viewport. Use `delay` to stagger siblings, `as` to change the rendered tag.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.8,
  className,
  as = 'div',
  once = true,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -12% 0px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
