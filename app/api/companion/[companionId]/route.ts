import { auth, currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb'
import { checkSubscription } from '@/lib/subscription'

export async function PATCH(
  req: Request,
  { params }: { params: { companionId: string } }
) {
  try {
    const body = await req.json()
    const user = await currentUser()

    const { src, name, description, instructions, seed, categoryId } = body

    if (!params.companionId) {
      return new NextResponse('Missing companionId', { status: 400 })
    }

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

    const isPro = await checkSubscription()

    if (!isPro) {
      return new NextResponse('Pro Subscription id required', { status: 403 })
    }

    const companion = await prismadb.companion.update({
      where: {
        id: params.companionId,
        userId: user.id,
      },
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

export async function DELETE(
  req: Request,
  { params }: { params: { companionId: string } }
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const companion = await prismadb.companion.delete({
      where: {
        id: params.companionId,
        userId,
      },
    })

    return NextResponse.json(companion)
  } catch (error) {
    console.log('[COMPANION_DELETE]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
