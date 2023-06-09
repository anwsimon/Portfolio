import React, { lazy } from "react"
import Carousel from "react-material-ui-carousel"
import { Paper } from "@mui/material"

function Project(props) {
  return (
    <div className="font-sans-serif mt-6 bg-green-100 px-6 text-center ">
      <div className="md:grid grid-cols-2 gap-6 bg-green-100">
        <Carousel
          fullHeightHover={false}
          indicators={false}
          navButtonsProps={{
            style: { color: "#18CE66", backgroundColor: "white" },
          }}
          navButtonsWrapperProps={{
            style: { height: "120px" },
          }}
        >
          {props.item.images.map((item, i) => (
            <Paper key={i}>
              <img src={item} width={800} height={500} />
            </Paper>
          ))}
        </Carousel>
        <div className="flex items-center pt-5">
          <div>
            <h1 className="mt-3 p-2 font-sans font-bold text-4xl text-emerald-500">
              {props.item.name}
            </h1>

            <h2 className="mt-3 p-4 font-sans font-bold text-xl ">
              {props.item.title}
            </h2>
            <span className="font-sans"></span>
            <p className="mt-3 text-md text-gray-700 pb-10 ">
              {props.item.description}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
