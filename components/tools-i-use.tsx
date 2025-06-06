'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ToolsIUse() {
  const tools = [
    'HTML & CSS',
    'JavaScript',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Git & GitHub',
    'Firebase',
    'MongoDB',
    'LaTeX',
    'Figma',
    'Postman',
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' }) // trigger a bit before fully visible

  return (
    <motion.section
      ref={ref}
      className="mt-5 mb-32"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <h2 className="title text-3xl mb-8">Tools I Use</h2>
      <ul className="grid cursor-pointer grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-muted-foreground">
        {tools.map((tool, index) => (
          <li
            key={index}
            className="rounded-lg border border-muted px-4 py-2 text-center transition-colors duration-200 hover:bg-muted hover:text-foreground"
          >
            {tool}
          </li>
        ))}
      </ul>
    </motion.section>
  )
}
