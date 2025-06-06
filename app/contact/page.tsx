'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function Contact() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mblydojb', {
        method: 'POST',
        body: data, // Do not set content-type manually
      })

      if (response.ok) {
        toast.success('Message sent successfully')
        form.reset()
        setTimeout(() => router.push('/'), 1500) // wait 1.5s before redirect
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h2 className="title mb-6">Got something in mind? Let&apos;s connect.</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-md border px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="w-full rounded-md border px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border px-4 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-300"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
