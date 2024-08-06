import React from 'react';
import InputPhone from './InputPhone';
import { useForm } from 'react-hook-form';
import InputName from './InputName';
import IMask from 'imask';

const maskOptions = {
  mask: '+375(00) 000-00-00',
  lazy: false,
};

function App() {
  const prevMask = React.useRef(null);
  const inputRef = React.useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: ''
    }
  });

 const createMask = () => {
  const element = inputRef.current;
    if (element) {
      return new IMask(element, maskOptions);
    }
    return null;
 };
  
  React.useEffect(() => {
      const mask = createMask();
      prevMask.current = mask;
      if (mask) {
        mask.on('accept', () => {
          setValue('phone', `${mask.value}`);
        });
      }
  }, [setValue]);

  const onSubmit = (data) => {
    reset();
    prevMask.current.destroy();
    const mask = createMask();
      prevMask.current = mask;
      if (mask) {
        mask.on('accept', () => {
          setValue('phone', `${mask.value}`);
        });
      }
  };

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch, setValue]); //эффект срабатывает после изменения в каком-либо поле

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputName errors={errors} register={register} />
        <InputPhone
          errors={errors}
          register={register}
          setValue={setValue}
          ref={inputRef}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
