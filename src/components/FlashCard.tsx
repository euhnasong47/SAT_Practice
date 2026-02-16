import type { VocabWord } from '../types/VocabWord';

interface FlashCardProps {
  word: VocabWord;
  showingDefinition: boolean;
  onFlip: () => void;
}

export default function FlashCard({ word, showingDefinition, onFlip }: FlashCardProps) {
  return (
    <div className="card" onClick={onFlip}>
      <h2>{word.word}</h2>
      <p className={showingDefinition ? "" : "hidden"}>
        {word.definition}
      </p>
    </div>
  );
}