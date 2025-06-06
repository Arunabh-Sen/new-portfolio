'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import authorImage from '@/public/images/authors/arunabh.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <motion.h1
          className='title no-underline'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          Hey, I&#39;m Arunabh.
        </motion.h1>
        <motion.p
          className='mt-3 font-light text-muted-foreground'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
        >
          I&#39;m an IT student based in India. I enjoy building softwares,
          web applications, exploring new technologies, and sharing what I learn along the way.
        </motion.p>
      </div>

      <motion.div
        className='relative overflow-hidden rounded-lg'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <Image
          className='flex-1 cursor-pointer grayscale transform transition-transform duration-300 hover:scale-105'
          src={authorImage}
          alt='Arunabh Sen'
          width={175}
          height={175}
          priority
        />
      </motion.div>
    </section>
  )
}
