const Header = (props) =>{
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
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
  console.log(props)
  return(
    <div>
        <Part part = {props.par1} exercise = {props.exe1} />
        <Part part = {props.par2} exercise = {props.exe2} />
        <Part part = {props.par3} exercise = {props.exe3} /> 
    </div>
  )
}
const Total = (props) =>{
  console.log(props)
  return(
    <div>
      <p>El total de exercicios es de: {props.exe1 + props.exe2 + props.exe3}</p>
    </div>
  ) 
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundaments of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14
  
  return (
    <div>
      <Header course = {course} />
      <Content par1 = {part1} par2 = {part2} par3 = {part3} exe1 = {exercise1} exe2 = {exercise2} exe3 = {exercise3} />
      <Total exe1 = {exercise1} exe2 = {exercise2} exe3 = {exercise3}/>
    </div>
  )
}
export default App