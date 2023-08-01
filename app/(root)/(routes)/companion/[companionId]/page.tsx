import { FC } from 'react'

import prismadb from '@/lib/prismadb'
import CompanionForm from '@/components/CompanionForm'

interface CompanionPageProps {
  params: {
    companionId: string
  }
}

const CompanionPage: FC<CompanionPageProps> = async ({ params }) => {
  // TODO : Check subscription

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
    },
  })

  const categories = await prismadb.category.findMany()

  return <CompanionForm initialData={companion} categories={categories} />
}

export default CompanionPage
