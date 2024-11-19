'use client'

import React, { useState } from 'react'
import { ButtonPrimary } from '@/components/ui/tailwindcss-buttons'
import { sendEmail } from '@/app/actions'
import {
  FormFieldText,
  FormFieldTextArea,
} from '@/components/contact/form-field'
import { Notification } from '@/components/notification'
import { HeadingPrimary } from '@/components/ui/headings'

export const ContactForm = () => {
  // set form data
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    message: '',
    consent: false,
  })

  // set error messages
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error' | undefined,
  })

  //  handle form change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as
      | HTMLInputElement
      | (HTMLTextAreaElement & { checked: boolean })
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  // handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { subject, name, email, message, consent } = formData

    if (!subject || !name || !email || !message || !consent) {
      setNotification({
        show: true,
        message: 'Please fill out all fields and agree to the consent.',
        type: 'error',
      })
      setTimeout(() => setNotification({ ...notification, show: false }), 3000)
      return
    }

    try {
      const response = await sendEmail(subject, name, email, message, consent)

      if (response.success) {
        setFormData({
          subject: '',
          name: '',
          email: '',
          message: '',
          consent: false,
        })
        setNotification({
          show: true,
          message: 'Thank you! Your message has been sent.',
          type: 'success',
        })
      } else {
        setNotification({
          show: true,
          message: response.message,
          type: 'error',
        })
      }
    } catch (error) {
      setNotification({
        show: true,
        message: 'Error sending message. Please try again later.',
        type: 'error',
      })
      return error
    }

    setTimeout(() => setNotification({ ...notification, show: false }), 3000)
  }

  const { subject, name, email, message, consent } = formData

  return (
    <div className='w-full flex flex-col max-w-2xl px-4 gap-10'>
      <HeadingPrimary>Contact Me</HeadingPrimary>

      <form
        name="contact"
        onSubmit={handleSubmit}
        className="flex flex-col gap-12"
      >
        <FormFieldText
          label="Subject*"
          id="subject"
          name="subject"
          type="text"
          value={subject}
          onChange={handleChange}
        />
        <FormFieldText
          label="Name*"
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        />
        <FormFieldText
          label="Email*"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <FormFieldTextArea
          label="Message*"
          id="message"
          name="message"
          rows={3}
          value={message}
          onChange={handleChange}
        />

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={consent}
            onChange={handleChange}
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
      {notification.show && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  )
}

export default ContactForm
