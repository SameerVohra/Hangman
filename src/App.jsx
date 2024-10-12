import { useEffect, useState } from 'react';
import './App.css';
import Words from './components/Words';
import wordsAndHints from "./wordsAndHints.json";
import Head from './components/hangman/Head';
import Stomach from './components/hangman/Stomach';
import LeftHand from './components/hangman/LeftHand';
import RightHand from './components/hangman/RightHand';
import LeftLeg from './components/hangman/LeftLeg';
import RightLeg from './components/hangman/RightLeg';

function App() {  
  const [selectedChar, setSelectedChar] = useState('');
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [guessArr, setGuessArr] = useState([]);
  const [wrong, setWrong] = useState(-1);
  const [isOver, setIsOver] = useState(false);
  const [won, setWon] = useState(false);
  const [guessRem, setGuessRem] = useState(6);

  const resetGame = () => {
    const n = wordsAndHints.length;
    const randomIdx = Math.floor(Math.random() * n);
    setWord(wordsAndHints[randomIdx].word);
    setHint(wordsAndHints[randomIdx].hint);
    setGuessArr(Array(wordsAndHints[randomIdx].word.length).fill('_'));
    setWrong(0);
    setIsOver(false);
    setWon(false);
    setGuessRem(6);
  };

  const handleSelect = (char) => {
    setSelectedChar(char);
  };

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (!selectedChar || isOver) return;

    const lowerCaseWord = word.toLowerCase();
    const isCorrectGuess = lowerCaseWord.includes(selectedChar.toLowerCase());

    if (isCorrectGuess) {
      const updatedGuessArr = guessArr.map((item, idx) => {
        return lowerCaseWord[idx] === selectedChar.toLowerCase() ? selectedChar : item;
      });
      setGuessArr(updatedGuessArr);
    } else {
      setWrong(prev => prev + 1);
      setGuessRem(prev => prev - 1);
    }

    if (wrong + 1 === 6) {
      setWon(false);
      setIsOver(true);
    }

    setSelectedChar(''); 
  }, [selectedChar, word, guessArr, wrong, isOver]);

  useEffect(() => {
    if (guessArr.join('') === word) {
      setWon(true);
      setIsOver(true);
    }
  }, [guessArr, word]);

  const handleRestart = () => {
    resetGame();
  };

  return (
    <div className='flex justify-center items-center flex-col space-y-10 p-5 bg-gray-200 min-h-screen'>
      
    <div className='relative flex flex-col items-center'>
      {wrong >= 1 && <Head className="relative top-0" />}
      {wrong >= 2 && <Stomach className="mt-2" />}
      
      <div className='flex justify-between items-stretch w-full relative mt-20'>
        {wrong >= 5 && <LeftHand />}
        {wrong >= 6 && <RightHand />}
      </div>
      
      <div className='flex justify-between items-stretch w-full absolute mt-56'>
        {wrong >= 3 && <LeftLeg />}
        {wrong >= 4 && <RightLeg className="ml-5" />}
      </div>
    </div>
      {won ? (
        <>
          <h1 className='text-3xl font-bold text-green-600'>YOU WON!</h1>
          <button onClick={handleRestart} className="mt-5 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Play Again</button>
        </>
      ) : isOver ? (
        <>
          <h1 className='text-3xl font-bold text-red-600'>YOU LOST! The word was "<span className="font-semibold">{word}</span>".</h1>
          <button onClick={handleRestart} className="mt-5 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Play Again</button>
        </>
      ) : (
        <>
          <h2 className='text-xl text-gray-800'>Guesses Remaining: <span className="font-bold">{guessRem}</span></h2>
          <h1 className='text-2xl text-black font-semibold'>{hint}</h1>
          <div className='flex flex-row gap-5 text-black text-3xl'>
            {guessArr.map((item, idx) => (
              <h1 key={idx} className='text-center w-10'>{item}</h1>
            ))}
          </div>
          <Words onCharacterSelect={handleSelect} />
        </>
      )}
    </div>
  );
}

export default App;
