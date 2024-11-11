'use client'

import React, { useState } from 'react'
import { ButtonPrimary } from '@/components/ui/tailwindcss-buttons'
import { sendEmail } from '@/app/actions'
import {
  FormFieldText,
  FormFieldTextArea,
} from '@/components/contact/form-field'
import { Notification } from '@/components/notification'

export const ContactForm = () => {
  const [subject, setSubject] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [notificationType, setNotificationType] = useState<
    'success' | 'error'
  >()
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!subject || !name || !email || !message || !consent) {
      setError('Please fill out all fields and agree to the consent.')
      setNotificationType('error')
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
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
        setNotificationType('success')
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 3000)
      } else {
        setError(response.message)
        setNotificationType('error')
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 3000)
      }
    } catch (error) {
      setError('Error sending message. Please try again later.')
      setNotificationType('error')
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
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
        <FormFieldText
          label="Subject*"
          id="subject"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <FormFieldText
          label="Name*"
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormFieldText
          label="Email*"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormFieldTextArea
          label="Message*"
          id="message"
          name="message"
          type="text"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="cursor-pointer"
          />
          <label
            htmlFor="consent"
            className="ml-2 text-foreground text-sm dark:text-slate-400 cursor-pointer"
          >
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
      {showNotification && (
        <Notification message={error || success} type={notificationType} />
      )}
    </section>
  )
}

export default ContactForm
