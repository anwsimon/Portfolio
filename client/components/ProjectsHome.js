import React from "react"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

var items = [
  {
      name: "PlantIt",
      title: "Sole Developer",
      description: "A mobile application for maintaining a personal database of houseplants and keeping up with their watering schedules."
  },
  {
      name: "nudge",
      title: "Fullstack Developer",
      description: "A robust mobile application for shared task management and optimized task completion."
  },
  {
    name: "Plants for Cat People",
    title: "Fullstack Developer",
    description: "An e-commerce site for cat-friendly plants."
}
]

class ProjectsHome extends React.Component {

  render(){
    return (
      <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
  }
}

export default ProjectsHome

function Item(props) {
    return (
        <Paper>
            <img></img>
            <h2>{props.item.name}</h2>
            <h3>{props.item.title}</h3>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
