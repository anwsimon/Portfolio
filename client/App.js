import React from "react";
import AppRoutes from "./store/routes";
import '../dist/output.css';


const App = () => {
  return (
    <div>
        <nav className="flex sm:justify-center space-x-4">
      {[
        ['Home', '/dashboard'],
        ['Team', '/team'],
        ['Projects', '/projects'],
        ['Reports', '/reports'],
      ].map(([title, url]) => (
        <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
      ))}
    </nav>
        <AppRoutes />
    </div>
  )
}

export default App
