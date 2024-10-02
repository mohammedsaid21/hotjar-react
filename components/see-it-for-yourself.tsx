"use client";

import { useState, useRef, RefObject } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  linkedinUrl: z
    .string()
    .min(1, { message: "LinkedIn URL is required" })
    .refine(
      (val) =>
        /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]{5,30}\/?$/.test(
          val,
        ),
      {
        message:
          "Please enter a valid LinkedIn personal profile URL (e.g., linkedin.com/in/example123)",
      },
    ),
  jobPostingUrl: z
    .string()
    .regex(/^(https?:\/\/)?([\da-z.-]+)\.([a-z]{2,63})([/\w .-]*)*\/?$/, {
      message: "Please enter a valid URL with a TLD",
    }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  script: z
    .string()
    .max(1500, { message: "Script must be 1500 characters or less" }),
});

interface SeeItForYourselfProps {
  className?: string;
}

export default function SeeItForYourself({ className }: SeeItForYourselfProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const jobPostingUrlRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const scriptRef = useRef<HTMLTextAreaElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      linkedinUrl: "",
      jobPostingUrl: "",
      email: "",
      script: "",
    },
    mode: "onBlur",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setMessage("Success! Check your email for the personalized video.");
      console.log(values);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      setMessage(`An error occurred: ${errorMessage}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    nextRef?: RefObject<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (nextRef && nextRef.current) {
        nextRef.current.focus();
      } else {
        const allFieldsFilled = Object.values(form.getValues()).every(
          (value) => value !== "",
        );
        if (allFieldsFilled) {
          form.handleSubmit(onSubmit)();
        }
      }
    }
  };

  const randomProfiles = [
    "https://linkedin.com/in/robjama/",
    "https://linkedin.com/in/velthuis/",
    "https://linkedin.com/in/michaelnolivos/",
    "https://linkedin.com/in/kevin-c-meyer/",
  ];

  const randomJobPostings = [
    "https://www.google.com/about/careers/applications/jobs/results/80114722841469638",
    "https://jobs.apple.com/en-ca/details/200565211",
    "https://www.workatastartup.com/jobs/62905",
    "https://job-boards.greenhouse.io/figma/jobs/5184792004",
  ];

  const randomEmails = [
    "john.doe@example.com",
    "jane.smith@example.com",
    "alex.johnson@example.com",
    "sam.wilson@example.com",
  ];

  const fillRandomData = (field: "linkedinUrl" | "jobPostingUrl" | "email") => {
    let randomData;
    switch (field) {
      case "linkedinUrl":
        randomData =
          randomProfiles[Math.floor(Math.random() * randomProfiles.length)];
        break;
      case "jobPostingUrl":
        randomData =
          randomJobPostings[
            Math.floor(Math.random() * randomJobPostings.length)
          ];
        break;
      case "email":
        randomData =
          randomEmails[Math.floor(Math.random() * randomEmails.length)];
        break;
    }
    form.setValue(field, randomData);
  };

  return (
    <div
      className={cn(
        "relative z-10 mx-auto my-6 w-full overflow-hidden rounded-lg px-6 py-4 shadow-2xl",
        isFocused && "shadow-[0_0_15px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <div className="-mx-6 -mt-4 mb-4 bg-primary px-6 pb-3 pt-4">
        <h1 className="mb-2 text-center text-lg tracking-tight text-primary-foreground">
          <strong>See it in action</strong>. Give us any LinkedIn profile, any
          job posting, and a script. We will generate a sample video for you and
          send it to your inbox.
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="linkedinUrl"
            render={({ field, fieldState }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-foreground">
                    Enter any LinkedIn Profile
                  </FormLabel>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => fillRandomData("linkedinUrl")}
                    className="text-xs"
                    tabIndex={-1}
                  >
                    Pick random profile
                  </Button>
                </div>
                <FormControl>
                  <div className="flex justify-stretch rounded-md shadow-sm">
                    <Input
                      placeholder="https://linkedin.com/in/paul-graham"
                      {...field}
                      error={!!fieldState.error}
                      className="w-full p-3"
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => {
                        setIsFocused(false);
                        field.onBlur();
                      }}
                      onKeyDown={(e) => handleKeyDown(e, jobPostingUrlRef)}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobPostingUrl"
            render={({ field, fieldState }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-foreground">
                    Enter a Job Posting
                  </FormLabel>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => fillRandomData("jobPostingUrl")}
                    className="text-xs"
                    tabIndex={-1}
                  >
                    Pick random job posting
                  </Button>
                </div>
                <FormControl>
                  <Input
                    placeholder="https://job-boards.greenhouse.io/notion/jobs/6089918003"
                    {...field}
                    error={!!fieldState.error}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                      setIsFocused(false);
                      field.onBlur();
                    }}
                    ref={jobPostingUrlRef}
                    onKeyDown={(e) => handleKeyDown(e, emailRef)}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="script"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-foreground">
                  Script (up to 1500 characters)
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your script here..."
                    {...field}
                    error={!!fieldState.error}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                      setIsFocused(false);
                      field.onBlur();
                    }}
                    ref={scriptRef}
                    className="h-32"
                  />
                </FormControl>
                {fieldState.error && (
                  <p className="mt-1 text-sm text-red-500">
                    {fieldState.error.message}
                  </p>
                )}
                <FormDescription>
                  {1500 - (field.value?.length || 0)} characters remaining
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-foreground">
                    Address to send video
                  </FormLabel>
                </div>
                <FormControl>
                  <Input
                    placeholder="paul.graham@notion.so"
                    {...field}
                    error={!!fieldState.error}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                      setIsFocused(false);
                      field.onBlur();
                    }}
                    ref={emailRef}
                    onKeyDown={(e) => handleKeyDown(e, scriptRef)}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Generating Video..." : "Generate Personalized Video"}
          </Button>
        </form>
      </Form>
      {message && (
        <p className="mt-4 text-center text-sm font-medium text-green-600">
          {message}
        </p>
      )}
    </div>
  );
}
