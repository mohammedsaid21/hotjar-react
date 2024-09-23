'use client'

import { useState, useRef } from 'react'
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
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  linkedinUrl: z.string()
    .min(1, { message: "LinkedIn URL is required" })
    .refine(
      (val) => /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]{5,30}\/?$/.test(val),
      {
        message: "Please enter a valid LinkedIn personal profile URL (e.g., linkedin.com/in/example123)",
      }
    ),
  jobPostingUrl: z.string()
    .regex(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z]{2,63})([/\w .-]*)*\/?$/,
      { message: "Please enter a valid URL with a TLD" }
    ),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
})

interface SeeItForYourselfProps {
  className?: string
}

export default function SeeItForYourself({ className }: SeeItForYourselfProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const jobPostingUrlRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      linkedinUrl: '',
      jobPostingUrl: '',
      email: '',
    },
    mode: 'onBlur',
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setMessage('')

    try {
      await new Promise(resolve => setTimeout(resolve, 3000))
      setMessage('Success! Check your email for the personalized video.')
      console.log(values)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setMessage(`An error occurred: ${errorMessage}. Please try again.`);
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, nextRef?: React.RefObject<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (nextRef && nextRef.current) {
        nextRef.current.focus();
      } else {
        const allFieldsFilled = Object.values(form.getValues()).every(value => value !== '');
        if (allFieldsFilled) {
          form.handleSubmit(onSubmit)();
        }
      }
    }
  };

  return (
    <div className={cn("rounded-lg w-full mx-auto shadow-2xl overflow-hidden relative z-10 p-6", className)}>
      <h2 className="text-2xl font-bold text-center mb-6">See It For Yourself</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="linkedinUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">LinkedIn Profile</FormLabel>
                <FormControl>
                  <div className="flex justify-stretch rounded-md shadow-sm">
                    <Input
                      placeholder="https://linkedin.com/in/paul-graham"
                      {...field}
                      error={!!form.formState.errors.linkedinUrl}
                      className="w-full p-3"
                      onFocus={() => form.clearErrors('linkedinUrl')}
                      onKeyDown={(e) => handleKeyDown(e, jobPostingUrlRef)}
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  Enter your LinkedIn profile username (e.g., johndoe)
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobPostingUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Job Posting URL</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="https://job-boards.greenhouse.io/notion/jobs/6089918003"
                    {...field} 
                    error={!!form.formState.errors.jobPostingUrl}
                    onFocus={() => form.clearErrors('jobPostingUrl')}
                    ref={jobPostingUrlRef}
                    onKeyDown={(e) => handleKeyDown(e, emailRef)}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Your Email Address</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="paul.graham@notion.so"
                    {...field} 
                    error={!!form.formState.errors.email}
                    onFocus={() => form.clearErrors('email')}
                    ref={emailRef}
                    onKeyDown={(e) => handleKeyDown(e)}
                  />
                </FormControl>
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
  )
}