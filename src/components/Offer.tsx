import { Separator } from './ui/separator';

const Offer = () => {
  return (
    <>
      <div className="container bg-gray-100 py-1 hidden md:flex justify-between md:text-sm">
        <span>
          Returns within <strong> 100 days! </strong>
        </span>
        <span>
          <strong> Blue Monday Sale </strong>| Get <strong> 25% OFF </strong> on
          ALL Displates | Use Code: <strong> SMILE </strong> | Ends:{' '}
          <strong> Today </strong>
        </span>
      </div>
      <div
        style={{ fontSize: '0.6rem' }}
        className="container bg-gray-100 py-1 md:hidden text-center"
      >
        <span>
          <strong> Free shipping </strong>on ALL Dispatches | Use code:{' '}
          <strong> FREE</strong> | Ends: <strong> Today</strong>
        </span>
      </div>
      <Separator />
    </>
  );
};
export default Offer;
