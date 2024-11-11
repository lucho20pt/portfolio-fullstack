import React from 'react'

export type NotificationProps = {
  message: string
  type?: 'success' | 'error'
}

export const Notification = ({ message, type }: NotificationProps) => {
  if (!message) return null

  const textColor =
    type === 'success' ? 'text-green-500' : 
    type === 'error' ? 'text-red-500' : 
    'text-white'

  return (
    <div
      className={`${textColor} fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 p-4 rounded-lg shadow-lg z-50 transition-opacity`}
    >
      {message}
    </div>
  )
}
