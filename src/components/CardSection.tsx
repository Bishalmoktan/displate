import { cardContent } from '@/lib/data';
import Cards from './Cards';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const CardSection = () => {
  return (
    <>
      <div className="container hidden md:flex justify-evenly gap-4 mt-28  md:mt-0">
        {cardContent.map((item) => (
          <Cards key={item.title} item={item} />
        ))}
      </div>
      <Carousel className="w-full max-w-xs container mt-28 md:hidden">
        <CarouselContent>
          {cardContent.map((item, index) => (
            <CarouselItem key={index}>
              <Cards key={item.title} item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};
export default CardSection;
