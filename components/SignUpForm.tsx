'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import GoogleSignInButton from './GoogleSignIn'
import { useRouter } from 'next/navigation'
import { useAuth } from './AuthProvider'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { session, supabase } = useAuth()

  useEffect(() => {
    if (session) {
      router.replace('/') // Use replace instead of push
    }
  }, [session, router])

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!supabase) {
      setError('Supabase client not initialized')
      return
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        console.error('Error signing up:', error.message)
        setError(error.message)
      } else {
        console.log('Signed up successfully!')
        setError('Please check your email to confirm your account.')
        // The redirection will be handled by the useEffect hook after email confirmation
      }
    } catch (err) {
      console.error('Unexpected error during sign up:', err)
      setError('An unexpected error occurred. Please try again.')
    }
  }

  if (session) {
    return null // or a loading spinner
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="cursor-text"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="cursor-text"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full cursor-pointer hover:cursor-pointer">Sign Up</Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center flex-col gap-2">
        <Link href="/signin" className="w-full">
          <Button variant="outline" className="w-full cursor-pointer hover:cursor-pointer">
            Already have an account? Sign in
          </Button>
        </Link>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            Or continue with
          </span>
        </div>
        <GoogleSignInButton />
      </CardFooter>
    </Card>
  )
}