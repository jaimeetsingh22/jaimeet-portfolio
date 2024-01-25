import data from "../assets/data.json"
import { motion } from 'framer-motion';


const TimeLine = () => {

  const jsElement = []

  for (let i = 0; i < data['js-projects'].length; i++) {
    jsElement.push(
      {
        name: data['js-projects'][i].title,
        date: data['js-projects'][i].date,
      },
    )
  }
  const projectElement = []

  for (let i = 0; i < data['js-projects'].length; i++) {
    projectElement.push(
      {
        name: data['projects'][i].title,
        date: data['projects'][i].date,
      },
    )
  }

  console.log(projectElement);

  return (
    <div id='timeline'>
      <div className="timelineBox">
        <TimelineItem name={jsElement[0].name} i={0} delay={1} date={jsElement[0].date} position={"-100%"} />
        <TimelineItem name={jsElement[1].name} i={1} delay={1.2} date={jsElement[1].date} position={"-100%"} />
        <TimelineItem name={jsElement[2].name} i={2} delay={1.3} date={jsElement[2].date} position={"-100%"} />
        <TimelineItem name={jsElement[3].name} i={3} delay={1.4} date={jsElement[3].date} position={"-100%"} />
        <TimelineItem name={jsElement[4].name} i={4} delay={1.5} date={jsElement[4].date} position={"-100%"} />
        <TimelineItem name={projectElement[0].name} i={5} delay={1} date={projectElement[0].date} position={"-100%"} />
        <TimelineItem name={projectElement[1].name} i={6} delay={1.2} date={projectElement[1].date} position={"-100%"} />
        <TimelineItem name={projectElement[2].name} i={7} delay={1.3} date={projectElement[2].date} position={"-100%"} />
        <TimelineItem name={projectElement[3].name} i={8} delay={1.4} date={projectElement[3].date} position={"-100%"} />
        <TimelineItem name={projectElement[4].name} i={9} delay={1} date={projectElement[4].date} position={"-100%"} />
      </div>
    </div>
  )
}

export default TimeLine

const TimelineItem = ({ name, date, i, delay, position }) => (
  <motion.div initial={
    {
      opacity: 0,
      x: position,
    }} whileInView={{
      opacity: 1,
      x: 0,
    }} transition={{
      delay: delay
    }}

    className={`timelineItem ${i % 2 === 0 ? "leftTimeline" : "rightTimeline"}`} >
    <div>
      <h2>{name}</h2>
      <p>{date}</p>
    </div>
  </motion.div>
)
