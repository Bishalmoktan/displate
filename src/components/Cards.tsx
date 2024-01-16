import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import React from 'react';

const Cards = ({ item }: any) => {
  return (
    <Card className="w-fit flex-1">
      <CardHeader className="flex flex-row gap-2">
        <Avatar>
          <AvatarImage src={item.avatarImg} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.desc}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        <Image src={item.image1} alt={''} width={100} height={100} />
        <Image src={item.image2} alt={''} width={100} height={100} />
        <Image src={item.image3} alt={''} width={100} height={100} />
        <Image src={item.image4} alt={''} width={100} height={100} />
      </CardContent>
    </Card>
  );
};
export default Cards;
