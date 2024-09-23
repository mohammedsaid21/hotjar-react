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
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  linkedinUrl: z.string()
    .regex(/^[a-zA-Z0-9-]{5,30}$/, {
      message: "Invalid LinkedIn profile URL format",
    })
    .transform(val => `https://linkedin.com/in/${val}`),
  jobPostingUrl: z.string()
    .regex(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z]{2,63})([/\w .-]*)*\/?$/,
      { message: "Please enter a valid URL with a TLD" }
    ),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
})

export default function SeeItForYourself() {
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
      setMessage('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLinkedinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const match = value.match(/(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([a-zA-Z0-9-]{5,30})\/?$/);
    if (match) {
      form.setValue('linkedinUrl', match[1]);
    } else {
      form.setValue('linkedinUrl', value);
    }
  };

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
                    <div className="flex justify-stretch rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        https://linkedin.com/in/
                      </span>                      
                      <Input
                        placeholder="paul-graham"
                        {...field}
                        onChange={handleLinkedinInputChange}
                        error={!!form.formState.errors.linkedinUrl}
                        className="w-full rounded-none rounded-r-md"
                        onFocus={() => form.clearErrors('linkedinUrl')}
                        onKeyDown={(e) => handleKeyDown(e, jobPostingUrlRef)}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Enter your LinkedIn profile username (e.g., johndoe)
                  </FormDescription>
                  <FormMessage>{form.formState.errors.linkedinUrl?.message}</FormMessage>
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
                    <Input 
                      placeholder="https://job-boards.greenhouse.io/notion/jobs/6089918003"
                      {...field} 
                      error={!!form.formState.errors.jobPostingUrl}
                      onFocus={() => form.clearErrors('jobPostingUrl')}
                      ref={jobPostingUrlRef}
                      onKeyDown={(e) => handleKeyDown(e, emailRef)}
                    />
                  </FormControl>
                  <FormMessage>{form.formState.errors.jobPostingUrl?.message}</FormMessage>
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
                    <Input 
                      placeholder="paul.graham@notion.so"
                      {...field} 
                      error={!!form.formState.errors.email}
                      onFocus={() => form.clearErrors('email')}
                      ref={emailRef}
                      onKeyDown={(e) => handleKeyDown(e)}
                    />
                  </FormControl>
                  <FormMessage>{form.formState.errors.email?.message}</FormMessage>
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