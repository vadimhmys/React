import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);

  

  function handleClick() {
    flushSync(() => {
      if (index < catList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });

    selectedRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button
          onClick={handleClick}>
          Next
        </button>
      </nav>
      <div>
        <ul style={{ display: 'flex' }}>
          {catList.map((cat, i) => (
            <li
              ref={index === i ? selectedRef : null}
              style={{ flex: '1 0 200px' }} 
              key={cat.id}>
              <img
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  });
}
