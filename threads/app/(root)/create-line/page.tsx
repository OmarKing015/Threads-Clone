import { currentUser } from "@clerk/nextjs";
import { redirect, usePathname, useRouter } from "next/navigation";




async function Page() {
    const user = await currentUser();
    if (!user) return null; // If no user is logged in

    const userInfo = await fetchUser(user.id);
    return (
        <h1 className="head-text">Create Line</h1>
    )

}

export default Page;