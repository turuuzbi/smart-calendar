import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const Header = () => {
  const { push } = useRouter();
  return (
    <div className="fixed top-0 left-0 bg-white w-screen h-10 flex items-center px-5">
      <div className="cursor-pointer" onClick={() => push("/")}>
        Home
      </div>
      <div className="fixed top-0 right-0 h-10 px-5 flex items-center">
        <SignedOut>
          <SignUpButton>
            <button className="cursor-pointer">Sign Up</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};
