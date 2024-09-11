import Image from "next/image";
import Link from "next/link";
import { FaPlaneDeparture } from "react-icons/fa";
import { Button } from "../ui/button";
import { getSession } from "@/lib/getSession";
import { logOut } from "@/app/actions/user";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPinIcon, CalendarIcon, UsersIcon, UserIcon } from "lucide-react";
import AvatarMenu from "../ui/avatarMenu";
const Header = async () => {
  const session = await getSession();
  const user = session?.user;

  const AuthButtons = () => (
    <div className="flex items-center space-x-2">
      <Link href="/signin" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2">
        Sign in
      </Link>
      <Link href="/signup" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">
        Sign up
      </Link>
    </div>
  );
  return (
    <nav className="mx-auto flex items-center justify-between p-3 lg:px-8 shadow-sm" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          {" "}
          {/* Use Link for homepage */}
          <span className="sr-only">Your Company</span>
          <Image
            src="/images/logo.svg"
            width={40}
            height={40}
            alt="Your Company Logo"
            priority // Prioritize loading for better user experience
          />
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <nav className="flex items-center justify-between space-x-4">
          <div> {user?.name} </div>
          {!user ? (
            <>
              <AuthButtons />
            </>
          ) : (
            <>
              <Button variant="outline" className="hidden sm:flex">
                <FaPlaneDeparture className="mr-2 h-4 w-4" />
                Create New Trip
              </Button>
              <AvatarMenu />
              <form action={logOut}>
                <Button>Sign out</Button>
              </form>
            </>
          )}
        </nav>
      </div>
    </nav>
  );
};

export default Header;
