'use server'

import { cookies } from 'next/headers'

type SessionData = {
  userId: string
  username: string
  // email: string
}

export async function setSessionData(data: SessionData) {
  cookies().set('session', JSON.stringify(data), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  })
}

export async function getSessionData(): Promise<SessionData | null> {
  const session = cookies().get('session')
  if (!session) return null
  return JSON.parse(session.value)
}