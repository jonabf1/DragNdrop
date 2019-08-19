import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import GlobalStyled from './styles/global';
import Header from './components/header/index';
import Board from './components/Board/index';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <GlobalStyled />
    </DndProvider>
  );
}

export default App;
