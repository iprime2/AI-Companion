'use client'

import { FC } from 'react'
import { SparkleIcon } from 'lucide-react'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { UserButton } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { Button } from '@/components//ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import MobileSidebar from '@/components//MobileSidebar'
import { useProModal } from '@/hooks/useProModal'

interface NavbarProps {
  isPro: boolean
}

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
})

const Navbar: FC<NavbarProps> = ({ isPro }) => {
  const proModal = useProModal()
  return (
    <div className='fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16'>
      <div className='flex items-center'>
        <MobileSidebar />
        <Link href='/'>
          <h1
            className={cn(
              'hidden md:block text-xl md:text-3xl font-bold text-primary',
              font.className
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>
      <div className='flex items-center gap-x-2'>
        {!isPro && (
          <Button size='sm' variant='premium' onClick={proModal.onOpen}>
            Upgrade{' '}
            <SparkleIcon className='w-4 h-4 fill-white text-white ml-2' />
          </Button>
        )}
        <ThemeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  )
}

export default Navbar
