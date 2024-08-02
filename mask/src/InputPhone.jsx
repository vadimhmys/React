import React from 'react';
import IMask from 'imask';

const InputPhone = () => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    const element = inputRef.current;
    console.log('element', element);
    if (element) {
      let maskOptions = {
        mask: '+375(00) 000-00-00',
        lazy: false,
      };
      new IMask(element, maskOptions);
    }
  }, []);

  return (
    <>
      <div className="row">
        <label htmlFor="phone">Телефон:</label>
      </div>
      <div className="row">
        <input type="tel" name="phone" ref={inputRef} />
      </div>
    </>
  );
};

export default InputPhone;
