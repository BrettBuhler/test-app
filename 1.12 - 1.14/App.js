import { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}
const Display = ({anecdote, votes}) => {
  return(
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
  </div>
  )
}
const MostVotes = ({anecdotes, ratings}) => {
  const num = ratings.indexOf(Math.max(...ratings))
  return (
    <>
    <h2>Anecdote with most votes</h2>
    <p>{anecdotes[num]}</p>
    <p>has {ratings[num]} votes</p>
    </>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development',
    'It\'s OK to figure out murder mysteries, but you shouldn\'t need to figure out code. You should be able to read it.',
    'Prolific programmers contribute to certain disaster.',
    'Before software can be reusable it first has to be usable.'
  ]
  const [ratings, setRatings] = useState([0,0,0,0,0,0])
  const [selected, setSelected] = useState(Math.floor(Math.random() * (anecdotes.length - 1)))
  const nextAnecdote = () => setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))
  const vote = () => setRatings(ratings.map((x,i) => {
    if (i == selected){
      return x + 1
    }
    return x
  }))
  return (
    <>
    <Display anecdote={anecdotes[selected]} votes={ratings[selected]} />
    <Button onClick={vote} text='vote' />
    <Button onClick={nextAnecdote} text='next anecdote' />
    <MostVotes anecdotes={anecdotes} ratings={ratings}/>
    </>
  )
}

export default App