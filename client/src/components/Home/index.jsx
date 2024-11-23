import React from 'react'
import NotesView from '../NotesView';
import { HomePage, IntroContainer } from './styledComponent';

const Home = () => {
  return (
    <HomePage>
      <IntroContainer>
        <h2>Welcome to Personal Notes Manager.</h2>
      </IntroContainer>
      <NotesView />
    </HomePage>
  )
}

export default Home