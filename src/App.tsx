import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Toast as ToastType, ToastMessage } from 'primereact/toast';
import { Toast } from 'primereact/toast';
import { useEffect, useState, useRef } from 'react';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { RickAndMortyCharacter, RickAndMortCharacterList } from '../types';
import errorHandler from './helpers/errorHandler';

import Loader from './components/Loader';
function App() {
  const [characters, setCharacters] = useState<RickAndMortCharacterList>([]);
  const [favorites, setFavorites] = useState<Array<boolean>>([]);
  const toast = useRef<ToastType>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [nameFilter, setNameFilter] = useState<string>('');

  const handleNameFilterSubmit = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      getCharacters();
    }
  };

  const getCharacters = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?name=${nameFilter}`
      );
      setCharacters(response.data.results);
    } catch (error: any) {
      const toastData: ToastMessage = errorHandler(error);
      toast.current!.show(toastData);
    }
    setLoading(false);
  };
  const toggleFavorite = (characterIndex: number) => {
    const favoritesClone = [...favorites];
    if (favoritesClone[characterIndex]) {
      delete favoritesClone[characterIndex];
    } else {
      favoritesClone[characterIndex] = true;
    }
    setFavorites(favoritesClone);
  };
  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='App min-h-screen pt-10 pb-14 pl-2 pr-2'>
      {!loading && characters.length < 1 && (
        <div className='text-center'>
          <p>No characters to display</p>
        </div>
      )}

      <div className='mb-4 '>
        <div className='w-full lg:w-3/4 ml-auto mr-auto mb-2 flex justify-center items-stretch'>
          <input
            value={nameFilter}
            onChange={(event) => {
              setNameFilter(event.target.value);
            }}
            onKeyDown={handleNameFilterSubmit}
            className=' border-gray-400 border-2 w-3/4 md:w-2/4 rounded-r-none border-r-0 text-sm rounded-lg '
            type='search'
            placeholder=' Search by name'
          />
          <button
            onClick={getCharacters}
            className='bg-gray-600 rounded-r-lg text-sm text-white pl-4 pr-4 pt-2 pb-2 '
            type='button'
          >
            Search
          </button>
        </div>
        <p className='text-center text-xs text-gray-500'>
          Clear the search field and click the search button to reset filter
        </p>
      </div>

      {loading && <Loader />}

      {!loading && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {characters.map(
            (singleCharacter: RickAndMortyCharacter, index: number) => {
              return (
                <div key={index} className='shadow-lg'>
                  <div>
                    <img
                      className='w-full h-auto '
                      alt={singleCharacter.name}
                      src={singleCharacter.image}
                    />

                    <div className='text-left p-2 text-xs lg:text-sm'>
                      <div className='mb-2'>
                        <button
                          onClick={() => {
                            toggleFavorite(index);
                          }}
                          type='button'
                          className='text-xl '
                        >
                          <FontAwesomeIcon
                            className={`${
                              favorites[index] ? 'text-red-600' : ''
                            } hover:text-red-600`}
                            icon={favorites[index] ? faHeart : faHeartRegular}
                          />
                        </button>
                      </div>
                      <h4 className='mb-2'>
                        {' '}
                        Character Name - {singleCharacter.name}
                      </h4>
                      <p className='mb-2'> Status - {singleCharacter.status}</p>
                      <p className='mb-2'>
                        {' '}
                        Species - {singleCharacter.species}
                      </p>
                      <p className='mb-2'> Gender -{singleCharacter.gender}</p>
                      <p className='mb-2'>
                        {' '}
                        Origin - {singleCharacter.origin.name}
                      </p>
                      <p className='mb-2'>
                        {' '}
                        Location - {singleCharacter.location.name}
                      </p>
                      <p className='mb-2'>
                        {' '}
                        No of Episodes Featured -
                        {singleCharacter.episode.length}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
      <Toast ref={toast} />
    </div>
  );
}

export default App;
