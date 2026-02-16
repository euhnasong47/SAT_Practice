import { useState } from 'react';
import type { VocabWord } from '../types/VocabWord';

interface AddWordFormProps {
  onAddWord: (word: VocabWord) => void;
}

export default function AddWordForm({ onAddWord }: AddWordFormProps) {
  const [newWord, setNewWord] = useState("");
  const [newDefinition, setNewDefinition] = useState("");

  const handleSubmit = () => {
    const wordValue = newWord.trim();
    const definitionValue = newDefinition.trim();

    if (wordValue === "" || definitionValue === "") {
      alert("Please fill in both fields.");
      return;
    }

    onAddWord({
      word: wordValue,
      definition: definitionValue
    });

    setNewWord("");
    setNewDefinition("");
    alert("Word added successfully!");
  };

  return (
    <div className="add-section">
      <h3>Add a New Word</h3>
      <input
        type="text"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
        placeholder="Enter word"
      />
      <input
        type="text"
        value={newDefinition}
        onChange={(e) => setNewDefinition(e.target.value)}
        placeholder="Enter definition"
      />
      <button onClick={handleSubmit}>Add Word</button>
    </div>
  );
}