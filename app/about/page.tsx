import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Loomli",
  description:
    "Learn more about Loomli and our mission to revolutionize candidate outreach.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-4xl font-bold">About Loomli</h1>
      <p className="mb-4 text-lg">
        Loomli is a cutting-edge SaaS platform that creates hyper-personalized
        outreach videos to help headhunters source hard-to-get candidates.
      </p>
      <p className="mb-4 text-lg">
        Our mission is to revolutionize the recruitment process by providing
        tools that enable personalized, engaging candidate outreach at scale.
      </p>
    </main>
  );
}
