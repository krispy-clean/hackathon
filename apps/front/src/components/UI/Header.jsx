import Link from "next/link"

const Header = () => (
  <nav>
    <div className="flex items-center justify-between p-6 border-b-1">
      <h2>
        <Link href="/">Krispy Freelance</Link>
      </h2>
      <ul className="flex gap-8">
        <li>
          <Link href="/">Trouver un job</Link>
        </li>
        <li>
          <Link href="/">Trouver un emploi</Link>
        </li>
      </ul>
      <button className="bg-blue-600 text-white py-2 px-2 rounded">Se connecter</button>
    </div>
  </nav>
)

export default Header
