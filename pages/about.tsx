import Link from "next/link";
export default function About() {
  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">About</h1>
      <Link href="/">Home</Link>
    </div>
  );
}