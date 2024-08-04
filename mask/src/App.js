import React from 'react';
import InputPhone from './InputPhone';
import { useForm } from 'react-hook-form';
import InputName from './InputName';

function App() {
  const clearField = React.useRef(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = ( data ) => {
    console.log(data);
    reset();
    clearField.current = !clearField.current;
  };

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch, setValue]); //эффект срабатывает после изменения в каком-либо поле

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputName errors={errors} register={register} />
        <InputPhone errors={errors} register={register} setValue={setValue} clearField={clearField.current}/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
