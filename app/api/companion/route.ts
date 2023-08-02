import { Companion } from '@prisma/client'
import { currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const user = await currentUser()

    const { src, name, description, instructions, seed, categoryId } = body

    if (!user || !user.id || !user.firstName) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (
      !src ||
      !name ||
      !description ||
      !instructions ||
      !seed ||
      !categoryId
    ) {
      return new NextResponse('Missing required Fields', { status: 400 })
    }

    // TODO : Check for subscription

    const companion = await prismadb.companion.create({
      data: {
        src,
        name,
        description,
        instructions,
        seed,
        categoryId,
        userId: user.id,
        userName: user.firstName,
      },
    })

    return NextResponse.json(companion)
  } catch (error) {
    console.log('[COMPANION]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
