import { useRouter } from "next/navigation";
import { roleListings } from "@/components/role-data";

export default function OpenRoles() {
  const router = useRouter();

  const handleCardClick = (uid: string) => {
    router.push(`/careers/${uid}`);
  };

  return (
    <div className="grid gap-6">
      {roleListings.map((role) => (
        <div
          key={role.uid}
          className="cursor-pointer rounded-lg border p-4 shadow-sm"
          onClick={() => handleCardClick(role.uid)}
        >
          <h3 className="text-2xl font-bold">{role.title}</h3>
          <p className="text-lg">{role.description}</p>
          <p className="text-sm text-muted-foreground">{role.location}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick(role.uid);
            }}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}
