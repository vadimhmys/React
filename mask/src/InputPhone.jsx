import React from 'react';
import IMask from 'imask';

const InputPhone = ({register, errors, setValue, clearField}) => {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    const element = inputRef.current;
    
    if (element) {
      const maskOptions = {
        mask: '+375(00) 000-00-00',
        lazy: false,
      };
      const mask = new IMask(element, maskOptions);
      mask.on('accept', () => setValue('phone', `${mask.value}`));
    
    }
    
  }, [setValue, clearField]);

  return (
    <>
      <div className="row">
        <label htmlFor="phone">Телефон:</label>
      </div>
      <div className="row">
        <input {...register('phone', {
          required: 'Поле обязательно к заполнению',
          validate: value => {
            return !value.includes('_') || 'Введите номер телефона полностью';
          }
        })} 
        type="text"
        ref={inputRef}
        id="phone"
        />
        {errors?.phone && <p style={{margin: '0px', color: 'red'}}>{errors.phone.message}</p>}
      </div>
    </>
  );
};

export default InputPhone;
