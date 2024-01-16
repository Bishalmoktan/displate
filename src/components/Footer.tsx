import Image from 'next/image';
import { FiFacebook } from 'react-icons/fi';
import { Separator } from './ui/separator';
import {
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';

import partner1 from '../../public/partners/1.png';
import partner2 from '../../public/partners/2.png';
import partner3 from '../../public/partners/3.png';
import partner4 from '../../public/partners/4.png';
import partner5 from '../../public/partners/5.png';
import partner6 from '../../public/partners/6.png';
import partner7 from '../../public/partners/7.png';
import partner8 from '../../public/partners/8.png';
import partner9 from '../../public/partners/9.png';
import partner10 from '../../public/partners/10.png';
import payment from '../../public/payments/payment.svg';

const footerLinks = [
  {
    title: 'Support',
    links: [
      'Check order status',
      'Shipping & Returns',
      'Help/FAQ',
      'Terms of use',
      'Mounting instructions',
      'Contact us',
      'Copyrights',
      'Privacy policy',
    ],
  },
  {
    title: 'About',
    links: [
      "What's a Displate?",
      'Displate Club',
      'About us',
      'Blog',
      'Career',
    ],
  },
  {
    title: 'Earn with displate',
    links: ['Sell your art'],
  },
];

const partnerImages = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
];

const Footer = () => {
  return (
    <div className="mt-5">
      <Separator />
      <footer className="container bg-gray-100 flex flex-col lg:flex-row justify-evenly py-8">
        {footerLinks.map((item) => {
          return (
            <div key={item.title} className="hidden md:flex flex-col">
              <h2 className="font-bold">{item.title}</h2>
              {item.links.map((link) => (
                <p key={link} className="font-light">
                  {link}
                </p>
              ))}
            </div>
          );
        })}
        <div className="hidden md:flex flex-col">
          <h2 className="font-bold">Find us</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-full w-fit border border-solid border-black p-2">
              {' '}
              <FiFacebook className="text-blue-400 text-2xl" />
            </div>
            <div className="rounded-full w-fit border border-solid border-black p-2">
              {' '}
              <FaInstagram className="text-blue-400 text-2xl" />
            </div>
            <div className="rounded-full w-fit border border-solid border-black p-2">
              {' '}
              <FaTwitter className="text-blue-400 text-2xl" />
            </div>
            <div className="rounded-full w-fit border border-solid border-black p-2">
              {' '}
              <FaPinterestP className="text-blue-400 text-2xl" />
            </div>
            <div className="rounded-full w-fit border border-solid border-black p-2">
              {' '}
              <FaLinkedin className="text-blue-400 text-2xl" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="font-bold">Partners</h2>
            <div className="grid grid-cols-5 gap-x-2">
              {partnerImages.map((src, index) => {
                return <Image key={index} src={src} alt="" width={70} />;
              })}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="font-bold">Payment</h2>
            <Image src={payment} alt="Payment" />
          </div>
        </div>
      </footer>
      <div className="container bg-gray-100 ">
        <Separator />
        <p className="py-4 text-xs">© Displate. All Rights Reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
