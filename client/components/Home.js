import React from "react"
import Basebar from "./Base"

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:space-y-10 md:grid grid-cols-2 justify-center md:py-40">
          <div className="grid justify-center items-center order-1 col-span-1">
            <img className="w-80 h-80 object-cover" src="anna.JPG" alt="" />
          </div>
          <div className="mt-8 md:mt-0 lg:justify-end justify-items-center col-span-1 items-center my-10 max-w-xs">
            <h1 className="text-4xl text-gray-800  md:text-left font-bold mb-6">
              Hello! I'm Anna.
            </h1>
            <p className="text-xl mb-10 text-gray-800 items-center md:text-left max-w-xs">
              I'm a software developer with a background in creative strategy. I
              love to work on supportive teams doing challenging work. Currently
              under NDA in the social justice space. I'd love to hear from you!
            </p>
          </div>
        </div>
        <Basebar />
      </div>
    )
  }
}

export default Home
