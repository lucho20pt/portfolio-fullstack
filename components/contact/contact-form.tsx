'use client'

import React, { useState } from 'react'
import { ButtonPrimary } from '@/components/ui/tailwindcss-buttons'

export const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="flex flex-col w-full p-4">
      <header>
        <h2 className="text-xl md:text-3xl font-extralight uppercase mb-10 text-slate-400 max-w-3xl text-center">
          Contact Me
        </h2>
      </header>
      {/* {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>} */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-12">
        <div className="mb-4">
          <label className="block text-foreground text-lg font-extrabold dark:text-slate-400">
            Name*
          </label>
          <input
            type="text"
            className="w-full p-2 border-gray-300 mt-1 bg-transparent border-b-2 border-secondary focus:border-indigo-500 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-foreground text-lg font-extrabold dark:text-slate-400">
            Email*
          </label>
          <input
            type="email"
            className="w-full p-2 border-gray-300 mt-1 bg-transparent border-b-2 border-secondary focus:border-indigo-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-foreground text-lg font-extrabold dark:text-slate-400">
            Message*
          </label>
          <textarea
            className="w-full p-2 border-gray-300 mt-1 bg-transparent border-b-2 border-secondary focus:border-indigo-500 outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="text-center">
          <ButtonPrimary
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Send Message
          </ButtonPrimary>
        </div>
      </form>
    </section>
  )
}
