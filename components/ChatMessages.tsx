'use client'

import { ElementRef, FC, useEffect, useRef, useState } from 'react'

import { Companion } from '@prisma/client'
import ChatMessage, { ChatMessageProps } from './ChatMessage'

interface ChatMessagesProps {
  companion: Companion
  isLoading: boolean
  messages: ChatMessageProps[]
}

const ChatMessages: FC<ChatMessagesProps> = ({
  messages,
  companion,
  isLoading,
}) => {
  const scrollRef = useRef<ElementRef<'div'>>(null)
  const [fakeLoading, setFakeLoading] = useState(
    messages.length === 0 ? true : false
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
  })

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className='flex-1 overflow-auto pr-4'>
      <ChatMessage
        isLoading={fakeLoading}
        src={companion.src}
        role='system'
        content={`You are now chatting with ${companion.name}, ${companion.description}`}
      />
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          role={message.role}
          content={message.content}
          src={companion.src}
        />
      ))}
      {isLoading && <ChatMessage role='system' src={companion.src} isLoading />}
      <div ref={scrollRef} />
    </div>
  )
}

export default ChatMessages
