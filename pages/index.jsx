import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <li>
        <Link href="/portfolio">Protfolio</Link>
      </li>
      <li>
        <Link href="/clients">clients</Link>
      </li>
    </div>
  );
}

export default HomePage;
