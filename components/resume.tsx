'use client'

import { Download } from 'lucide-react'

export default function ResumeDownload() {
  return (
    <section className="mt-10">
      <h1 className="title no-underline mb-10 text-left">Download my resume</h1>
      <a
        href="https://drive.google.com/file/d/1ZGpolYprZJKjeOZQvhH_Qzhn1RN3YMGN/view?usp=sharing" // Replace with your actual Google Drive shareable link
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center gap-2 
          text-white bg-black 
          px-5 py-3 rounded-lg 
          transition
          hover:bg-gray-700 
          dark:bg-white dark:text-black
          dark:hover:bg-gray-300 transition-all duration-300
        "
      >
        <Download className="w-5 h-5" />
        Download Resume
      </a>
    </section>
  )
}
