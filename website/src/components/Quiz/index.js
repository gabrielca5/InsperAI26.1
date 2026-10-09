import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Quiz({ question, options }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    if (selected !== null) return;
    setSelected(index);
  };

  return (
    <div className={styles.quiz}>
      <p className={styles.question}>{question}</p>
      <div className={styles.options}>
        {options.map((option, index) => {
          let className = styles.option;
          if (selected !== null) {
            if (index === selected) {
              className += option.correct
                ? ` ${styles.correct}`
                : ` ${styles.incorrect}`;
            } else if (option.correct) {
              className += ` ${styles.correct}`;
            } else {
              className += ` ${styles.disabled}`;
            }
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => handleSelect(index)}
              disabled={selected !== null}
            >
              <span className={styles.optionText}>{option.text}</span>
              {selected !== null && index === selected && (
                <span className={styles.feedback}>{option.feedback}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
