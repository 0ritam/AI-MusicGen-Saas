import Link from "next/link";
import { auth } from "~/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import CreateSong from "~/components/create";
import { SongPanel } from "~/components/create/create-panel";

export default async function HomePage() {
  
    const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }
  
    return (
    <div className ="flex h-full flex-col lg:flex-row">
        <SongPanel/>
    </div>
  );
}
