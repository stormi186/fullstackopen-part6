import React from 'react'
import { voteFor } from '../reducers/anecdoteReducer' 
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

  const vote = (id) => {
    const anecdote = props.visibleAnecdotes.find(x => x.id === id)
    props.voteFor(id)
    props.setNotification(`You voted '${anecdote.content}'`, 5)
  }

  return(
    <div>
      {props.visibleAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const anecdotesToShow = ({ anecdotes, filter }) => {
  if ( filter === '' ) {
    return anecdotes
  }
  else return anecdotes.filter(anecdote => {return anecdote.content.toLowerCase().includes(filter)})
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteFor,
  setNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList