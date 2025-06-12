'use client'

import { Download } from 'lucide-react'

export default function ResumeDownload() {
  return (
    <section className='mt-10'>
      <h1 className='title mb-10 text-left no-underline'>Download my resume</h1>
      <a
        href='https://drive.google.com/file/d/1o3pzx3gJMiQSZsgrsKNyUZaNNOIk8nd_/view?usp=drive_link' // Replace with your actual Google Drive shareable link
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white transition transition-all duration-300 hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300'
      >
        <Download className='h-5 w-5' />
        Download Resume
      </a>
    </section>
  )
}
