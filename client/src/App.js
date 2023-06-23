import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CardContext } from './context/cardContext';
import {
  NonFoundPage,
  CardPage,
  FilterPage,
  AdditionalBar,
  Menu,
  FavouritesPage,
  SearchPage
} from './components/components';
import { navbar, colors } from './nds.config';

function App() {
  const [cardData, setCardData] = useState()

  return (
    <div className='mx-auto dark:bg-base-500 2xl:w-[1349px]'>
      <CardContext.Provider value={{cardData, setCardData}}>
        <AdditionalBar />
        <Menu />
        <Routes>
          <Route
            path='/'
            exact element={<FilterPage name={[navbar[4], navbar[1]]} color={[colors[1], colors[5]]}/>}
          />
          <Route
            path='/card/:id'
            element={<CardPage />}
          />
          <Route
            path='/important/'
            element={<FilterPage name={navbar[4]} color={colors[1]} />}
          />
          <Route
            path='/novelty/'
            element={<FilterPage name={navbar[5]} color={colors[2]} />}
          />
          <Route
            path='/survey/'
            element={<FilterPage name={navbar[6]} color={colors[3]} />}
          />
          <Route
            path='/interesting/'
            element={<FilterPage name={navbar[7]} color={colors[4]} />}
          />
          <Route
            path='/events/'
            element={<FilterPage name={navbar[8]} color={colors[5]} />}
          />
          <Route
            path='/search/'
            element={<SearchPage name={navbar[2]} color={colors[5]} />}
          />
          <Route
            path='/favourites/'
            element={<FavouritesPage name={navbar[3]} color={colors[1]} />}
          />
          <Route
            path='*'
            element={<NonFoundPage />}
          />
        </Routes>
      </CardContext.Provider>
    </div>
  );
}

export default App;
