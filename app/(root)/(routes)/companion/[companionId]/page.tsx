import { FC } from 'react'

import prismadb from '@/lib/prismadb'
import CompanionForm from '@/components/CompanionForm'
import { auth, redirectToSignIn } from '@clerk/nextjs'

interface CompanionPageProps {
  params: {
    companionId: string
  }
}

const CompanionPage: FC<CompanionPageProps> = async ({ params }) => {
  const { userId } = auth()
  // TODO : Check subscription

  if (!userId) {
    return redirectToSignIn()
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
      userId,
    },
  })

  const categories = await prismadb.category.findMany()

  return <CompanionForm initialData={companion} categories={categories} />
}

export default CompanionPage
