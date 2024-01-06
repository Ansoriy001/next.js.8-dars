import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen pt-8 px-8">
      <h1 className="text-5xl text-center text-red-500 mb-5">Hello</h1>
      <p className="text-lg mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        labore! Officia amet quia nostrum consequuntur soluta asperiores beatae
        adipisci nisi, pariatur accusantium temporibus dolor nulla architecto
        distinctio ut quo perferendis?
      </p>
      <Link
        className="bg-green-900 flex items-center hover:bg-green-600 text-white px-8 py-4 rounded-lg"
        href="/about"
      >
        About
      </Link>
    </main>
  );
}
