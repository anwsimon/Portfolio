import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-2 justify-center md:py-40">
          <div className="grid justify-center items-center order-1 col-span-1">
            <img
              className="w-80 h-80 object-cover bg-bottom hover:border"
              src="anna.JPG"
              alt=""
            />
          </div>
          <div className="mt-8 md:mt-0 lg:justify-end justify-items-center col-span-1 items-center my-10">
            <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">
              Hello! I'm Anna.
            </h1>
            <p className="text-xl mb-10text-gray-800 text-center justify-items-center md:text-left">
              I'm a software developer with a background in creative strategy. I
              maintain a focus on the end-user in all of my work. I'm currently
              working under NDA in the social justice space. I'd love to hear
              from you!
            </p>
          </div>
        </div>
        <div className="flex sm:justify-center ">
          <a href="mailto:anna.w.simon1@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 hover:bg-green mt-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
