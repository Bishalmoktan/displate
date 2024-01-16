import Image from 'next/image';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <AspectRatio
      ratio={16 / 3}
      className="container flex justify-center items-center my-24 md:my-0"
    >
      <div className="text-center">
        <h1 className="text-3xl">
          {' '}
          <strong> Hmmmm.... </strong> it looks like your cart is empty.
        </h1>
        <h1 className="my-2 text-3xl">
          Find yourself a <strong> Displate! </strong>
        </h1>
        <Button
          size={'lg'}
          className="bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Shop now
        </Button>
      </div>
    </AspectRatio>
  );
}
