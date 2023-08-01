import SearchInput from '@/components/SearchInput'
import { UserButton } from '@clerk/nextjs'
import { FC } from 'react'

interface RootPageProps {}

const RootPage: FC<RootPageProps> = ({}) => {
  return (
    <div className='h-full p-4 space-y-2'>
      <SearchInput />
    </div>
  )
}

export default RootPage
