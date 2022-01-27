import * as React from 'react';


const pages = [
  ['Home', '/home'],
  ['Projects', '/projects'],
  ['Personal', '/personal']
];

const Navbar = () => {

  return (
    <div>
    <img src="smiley.png" className="fixed h-20 w-20 object-cover"></img>

    <nav className="flex sm:justify-center space-x-4">
      {pages.map(([title, url]) => (
        <a href={url} key={title} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-green hover:bg-green">{title}</a>
      ))}
    </nav>
  </div>

  )
}
export default Navbar;
