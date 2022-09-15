import { useState } from 'react'

const Heading = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Heading2 = ({text}) => {
  return(
    <th>{text}</th>
  )
}

const Stats = (props) => {
  let count = props.good + props.neutral + props.bad
  let positive = props.good / count
  let average = (props.good + (props.bad * -1))/count
  if (count > 0){
    return (
      <ul>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text ='neutral' value={props.neutral} />
        <StatisticLine text ='bad' value={props.bad} />
        <StatisticLine text ='average' value={average} />
        <StatisticLine text ='positive' value={positive} />
      </ul>
    )
  }
  return (
    <p>No feedback given</p>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = ({ onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)

  return (
    <div>
      <Heading text='give feedback'/>
      <Button onClick={goodClick} text='good' />
      <Button onClick={neutralClick} text='neutral' />
      <Button onClick={badClick} text='bad' />
      <Heading2 text='statistics'/>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App