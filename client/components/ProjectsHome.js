import React from "react"


var items = [
  {
      name: "nudge",
      title: "Fullstack Mobile Developer",
      description: "A robust mobile application for shared task management and optimized task completion.",
      stack: "React Native - Redux - Firebase/Firestore - Expo Go - Node.js",
      image: "nudge.png"
  },
  {
    name: "Plants for Cat People",
    title: "Fullstack Developer",
    description: "An e-commerce site for cat-friendly plants.",
    stack: "React - Redux - Express - Sequelize - Node.js",
    image: "Plants-for-cat.png"
},
{
    name: "Cat Snaps from Space",
    title: "Sole Developer",
    description: "An instagram-style page accessing imagery from the NASA Photo of the Day API.",
    stack: "React - GraphQL - Apollo Server - Express - NASA API - Node.js",
    image: "cat-snaps.png"

},
{
    name: "PlantIt",
    title: "Sole Mobile Developer",
    description: "A mobile application for maintaining a personal database of houseplants and keeping up with their watering schedules.",
    stack: "React Native - Plant.Id API - Firebase - Node.js",
    image: "PlantIt.png"
},
]

class ProjectsHome extends React.Component {

  render(){
    return (
        <div>
            {items.map( (item, i) => <Item key={i} item={item} /> )}
        </div>
    )
  }
}

export default ProjectsHome

function Item(props) {
    return (
        <div className="mt-6 p-4 bg-white px-6">
            <div className="divide-y divide-dashed divide-black">
            <div className="md:grid grid-cols-2 gap-6">
                <div>
                <img className="md:h-full object-cover" src={props.item.image} alt="" />
                </div>
                <div>
                <h1 className="my-6 text-2xl font-bold text-gray-700">{props.item.name}</h1>
                <h2 className="text-lg rounded-full bg-gray-800 text-white">{props.item.title}</h2>
                <span className="text-lg"></span>
                <p className="mt-6 text-lg text-gray-700">{props.item.description} </p>
                <p className="mt-6 text-lg text-gray-700">{props.item.stack} </p>
                </div>
            </div>
            </div>
        </div>
    )
}
