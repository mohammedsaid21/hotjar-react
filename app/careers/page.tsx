"use client";

import OpenRoles from "@/components/open-roles";

export default function Careers() {
  return (
    <section className="container mx-auto p-8">
      <h1 className="mb-4 text-4xl font-bold">Join Our Team</h1>
      <p className="mb-8 text-lg">
        We are a young, dynamic startup on a mission to revolutionize the way
        recruiters connect with candidates. Our goal is to make outreach less
        painful and more effective by leveraging cutting-edge technology to
        create hyper-personalized videos.
      </p>
      <h2 className="mb-4 text-3xl font-semibold">Our Mission</h2>
      <p className="mb-8 text-lg">
        At our core, we believe in empowering recruiters to build meaningful
        connections with candidates. Our platform is designed to streamline the
        outreach process, making it more efficient and impactful.
      </p>
      <h2 className="mb-4 text-3xl font-semibold">Our Values</h2>
      <ul className="mb-8 list-inside list-disc">
        <li className="text-lg">
          Innovation: We embrace new ideas and technologies to stay ahead.
        </li>
        <li className="text-lg">
          Collaboration: We believe in the power of teamwork and open
          communication.
        </li>
        <li className="text-lg">
          Integrity: We are committed to honesty and transparency in all our
          interactions.
        </li>
        <li className="text-lg">
          Customer Focus: We prioritize the needs and success of our users.
        </li>
      </ul>
      <h2 className="mb-4 text-3xl font-semibold">Current Opportunities</h2>
      <OpenRoles />
    </section>
  );
}
