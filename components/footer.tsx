'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaLink } from 'react-icons/fa6'

export const Footer = () => {
  const [showNotification, setShowNotification] = useState(false)

  const handleCopy = async () => {
    try {
      // Copy full URL to clipboard
      await navigator.clipboard.writeText(window.location.href)
      setShowNotification(true) // Show notification

      // Hide notification after 3 seconds
      setTimeout(() => setShowNotification(false), 3000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }
  return (
    <footer className='py-5'>
      <div className="container flex flex-col text-slate-400 text-sm">
        {/* top */}
        <div className="flex flex-row items-start justify-between py-5
        border-t border-b border-secondary">
          {/* logo  */}
          <Link href="/" className="hover:text-slate-100 self-center">
            <Image
              src="/logo2.svg"
              alt="Daniel Batista"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto max-w-[50px] md:max-w-[70px] opacity-80"
            />
          </Link>

          <div className="flex flex-row items-start justify-around gap-16">
            {/* social  */}
            <nav>
              <p className="mb-4">
                <b>Social</b>
              </p>
              <ul className="flex flex-col gap-5 text-3xl hover:[&_*]:text-indigo-500">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/daniel-batista-0609a430"
                    target="_blank"
                  >
                    <FaLinkedin title="Visit my Linkedin" />
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleCopy}
                    className={`${showNotification ? 'text-indigo-500 hover:text-indigo-500' : ''}`}
                  >
                    <FaLink title="Copy Shared Link" />
                  </button>
                </li>
              </ul>
            </nav>

            {/* sitemap  */}
            <nav>
              <p className="mb-4">
                <b>Sitemap</b>
              </p>
              <ul className="flex flex-col [&_*]:mb-2 hover:[&_*]:text-indigo-500">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-row items-center justify-between py-5">
          <p className="text-center text-slate-400 text-xs">
            @Copyright 2024 Daniel Batista. All rights reserved.
          </p>

          <ul
            className="flex flex-row items-center justify-center gap-4 
            hover:[&_*]:text-indigo-500"
          >
            <li>
              <Link href="/terms">Terms</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '4px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          Copied to the clipboard!
        </div>
      )}
    </footer>
  )
}
