import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-orange-200-00 py-4">
      <div className="container mx-auto">
        <nav>
          <ul className="flex gap-4">
            <li className="gap-4 text-xl text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="gap-4 text-xl text-white">
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
