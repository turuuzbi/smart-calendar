import { useRouter } from "next/navigation";

export const Header = () => {
  const { push } = useRouter();
  return (
    <div className="fixed top-0 left-0 bg-white w-screen h-10 flex items-center px-5">
      <div className="cursor-pointer" onClick={() => push("/")}>
        Home
      </div>
    </div>
  );
};
