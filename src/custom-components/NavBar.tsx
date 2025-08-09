import { Button } from '@/components/ui/button';
import clsx from 'clsx';

const NavBar = () => {
  return (
    <nav
      className={clsx('md:px-20 flex items-center justify-between w-full py-3')}
    >
      <h1 className="font-bold text-xl">
        <span className="text-orange-600">Food</span> Wagan
      </h1>
      <Button className="rounded-sm bg-orange-500">Add Meal</Button>
    </nav>
  );
};

export default NavBar;
