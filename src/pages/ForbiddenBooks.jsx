import React from 'react';
import './ForbiddenBooks.css';

const books = [
  {
    title: 'The Necronomicon',
    description: 'A book of forbidden knowledge said to drive readers insane...',
  },
  {
    title: 'The Book of Enoch',
    description: 'Ancient text banned by many religious authorities for revealing secrets of angels...',
  },
  {
    title: 'Codex Gigas',
    description: 'Also known as the Devil’s Bible. Legend says it was written in a single night...',
  },
  {
    title: 'The Voynich Manuscript',
    description: 'An undeciphered manuscript filled with unknown symbols and strange plants...',
  },
  {
    title: 'The Picatrix',
    description: 'An ancient grimoire on astrology and magic, feared by many throughout history...',
  },
  {
    title: 'The Book of Thoth',
    description: 'Said to be written by the Egyptian god himself, containing powerful spells...',
  },
  {
    title: 'The Grand Grimoire',
    description: 'A manual of demonic summoning that many consider too dangerous to read...',
  },
  {
  title: 'The Red Dragon',
  description: 'A legendary occult book used for summoning spirits and commanding demons. Its origins are shrouded in blood and secrecy...',
}
];

const ForbiddenBooks = () => {
  return (
    <div className="forbidden-background">
    <div className="forbidden-books-page text-light">
      <h1 className="text-center mb-5">The Forbidden Books</h1>
      <div className="books-list">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ForbiddenBooks;
