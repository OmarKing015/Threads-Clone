
import Link from "next/link"
import Image from "next/image"
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import { Organization } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";
function Topbar() {
    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <Image alt="logo" width={28} height={28} src="/assets/logo.svg" />
                <p className="text-light-1  max-xs:hidden">Lines</p>
            </Link>
            <div className="felx items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image
                                    src="/assets/logout.svg"
                                    alt="logout"
                                    width={24} height={24}
                                />
                            </div>
                        </SignOutButton>
                    </SignedIn>

                </div>
                <OrganizationSwitcher appearance={{ baseTheme: dark, elements: { organizationSwitcherTrigger: "py-2 px-4" } }} />
            </div>
        </nav>
    )
}
export default Topbar;