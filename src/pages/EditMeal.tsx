import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Modal } from '@/custom-components/Modal/Modal';
import useCreateMeal from '@/Hooks/CreateMeal';
import useEditMeal from '@/Hooks/EditMeal';
import clsx from 'clsx';

const EditMeal = () => {
  const { open, onClose } = useEditMeal();
  const BodyContent = () => {
    return (
      <div className={clsx('flex w-full flex-col p-5 md:p-10 gap-3')}>
        <h1 className="text-center my-3 text-4xl">Add Meal</h1>
        <Input
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Edit Food name"
        />
        <Input
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Edit Food rating"
          type="number"
        />
        <Input
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Edit food image link"
        />
        <Input
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Edit Restaurant name"
        />
        <Input
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Edit Restaurant logo"
        />
        <Input
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Edit Status"
        />
        <div className="flex items-center gap-3 justify-center w-full">
          <Button className="flex-1 p-3 bg-yellow-500">Edit</Button>
          <Button className="flex-1 p-3" onClick={() => onClose()}>
            Cancel
          </Button>
        </div>
      </div>
    );
  };

  return <Modal onClose={onClose} BodyContent={BodyContent} open={open} />;
};

export default EditMeal;
