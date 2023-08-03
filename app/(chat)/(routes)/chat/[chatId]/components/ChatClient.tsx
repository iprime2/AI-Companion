'use client'

import ChatHeader from '@/components/ChatHeader'
import { Companion, Messaage } from '@prisma/client'
import { FC } from 'react'

interface ChatClientProps {
  companion: Companion & {
    messages: Messaage[]
    _count: {
      messages: number
    }
  }
}

const ChatClient: FC<ChatClientProps> = ({ companion }) => {
  return (
    <div className='flex flex-col h-full p-4 space-y-4'>
      <ChatHeader companion={companion} />
    </div>
  )
}

export default ChatClient
