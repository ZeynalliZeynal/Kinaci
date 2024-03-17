import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Select({ value, onChange, options }) {
  return (
    <div>
      <span className="cursor-pointer">Value</span>
      <button type="button" className="group size-4 text-orange-500">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.6"
            y="1.8"
            width="60"
            height="60"
            rx="12"
            fill="currentColor"
            className="scale-0 origin-center group-hover:scale-100 transition-transform"
          />
          <path
            d="M15.6 47.8L47.6 15.8"
            stroke="#052841"
            strokeWidth="4"
            strokeLinecap="round"
            className="group-hover:stroke-white"
          />
          <path
            d="M47.6 47.8L15.6 15.8"
            stroke="#052841"
            strokeWidth="4"
            strokeLinecap="round"
            className="group-hover:stroke-white"
          />
          <path
            d="M2 52V12C2 6.47715 6.47715 2 12 2H32H52C57.5229 2 62 6.47715 62 12V52C62 57.5228 57.5229 62 52 62H12C6.47715 62 2 57.5228 2 52Z"
            stroke="#052841"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <span></span>
      <span className="size-4">
        <svg
          width="64"
          height="33"
          viewBox="0 0 64 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.6967 9.68198L35.182 27.1967C33.4246 28.9541 30.5754 28.9541 28.818 27.1967L11.3033 9.68197C8.46846 6.84714 10.4762 2 14.4853 2H32H49.5147C53.5238 2 55.5315 6.84714 52.6967 9.68198Z"
            stroke="#052841"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option.label}</li>
        ))}
      </ul>
    </div>
  )
}
