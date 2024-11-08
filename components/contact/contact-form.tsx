'use client'

import React, { useState } from 'react'
import { ButtonPrimary } from '@/components/ui/tailwindcss-buttons'
import { sendEmail } from '@/app/actions'

export const ContactForm = () => {
  const [subject, setSubject] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!subject || !name || !email || !message || !consent) {
      setError('Please fill out all fields and agree to the consent.')
      return
    }
    setError('') // Clear previous error message

    try {
      const response = await sendEmail(subject, name, email, message, consent)
      // console.log('response', response)

      if (response.success) {
        setSuccess('Thank you! Your message has been sent.')
        setSubject('')
        setName('')
        setEmail('')
        setMessage('')
        setConsent(false)
      } else {
        setError(response.message)
      }
    } catch (error) {
      setError('Error sending message. Please try again later.')
      return error
    }
  }

  return (
    <section className="flex flex-col w-full p-4">
      <header>
        <h2 className="text-xl md:text-3xl font-extralight uppercase mb-10 text-slate-400 max-w-3xl text-center">
          Contact Me
        </h2>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-12">
        <div className="mb-4">
          <label htmlFor="subject" className="block text-foreground text-lg font-extrabold dark:text-slate-400">
            Subject*
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full p-2 border-gray-300 mt-1 bg-transparent border-b-2 border-secondary focus:border-indigo-500 outline-none"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-foreground text-lg font-extrabold dark:text-slate-400">
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border-gray-300 mt-1 bg-transparent border-b-2 border-secondary focus:border-indigo-500 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-foreground text-lg font-extrabold dark:text-slate-400">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border-gray-300 mt-1 bg-transparent autofill:!bg-indigo-500 border-b-2 border-secondary focus:border-indigo-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-foreground text-lg font-extrabold dark:text-slate-400">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border-gray-300 mt-1 bg-transparent border-b-2 border-secondary focus:border-indigo-500 outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className='cursor-pointer'
          />
          <label htmlFor="consent" className="ml-2 text-foreground text-sm dark:text-slate-400 cursor-pointer">
            I consent that I have read the terms & privacy policy.
          </label>
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
      <div>
        {error && (
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#333',
              color: 'text-red-500',
              padding: '10px 20px',
              borderRadius: '4px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 1000,
              transition: 'opacity 0.3s ease-in-out',
            }}
          >
            {error}
          </div>
        )}
        {success && (
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#333',
              color: 'text-green-500',
              padding: '10px 20px',
              borderRadius: '4px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 1000,
              transition: 'opacity 0.3s ease-in-out',
            }}
          >
            {success}
          </div>
        )}
      </div>
    </section>
  )
}
