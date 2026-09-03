import type { ElementType, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
}

export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }: RevealProps) {
  const { ref, inView } = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
