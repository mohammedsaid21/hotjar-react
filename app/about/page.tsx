import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Loomli',
  description: 'Learn more about Loomli and our mission to revolutionize candidate outreach.',
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Loomli</h1>
      <p className="text-lg mb-4">
        Loomli is a cutting-edge SaaS platform that creates hyper-personalized outreach videos 
        to help headhunters source hard-to-get candidates.
      </p>
      <p className="text-lg mb-4">
        Our mission is to revolutionize the recruitment process by providing tools that enable 
        personalized, engaging candidate outreach at scale.
      </p>
    </main>
  )
}