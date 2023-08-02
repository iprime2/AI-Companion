import { FC } from 'react'
import prismadb from '@/lib/prismadb'

import SearchInput from '@/components/SearchInput'
import Categories from '@/components/Categories'
import Companion from '@/components/Companion'

interface RootPageProps {
  searchParams: {
    categoryId: string
    name: string
  }
}

const RootPage: FC<RootPageProps> = async ({ searchParams }) => {
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name,
      },
    },
    orderBy: {
      createdAt: 'desc',
    },

    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  })

  const categories = await prismadb.category.findMany()
  return (
    <div className='h-full p-4 space-y-2'>
      <SearchInput />
      <Categories data={categories} />
      <Companion data={data} />
    </div>
  )
}

export default RootPage
