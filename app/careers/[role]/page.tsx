import { roleListings } from "@/components/role-data";

export const runtime = "edge";

export default function RolePage({ params }: { params: { role: string } }) {
  // Find the job details using the job ID from the URL
  const roleDetails = roleListings.find((roleItem) => roleItem.uid === params.role);

  if (!roleDetails) {
    return <div>Role not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{roleDetails.title}</h1>
      <p className="mt-4">{roleDetails.description}</p>
      <p className="mt-2">Location: {roleDetails.location}</p>
      <a
        href={roleDetails.applyLink}
        className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white"
      >
        Apply Now
      </a>
    </div>
  );
}