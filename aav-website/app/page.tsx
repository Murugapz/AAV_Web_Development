import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to AAV</h1>
      <Link href="/about-us" style = { { textDecoration: "underline" } } >About Us</Link>
    </main>
  );
}
