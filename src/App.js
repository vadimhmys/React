import React, { useRef } from 'react'

export default function Counter() {
  let ref = useRef(0);

  const handleClick = () => {
    alert(++ref.current);
  }

  return (
    <button onClick={handleClick}>Click</button>
  )
}
