const Header = (props) =>{
  console.log(props);
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}
const Part = (props) =>{
  console.log(props)
  return(
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  )
}
const Content = (props) =>{
  return(
    <div>
      <Part part = {props.course.parts[0].name} exercise = {props.course.parts[0].exercise} />
      <Part part = {props.course.parts[1].name} exercise = {props.course.parts[1].exercise} />
      <Part part = {props.course.parts[2].name} exercise = {props.course.parts[2].exercise} /> 
    </div>
  )
}
const Total = (props) =>{
  console.log(props)
  return(
    <div>
      <p>El total de exercicios es de: {props.course.parts[0].exercise + props.course.parts[1].exercise + props.course.parts[2].exercise}</p>
    </div>
  ) 
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course}/>
    </div>
  )
}
export default App