import { prismaClient } from "@repo/db/client";
export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div>
      <h2>Hello world For all</h2>
      {user?.name}
      {user?.email}
    </div>
  );
}
