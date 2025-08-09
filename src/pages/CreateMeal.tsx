import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Modal } from '@/custom-components/Modal/Modal';
import useCreateMeal from '@/Hooks/CreateMeal';
import clsx from 'clsx';

const CreateMeal = () => {
  const { open, onClose } = useCreateMeal();
  const BodyContent = () => {
    return (
      <div className={clsx('flex w-full flex-col p-5 md:p-10 gap-3')}>
        <h1 className="text-center my-3 text-4xl">Add Meal</h1>
        <Input
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Food name"
        />
        <Input
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Food rating"
          type="number"
        />
        <Input
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="food image link"
        />
        <Input
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Restaurant name"
        />
        <Input
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Restaurant logo"
        />
        <Input
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Status"
        />
        <div className="flex items-center gap-3 justify-center w-full">
          <Button className="flex-1 p-3 bg-yellow-500">Add</Button>
          <Button className="flex-1 p-3" onClick={() => onClose()}>
            Cancel
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Modal
      onClose={onClose}
      BodyContent={BodyContent}
      open={open}
    />
  );
};

export default CreateMeal;
