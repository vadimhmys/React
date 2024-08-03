import React from 'react';

const InputName = ({errors, register}) => {
  return (
    <>
      <div className="row">
        <label htmlFor="name">Имя:</label>
      </div>
      <div className="row">
        <input {...register('name', {
          required: true
        })} 
        type="text"
        id="name"
        />
        {errors?.name && <p>{errors.name.message}</p>}
      </div>
    </>
  );
};

export default InputName;
