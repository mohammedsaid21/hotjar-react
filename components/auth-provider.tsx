'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Session, SupabaseClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

type AuthContextType = {
  session: Session | null
  supabase: SupabaseClient | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  supabase: null,
  loading: true,
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [supabase] = useState(() => createClientComponentClient())
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const setServerSession = async () => {
      const { data: { session: serverSession } } = await supabase.auth.getSession()
      setSession(serverSession)
      setLoading(false)
    }

    setServerSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setLoading(false)
        router.refresh() // Force a refresh of the current route
      }
    )

    return () => subscription.unsubscribe()
  }, [supabase, router])

  return (
    <AuthContext.Provider value={{ session, supabase, loading }}>
      {children}
    </AuthContext.Provider>
  )
}