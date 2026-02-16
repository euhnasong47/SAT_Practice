import { useState, useEffect } from 'react';
import './App.css';
import FlashCard from './components/Flashcard';
import Navigation from './components/Navigation';
import AddWordForm from './components/AddWordForm';
import type { VocabWord } from './types/VocabWord';
import { defaultWords } from './data/defaultWords';

function App() {
  const [words, setWords] = useState<VocabWord[]>(() => {
    const saved = localStorage.getItem("vocabWords");
    return saved ? JSON.parse(saved) : defaultWords;
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showingDefinition, setShowingDefinition] = useState(false);

  // Save words to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("vocabWords", JSON.stringify(words));
  }, [words]);

  const flipCard = () => {
    setShowingDefinition(!showingDefinition);
  };

  const nextWord = () => {
    setCurrentIndex((currentIndex + 1) % words.length);
    setShowingDefinition(false);
  };

  const previousWord = () => {
    setCurrentIndex((currentIndex - 1 + words.length) % words.length);
    setShowingDefinition(false);
  };

  const addWord = (newWord: VocabWord) => {
    setWords([...words, newWord]);
  };

  const currentWord = words[currentIndex];

  return (
    <div className="container">
      <h1>SAT Vocabulary Builder</h1>
      
      <div className="word-counter">
        Card {currentIndex + 1} of {words.length}
      </div>

      <FlashCard 
        word={currentWord}
        showingDefinition={showingDefinition}
        onFlip={flipCard}
      />

      <Navigation 
        onPrevious={previousWord}
        onNext={nextWord}
      />

      <AddWordForm onAddWord={addWord} />
    </div>
  );
}

export default App;