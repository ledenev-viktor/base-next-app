import Link from "next/link";

export const Header = () => {
  return (
    <header className="b-header container">
      <Link href="/">home</Link>
      <Link href="/blog">blog</Link>
      <Link href="/about">about</Link>
    </header>
  );
};
