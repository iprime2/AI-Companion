'use client'

import { HomeIcon, PlusIcon, SettingsIcon } from 'lucide-react'
import { FC } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'

interface SidebarProps {}

const routes = [
  { icon: HomeIcon, label: 'Home', href: '/', pro: false },
  { icon: PlusIcon, label: 'Create', href: '/companion/new', pro: true },
  { icon: SettingsIcon, label: 'Settings', href: '/settings', pro: false },
]

const Sidebar: FC<SidebarProps> = ({}) => {
  const pathname = usePathname()
  const router = useRouter()

  const onNavigate = (url: string, pro: boolean) => {
    // TODO Check if user is pro

    return router.push(url)
  }

  return (
    <div className='space-y-4 flex flex-col h-full text-primary bg-secondary'>
      <div className='p-3 flex flex-1 justify-center'>
        <div className='space-y-2'>
          {routes.map((route) => (
            <div
              key={route.href}
              onClick={() => onNavigate(route.href, route.pro)}
              className={cn(
                'text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition',
                pathname === route.href && 'bg-primary/10 text-primary'
              )}
            >
              <div className='flex flex-col gap-y-2 items-center flex-1'>
                <route.icon className='h-5 w-5' />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
