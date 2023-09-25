import { getServerSession } from "next-auth";
import FollowingBar from "./components/FollowingBar/page";
import PostList from "./components/PostList/page";
import SideBar from "./components/SideBar/page";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <main>
      <section className="w-full flex flex-col md:flex-row max-w-[850px]">
        <article className="w-full basis-3/4 min-w-0">
          <FollowingBar />
          <PostList />
        </article>
        {user && (
          <article className="basis-1/4 ml-8">
            <SideBar user={user} />
          </article>
        )}
      </section>
    </main>
  );
}
