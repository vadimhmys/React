import React from 'react';

const InputName = ({errors, register}) => {
  return (
    <>
      <div className="row">
        <label htmlFor="name">Имя:</label>
      </div>
      <div className="row">
        <input {...register('name', {
          required: 'Поле обязательно к заполнению'
        })} 
        type="text"
        id="name"
        />
        {errors?.name && <p style={{margin: '0px', color: 'red'}}>{errors.name.message}</p>}
      </div>
    </>
  );
};

export default InputName;
