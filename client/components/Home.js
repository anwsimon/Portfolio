import React from "react";

class Home extends React.Component {
  render(){
    return (
      <div>
        <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
          <div className="grid justify-center items-center order-1 col-span-1">
            <img className = "w-80 h-80 object-cover bg-bottom" src="anna.JPG" alt="" />
          </div>
          <body className="font-serif mt-8 md:mt-0 lg:justify-end col-span-2">
            <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi there, I'm Anna</h1>
              <p className="text-xl text-gray-800 text-center md:text-left">
                Current Software Engineer.<br></br>
                Former Creative Strategist.<br></br>
                Lover of knitting, cooking, DIY home improvement, and biking.<br></br>
              </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:bg-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </body>
        </div>
      </div>
    )
  }
}

export default Home

