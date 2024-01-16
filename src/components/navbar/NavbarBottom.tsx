'use client';

import * as React from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Separator } from '../ui/separator';
import { brands, category, posterData } from '@/lib/navData';

import comics from '../../../public/navbar/comics.webp';
import space from '../../../public/navbar/space.webp';
import fantasy from '../../../public/navbar/fantasy.webp';
import travel from '../../../public/navbar/travel.webp';
import brandsImg from '../../../public/navbar/brands.webp';
import limited1 from '../../../public/navbar/limited1.avif';
import limited2 from '../../../public/navbar/limited2.avif';
import gift1 from '../../../public/navbar/gifts1.avif';
import gift2 from '../../../public/navbar/gifts2.avif';

export default function NavbarBottom() {
  return (
    <>
      <NavigationMenu className="container hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Browse Posters</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-8 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[1100px] lg:flex justify-evenly">
                {posterData.map((poster) => {
                  return (
                    <div key={poster.title}>
                      <h2 className="font-bold">{poster.title}</h2>
                      <div className="flex flex-col gap-2">
                        {poster.topics.map((topic, index) => (
                          <p key={index} className="font-light">
                            {topic}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
                <div className="grid grid-cols-2 gap-2 bg-[url('/navbar/pattern.webp')] bg-center bg-no-repeat bg-contain">
                  {category.map((item) => {
                    return (
                      <div key={item.title} className="bg-white p-1 shadow-2xl">
                        <Image src={item.img} alt="" />
                        <p>{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Explore Collections</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-8 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[1150px] lg:flex lg:gap-6">
                <div>
                  <h2 className="font-bold">Bestselling collections</h2>
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2 font-light">
                      <p>Gaming</p>
                      <p>Landscapes</p>
                      <p>Map</p>
                      <p>Space</p>
                      <p>Mancave</p>
                    </div>
                    <div className="flex flex-col gap-2 font-light">
                      <p>Anime & Manga</p>
                      <p>Nature</p>
                      <p>Animals</p>
                      <p>Comics</p>
                    </div>
                    <div className="bg-white p-1 shadow-2xl h-fit">
                      <Image src={comics} alt="" />
                      <p>Comics</p>
                    </div>
                    <div className="bg-white p-1 shadow-2xl h-fit">
                      <Image src={space} alt="" />
                      <p>Space</p>
                    </div>
                  </div>
                </div>
                <Separator
                  orientation="vertical"
                  className="border-1 border-solid border-gray-500 h-60"
                />
                <div>
                  <h2 className="font-bold">New trending collections</h2>
                  <div className="flex justify-evenly">
                    <div className="flex flex-col gap-2 font-light">
                      <p>Fantasy</p>
                      <p>Paintings</p>
                      <p>Vintage posters</p>
                      <p>Travel</p>
                      <p>TV shows</p>
                    </div>
                    <div className="flex flex-col gap-2 font-light">
                      <p>Movies</p>
                      <p>Japanese & Asian</p>
                      <p>Celebrities</p>
                      <p>Sport</p>
                    </div>
                    <div className="bg-white p-1 shadow-2xl h-fit">
                      <Image src={fantasy} alt="" />
                      <p>Fantasy</p>
                    </div>
                    <div className="bg-white p-1 shadow-2xl h-fit">
                      <Image src={travel} alt="" />
                      <p>Travel</p>
                    </div>
                  </div>
                </div>
                <Separator
                  orientation="vertical"
                  className="border-1 border-solid border-gray-500 h-60"
                />
                <div className="flex justify-center items-center">
                  <h2 className="font-bold text-blue-500">
                    Browse All Collections
                  </h2>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Discover brands</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-8 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[1100px] lg:flex justify-evenly">
                {brands.map((poster) => {
                  return (
                    <div key={poster.title}>
                      <h2 className="font-bold">{poster.title}</h2>
                      <div className="flex flex-col gap-2">
                        {poster.topics.map((topic, index) => (
                          <p key={index} className="font-light">
                            {topic}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
                <div>
                  <h2 className="font-bold">Featured</h2>
                  <Image
                    src={brandsImg}
                    alt=""
                    width={200}
                    className="rounded-md my-3"
                  />
                  <p className="flex gap-2  items-center text-blue-500 font-bold">
                    Discover all brands <ArrowRightIcon />{' '}
                  </p>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Limited Displates</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-8 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[1100px] lg:flex justify-around">
                <div className="max-w-xs">
                  <h1 className="font-bold text-2xl">Limited Displates</h1>
                  <h3 className="font-bold text-gray-800 mt-2 mb-8">
                    Packed with extra flair
                  </h3>
                  <p className="text-sm mb-2">
                    Printed in a limited number of copies or available only for
                    a short time. Grab yours before it disappears forever!
                  </p>
                  <p className="text-sm">
                    For the most demanding collectors looking for that extra
                    kick! Featuring hand-picked designs, re-imagined with the
                    help of unique print enhancements and innovative tech.
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Image src={limited1} alt="" />
                    <div className="absolute bottom-0 backdrop-blur-md w-full p-2">
                      <h2 className="text-white">Limit & Ultra limited</h2>
                      <p className="text-blue-500">Discover All</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Image src={limited2} alt="" />
                    <div className="absolute bottom-0 backdrop-blur-md w-full p-2">
                      <h2 className="text-white">Lumino</h2>
                      <p className="text-blue-500">Discover All</p>
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Accessories & Gifts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-8 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1100px] lg:flex justify-evenly">
                <div className="max-w-xs">
                  <h1 className="font-bold text-2xl">Displate accessories</h1>
                  <h3 className="font-bold text-gray-800 mt-2 mb-8">
                    For all your non-printed needs
                  </h3>
                  <p className="text-sm mb-2">
                    From magnet-mounting your Displates, to making selected
                    artworks pop. We have some accessories to satisfy
                    first-timers and big collectors alike.
                  </p>
                  <p className="text-sm">Get your spare magnets here!</p>
                </div>

                <div className="flex gap-2">
                  <div className="relative">
                    <Image src={gift1} alt="" />
                    <div className="absolute bottom-0 backdrop-blur-md w-full p-2">
                      <h2 className="text-white">Mounting & Ads-on</h2>
                      <p className="text-blue-500">Discover All</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Image src={gift2} alt="" />
                    <div className="absolute bottom-0 backdrop-blur-md w-full p-2">
                      <h2 className="text-white">Gifts cards</h2>
                      <p className="text-blue-500">Get a gift card</p>
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer">
              {' '}
              What&apos;s a Displate
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Separator />
    </>
  );
}
