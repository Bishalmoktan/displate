import Image from 'next/image';

import logo from '../../../public/logo_dark.svg';
import { HeartIcon, PersonIcon } from '@radix-ui/react-icons';
import { FaCopyright } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import InputBox from './InputBox';
import { Separator } from '../ui/separator';

const navLeftLinks = [
  {
    id: 1,
    icon: <FaCopyright />,
    title: 'Club',
  },
  {
    id: 2,
    icon: <HeartIcon />,
    title: 'Wishlist',
  },
  {
    id: 3,
    icon: <FiShoppingCart />,
    title: 'Cart',
  },
  {
    id: 4,
    icon: <PersonIcon />,
    title: 'Join',
  },
];

const NavbarTop = () => {
  return (
    <>
      <div className="container flex justify-center md:justify-between py-2">
        <div>
          <Image src={logo} alt="Logo" />
        </div>
        <div className="hidden md:flex">
          <InputBox />
        </div>
        <div className="hidden md:flex gap-3">
          {navLeftLinks.map((link) => {
            return (
              <div
                key={link.id}
                className="flex flex-col gap-1 items-center justify-center"
              >
                {link.icon}
                <p>{link.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Separator />
    </>
  );
};
export default NavbarTop;
