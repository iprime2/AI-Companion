'use client'

import { ChangeEvent, FC, FormEvent } from 'react'
import { ChatRequestOptions } from 'ai'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { SendHorizonalIcon } from 'lucide-react'

interface ChatFormProps {
  isLoading: boolean
  input: string
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void
}

const ChatForm: FC<ChatFormProps> = ({
  isLoading,
  input,
  handleInputChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className='border-t border-primary/10 py-4 flex items-center gap-x-2'
    >
      <Input
        disabled={isLoading}
        value={input}
        onChange={handleInputChange}
        placeholder='Type your message here...'
        className='rounded-lg bg-primary/10'
      />
      <Button disabled={isLoading} variant='ghost'>
        <SendHorizonalIcon className='w-6 h-6' />
      </Button>
    </form>
  )
}

export default ChatForm
