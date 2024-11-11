import React from 'react'

type FormFieldProps = {
  label: string
  id: string
  name: string
  value: string
  type?: string | undefined
  rows?: number | undefined
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export const FormFieldText = ({
  label,
  id,
  name,
  value,
  type,
  onChange,
}: FormFieldProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="subject"
        className="block text-foreground text-lg font-extrabold dark:text-slate-400"
      >
        {label}
      </label>
      <input
        className="w-full p-2 mt-1 bg-transparent
        border-b-2 border-secondary focus:border-indigo-500 outline-none"
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export const FormFieldTextArea = ({
  label,
  id,
  name,
  value,
  rows,
  onChange,
}: FormFieldProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-foreground text-lg font-extrabold dark:text-slate-400"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        className="w-full p-2 mt-1 bg-transparent border-b-2 border-secondary focus:border-indigo-500 outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
