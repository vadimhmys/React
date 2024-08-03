import React, { forwardRef } from 'react';

const InputPhone = forwardRef(({register, errors, onChange}, ref) => {
  return (
    <>
      <div className="row">
        <label htmlFor="phone">Телефон:</label>
      </div>
      <div className="row">
        <input {...register('phone', {
          required: true
        })} 
        type="text"
        ref={ref}
        id="phone"
        />
        {errors?.phone && <p>{errors.phone.message}</p>}
      </div>
    </>
  );
});

export default InputPhone;
