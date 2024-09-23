'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import Input from '@/components/ui/input'

const formSchema = z.object({
  linkedinUrl: z.string()
    .regex(/^[a-zA-Z0-9-]{5,30}$/, {
      message: "Invalid LinkedIn profile URL format",
    })
    .transform(val => `https://linkedin.com/in/${val}`),
  jobPostingUrl: z.string().url({
    message: "Please enter a valid URL",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
})

export default function SeeItForYourself() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      linkedinUrl: '',
      jobPostingUrl: 'https://',
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setMessage('')

    // Simulate API call to generate and send video
    try {
      await new Promise(resolve => setTimeout(resolve, 3000)) // Simulate 3-second delay
      setMessage('Success! Check your email for the personalized video.')
      console.log(values)
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">See It For Yourself</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-6">
            <FormField
              control={form.control}
              name="linkedinUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn Profile</FormLabel>
                  <FormControl>
                    <div className="flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        https://linkedin.com/in/
                      </span>
                      <Input
                        placeholder="johndoe"
                        {...field}
                        className="rounded-none rounded-r-md"
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Enter your LinkedIn profile username (e.g., johndoe)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobPostingUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Posting URL</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Generating Video...' : 'Generate Personalized Video'}
            </Button>
          </form>
        </Form>
        {message && (
          <p className="mt-4 text-center text-sm font-medium text-green-600">{message}</p>
        )}
      </div>
    </section>
  )
}