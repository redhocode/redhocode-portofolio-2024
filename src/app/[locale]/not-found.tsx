import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center gap-4">
      <h2 className="font-blod text-3xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
