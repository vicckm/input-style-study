import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './styles';

type Inputs = {
  example: string;
};

export default function InputComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [active, setActive] = useState<boolean>();
  const [isInvalid, setIsInvalid] = useState<boolean>();

  console.log(watch('example'));

  function handleTextChange(text: string) {
    if (text !== '') {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.FloatingLabel>
        <input
          {...register('example', { required: true })}
          className={errors.example || isInvalid ? 'hasError' : ''}
          type="email"
          onInvalid={() => setIsInvalid(true)}
          onChange={(event) => handleTextChange(event.target.value)}
        />

        <label className={active ? 'active' : ''} htmlFor="email">
          E-mail
        </label>
        {errors.example && <span>This field is required</span>}
      </S.FloatingLabel>
      <input type="submit" />
    </form>
  );
}
