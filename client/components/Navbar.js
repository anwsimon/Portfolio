import * as React from "react"

const pages = [
  ["Home", "/home"],
  ["Projects", "/projects"],
]

const Navbar = () => {
  return (
    <div className="flex items-center">
      <img src="smiley.png" className="object-cover w-20 h-20"></img>

      <nav className="flex sm:justify-center space-x-4 p-4">
        {pages.map(([title, url]) => (
          <a
            href={url}
            key={title}
            className="rounded-lg px-3 py-2 text-slate-700 text-lg hover:bg-green"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  )
}
export default Navbar
