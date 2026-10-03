import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import type { UserRole } from '@/generated/prisma/enums'
import { prisma } from '@/lib/prisma'

export async function getCurrentUser() {
  const { userId } = await auth()
  if (!userId) return null

  const clerkUser = await currentUser()
  if (!clerkUser) return null

  const email = clerkUser.emailAddresses[0]?.emailAddress
  if (!email) return null

  return prisma.user.upsert({
    where: { id: userId },
    update: { email },
    create: { id: userId, email, role: 'STUDENT' satisfies UserRole },
  })
}

export async function requireRole(...roles: UserRole[]) {
  const user = await getCurrentUser()
  if (!user) redirect('/sign-in')
  if (!roles.includes(user.role)) redirect('/')
  return user
}
