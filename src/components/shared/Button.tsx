import React from 'react';

type ButtonProps = {
  name: string;
  classNames: string;
};

const Button = ({ name, classNames }: ButtonProps) => {
  return (
    <button
      className={`py-3 px-6 flex items-center text-center justify-center gap-1 font-semibold rounded-[100px] shadow-md ${classNames}`}
    >
      {name}
    </button>
  );
};

export default Button;
