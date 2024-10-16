// components/SignOut.tsx
"use client";

import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SignOut() {
  const { supabase } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
      router.push("/");
    }
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
}
