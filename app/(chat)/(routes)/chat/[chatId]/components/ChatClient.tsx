'use client'

import { Companion, Messaage } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { FC, FormEvent, useState } from 'react'
import { useCompletion } from 'ai/react'

import ChatHeader from '@/components/ChatHeader'
import ChatForm from '@/components/ChatForm'
import ChatMessages from '@/components/ChatMessages'
import { ChatMessageProps } from '@/components/ChatMessage'

interface ChatClientProps {
  companion: Companion & {
    messages: Messaage[]
    _count: {
      messages: number
    }
  }
}

const ChatClient: FC<ChatClientProps> = ({ companion }) => {
  const router = useRouter()
  const [messages, setMessages] = useState<ChatMessageProps[]>(
    companion.messages
  )

  const { input, isLoading, handleInputChange, handleSubmit, setInput } =
    useCompletion({
      api: `/api/chat/${companion.id}`,
      onFinish(prompt, completion) {
        const systemMessage: ChatMessageProps = {
          role: 'system',
          content: completion,
        }
        setMessages((messages) => [...messages, systemMessage])
        setInput('')

        router.refresh()
      },
    })

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage: ChatMessageProps = {
      role: 'user',
      content: input,
    }

    setMessages((messages) => [...messages, userMessage])

    handleSubmit(e)
  }

  return (
    <div className='flex flex-col h-full p-4 space-y-4'>
      <ChatHeader companion={companion} />
      <ChatMessages
        companion={companion}
        messages={messages}
        isLoading={isLoading}
      />
      <ChatForm
        isLoading={isLoading}
        input={input}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default ChatClient
