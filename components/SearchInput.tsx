'use client'

import { SearchIcon } from 'lucide-react'
import { FC } from 'react'
import { Input } from './ui/input'
import { useRouter, useSearchParams } from 'next/navigation'

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = ({}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  return (
    <div className='relative'>
      <SearchIcon className='absolute top-3 left-4 w-4 h-4 text-muted-foreground' />

      <Input placeholder='Search...' className='pl-10 bg-primary/10' />
    </div>
  )
}

export default SearchInput
