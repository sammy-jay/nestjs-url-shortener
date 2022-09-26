import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-6 bg-white flex justify-between">
      <ul className="flex items-center font-semibold text-xl space-x-6">
        <li className="cursor-pointer">
          <Link href="/">UShort</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/links">Links</Link>
        </li>
      </ul>
      <ul className="flex items-center space-x-4">
        <li>
          <a href="#" className="bg-gray-200 py-2 px-4 rounded-full ">
            <span className="text-sm text-gray-400 mr-2">Logged in as:</span>
            <span className="font-semibold text-gray-800">Sammy</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
