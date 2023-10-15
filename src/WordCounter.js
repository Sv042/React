
import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim().split(/\s+/).length;

  return (
    <div>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
        rows={4}
        cols={50}
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
