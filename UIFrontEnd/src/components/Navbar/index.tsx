import { useState } from 'react';
import Logo from '../App/Logo';

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const data = [
    {
      path: '/',
      title: 'Wines Records',
    },
    {
      path: '/',
      title: 'Vines Records',
    },
  ];

  return (
    <header className="bg-blue-200 py-1">
      <div className="flex flex-wrap items-center justify-between sm: py-4 mx-10">
        <Logo />
        <button
          className="items-center block px-3 py-4 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}>
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}>
          {data.map((link) => (
            <a
              className="block mt-4 text-black font-bold text-lg no-underline hover:underline hover:text-my-grey md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              href={link.path}>
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
