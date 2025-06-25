
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 lg:px-20 py-6 shadow-md">
      <div className="text-xl font-bold">MyPortfolio</div>
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Projects</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
