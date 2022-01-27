import React from "react"

class Personal extends React.Component {
  render(){
    return (


        <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
          <div className="grid justify-center items-center order-1 col-span-1">
            <img className = "w-80 h-80 object-cover bg-bottom" src="smiley.png" alt="" />
          </div>
          <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
            <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Some things I do for fun</h1>
              <p className="text-xl text-gray-800 text-center md:text-left">
               photography<br></br>
                knitting <br></br>
                DIY home improvement<br></br>
              </p>
          </div>
        </div>
    )
  }
}

export default Personal
