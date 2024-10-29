import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaLink } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <div className="border-t-2 border-secondary py-10">
      
      <div className="container flex flex-row items-center justify-between text-slate-400 text-sm">
        <Link href="/" className='hover:text-slate-100'>
          <Image
            src="/logo2.svg"
            alt="Daniel Batista"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto max-w-[50px] md:max-w-[70px] opacity-80"
          />
        </Link>

        <div className=" flex flex-row gap-20">
          <div>
            <p className="mb-4">
              <b>Social</b>
            </p>
            <ul className="flex flex-col gap-5 text-3xl hover:[&_*]:text-slate-100">
              <li>
                <Link href="https://www.linkedin.com/in/daniel-batista-0609a430" target="_blank">
                  <FaLinkedin title="Visit my Linkedin" />
                </Link>
              </li>
              <li>
                <Link href="" target="_blank">
                  <FaLink title="Copy shared link" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4">
              <b>Sitemap</b>
            </p>
            <ul className="flex flex-col [&_*]:mb-2 hover:[&_*]:text-slate-100">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Projects</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-slate-400 text-sm py-4">@Copyright 2024</p>
    </div>
  )
}
