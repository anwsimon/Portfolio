import React from "react"
import Project from "./Project"
import nudge_1 from "../../public/nudge.jpg"
import nudge_2 from "../../public/nudge_2.jpg"
import nudge_3 from "../../public/nudge_3.jpg"
import plantit_1 from "../../public/PlantIt.jpg"
import plantit_2 from "../../public/PlantIt_2.jpg"
import plantit_3 from "../../public/PlantIt_3.jpg"
import cat_1 from "../../public/Cat_snaps_1.jpg"
import cat_2 from "../../public/Cat_snaps_2.jpg"
import plants_1 from "../../public/plants_1.jpg"
import plants_2 from "../../public/plants_2.jpg"

var items = [
  {
    name: "nudge",
    title: "Fullstack Mobile Developer",
    description:
      "A React Native task management application. Features friending functionality, real-time messaging between users in groups with the help of Firestore, and Google Maps recommendations on the closest places to find items on your lists.",
    stack: "React Native - Redux - Firebase/Firestore - Expo Go - Node.js",
    images: [nudge_1, nudge_2, nudge_3],
  },
  {
    name: "Cat Snaps from Space",
    title: "Sole Developer",
    description:
      "An Instagram-style page which pulls imagery and captions from the NASA Photo of the Day API using GraphQL.",
    images: [cat_1, cat_2],
  },
  {
    name: "PlantIt",
    title: "Sole Developer",
    description:
      "A mobile app to create a personal library of houseplants. Users can track their plant's growth by creating a photo library of their plants, record watering days, and upload photos to be identified with the PlantId API.",
    images: [plantit_1, plantit_2, plantit_3],
  },
  {
    name: "Plants for Cat People",
    title: "Fullstack Developer",
    description:
      "An e-commerce site for cat-friendly plants. Uses JWTs for authorization, with separate roles and api access for admins and users.",
    images: [plants_1, plants_2],
  },
]

class ProjectsHome extends React.Component {
  render() {
    return (
      <div>
        {items.map((item, i) => (
          <Project key={i} item={item} />
        ))}
      </div>
    )
  }
}

export default ProjectsHome
