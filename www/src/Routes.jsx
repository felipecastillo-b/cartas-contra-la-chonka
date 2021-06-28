import React from 'react'
import { Routes as BrowserRoutes, Route } from 'react-router-dom'
import Home from '@/views/Home'
import DeckList from '@/views/DeckList'
import NewGameForm from '@/views/NewGameForm'
import JoinGame from '@/views/JoinGame'
import Game from '@/views/Game'

export default function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/decks" element={<DeckList />} />
      <Route path="/newgame" element={<NewGameForm />} />
      <Route path="/join/:id" element={<JoinGame />} />
      <Route path="/game/:id" element={<Game />} />
    </BrowserRoutes>
  )
}
