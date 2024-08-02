import React from 'react';
import InputPhone from './InputPhone';
import { useForm } from 'react-hook-form';

function App() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: 'onChange'
  });
  return (
    <div className="App">
      <form>
        <InputPhone/>
      </form>
    </div>
  );
}

export default App;
