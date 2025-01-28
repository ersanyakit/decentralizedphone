import React from 'react';
import { Button } from '@nextui-org/react';
import { Phone as PhoneIcon, Video, X } from 'lucide-react';

export const DialPad = () => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  return (
    <div className="h-full bg-gradient-to-b from-unicorn-blue/10 to-unicorn-pink/10 p-6">
      <input
        type="text"
        className="w-full text-4xl text-center bg-transparent border-none outline-none mb-8"
        placeholder="Enter number"
      />
      <div className="grid grid-cols-3 gap-4">
        {numbers.map((num) => (
          <Button
            key={num}
            className="h-16 text-2xl bg-unicorn-white/50 hover:bg-unicorn-white/70"
          >
            {num}
          </Button>
        ))}
      </div>
      <div className="flex justify-around mt-8">
        <Button
          isIconOnly
          className="w-16 h-16 bg-green-500 text-white"
        >
          <PhoneIcon />
        </Button>
        <Button
          isIconOnly
          className="w-16 h-16 bg-unicorn-purple text-white"
        >
          <Video />
        </Button>
      </div>
    </div>
  );
};