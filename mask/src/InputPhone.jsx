import React, { forwardRef } from 'react';

const InputPhone = forwardRef(({ register, errors, setValue }, ref) => {
  return (
    <>
      <div className="row">
        <label htmlFor="phone">Телефон:</label>
      </div>
      <div className="row">
        <input
          {...register('phone', {
            required: 'Поле обязательно к заполнению',
            validate: (value) => {
              console.log('value', value);
              return !value.includes('_') || 'Введите номер телефона полностью';
            },
          })}
          type="text"
          ref={ref}
          id="phone"
        />
        {errors?.phone && <p style={{ margin: '0px', color: 'red' }}>{errors.phone.message}</p>}
      </div>
    </>
  );
});


export default InputPhone;
