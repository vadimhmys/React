import React from 'react';
import InputPhone from './InputPhone';
import { useForm } from 'react-hook-form';
import InputName from './InputName';
import IMask from 'imask';

function App() {
  const inputRef = React.useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    resetField
  } = useForm({
    mode: 'onChange',
  });

  /* React.useEffect(() => {
    const element = inputRef.current;
    
    if (element) {
      const maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false,
      };
      const mask = new IMask(element, maskOptions);
      mask.on('accept', () => setValue('phone', `${mask.value}`));
    }
  },[setValue]); */

  const onSubmit = ( data ) => {
    console.log(data);
    resetField('name');
  };

  React.useEffect(() => {
    const element = inputRef.current;
    
    if (element) {
      const maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false,
      };
      const mask = new IMask(element, maskOptions);
      mask.on('accept', () => setValue('phone', `${mask.value}`));
    }
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch, setValue]); //эффект срабатывает после изменения в каком-либо поле

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputName errors={errors} register={register} />
        <InputPhone errors={errors} register={register} ref={inputRef} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
