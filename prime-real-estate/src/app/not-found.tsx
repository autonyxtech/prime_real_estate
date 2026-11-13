import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><span>404</span><h1>This page isn’t on the map.</h1><p>Let’s get you back to finding your place in Ahmedabad.</p><Link href="/" className="button button-primary">Back to home</Link></main>;
}
