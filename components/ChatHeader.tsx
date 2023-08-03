import { FC } from 'react'
import { Companion, Messaage } from '@prisma/client'
import {
  ChevronLeftIcon,
  Edit2Icon,
  MessagesSquareIcon,
  MoreVerticalIcon,
  Trash2Icon,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

import { Button } from './ui/button'
import BotAvatar from './BotAvatar'
import { useUser } from '@clerk/nextjs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { toast } from './ui/use-toast'

interface ChatHeaderProps {
  companion: Companion & {
    messages: Messaage[]
    _count: {
      messages: number
    }
  }
}

const ChatHeader: FC<ChatHeaderProps> = ({ companion }) => {
  const router = useRouter()
  const { user } = useUser()

  const onDelete = async () => {
    try {
      await axios.delete(`/api/companion/${companion.id}`)

      toast({
        description: 'Chat deleted successfully.',
      })

      router.refresh()
      router.push('/')
    } catch (error) {
      toast({
        variant: 'destructive',
        description: 'Something went wrong. Please try again later.',
      })
    }
  }

  return (
    <div className='flex w-full justify-between items-center border-b border-primary/10 pb-4'>
      <div className='flex gap-x-2 items-center'>
        <Button size='icon' variant='ghost' onClick={() => router.back()}>
          <ChevronLeftIcon className='w-8 h-8' />
        </Button>
        <BotAvatar src={companion.src} />
        <div className='flex flex-col gap-y-1'>
          <div className='flex items-center gap-x-2'>
            <p className='font-bold'>{companion.name}</p>
            <div className='flex items-center text-xs text-muted-foreground'>
              <MessagesSquareIcon className='w-3 h-3 mr-1' />
              {companion._count.messages}
            </div>
          </div>
          <p className='text-xs text-muted-foreground'>
            Created By {companion.userName}
          </p>
        </div>
      </div>
      {user?.id === companion.userId && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size='icon' variant='secondary'>
              <MoreVerticalIcon className='w-6 h-6' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem
              onClick={() => router.push(`/companion/${companion.id}`)}
              className='cursor-pointer hover:bg-primary/10'
            >
              <Edit2Icon className='w-4 h-4 mr-2' />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={onDelete}
              className='cursor-pointer hover:bg-primary/10'
            >
              <Trash2Icon className='w-4 h-4 mr-2' />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}

export default ChatHeader
