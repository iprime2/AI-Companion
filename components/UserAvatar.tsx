import { Avatar, AvatarImage } from './ui/avatar'
import { useUser } from '@clerk/nextjs'

const UserAvatar = ({}) => {
  const { user } = useUser()
  return (
    <Avatar className='h-12 w-12'>
      <AvatarImage alt='Bot' src={user?.imageUrl} />
    </Avatar>
  )
}

export default UserAvatar
