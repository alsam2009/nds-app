import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {
  NonFoundPage,
  CardPage,
  FilterPage,
  AdditionalBar,
  Menu,
  FavouritesPage
} from './components/components';
import { navbar, colors } from './nds.config';

function App() {
  return (
    <div className='mx-auto dark:bg-base-500 2xl:w-[1349px]'>
      <AdditionalBar />
      <Menu />
      <Routes>
        <Route
          path='/'
          exact
          element={
            <FilterPage
              name={[navbar[4], navbar[1]]}
              color={[colors[1], colors[5]]}
            />
          }
        />
        <Route path='/card/:id' element={<CardPage />} />
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
          element={<FilterPage name={navbar[2]} color={colors[5]} />}
        />
        <Route path='/favourites/' element={<FavouritesPage name={navbar[3]} color={colors[1]} />} />
        <Route path='*' element={<NonFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
