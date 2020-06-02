import React from 'react';
import postReducer from '../reducers/postReducer'
import commentReducer from '../reducers/commentReducer'

const initialState = { 
  postState: {
    posts: [],
  },
  commentState: {
    comments: [{
      id:1,
      userID: 1,
      postId:1,
      text: 'continut comm1',
    },
    {
      id:2,
      userID: 1,
      postId:1,
      text: 'continut comm2',
    },
    {
      id:3,
      userID: 1,
      postId:1,
      text: 'continut comm3',
    },
    {
      id:4,
      userID: 1,
      postId:1,
      text: 'continut comm4',
    }]
  },

}
const Store = React.createContext();
const Dispatch = React.createContext();

const combinedReducers = (state, action) => ({
  postState: postReducer(state.postState, action),
  commentState: commentReducer(state.commentState, action),
})

function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer(combinedReducers, initialState)

  return (
    <Store.Provider value={state}>
      <Dispatch.Provider value={dispatch}>
        {children}
      </Dispatch.Provider>
    </Store.Provider>
  )
}

function useState() {
  const context = React.useContext(Store)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

function useDispatch() {
  const context = React.useContext(Dispatch)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

function useStore() {
  return [useState(), useDispatch()]
}

export { StateProvider, useState, useDispatch, useStore }