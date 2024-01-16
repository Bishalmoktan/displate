'use client';

import { useRef } from 'react';
import { Command, CommandInput } from '../ui/command';

const InputBox = () => {
  const inputRef = useRef();
  return (
    <Command className="border-2 border-black rounded-full lg:w-[50rem] ">
      <CommandInput placeholder="Search for designs" />
    </Command>
  );
};
export default InputBox;
