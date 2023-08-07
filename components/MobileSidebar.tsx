import { FC } from 'react'
import { MenuIcon } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Sidebar from './Sidebar'

interface MobileSidebarProps {
  isPro: boolean
}

const MobileSidebar: FC<MobileSidebarProps> = ({ isPro }) => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4'>
        <MenuIcon className='h-6 w-6' />
      </SheetTrigger>
      <SheetContent side='left' className='p-0 bg-secondary w-20 pt-10'>
        <Sidebar isPro={isPro} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
