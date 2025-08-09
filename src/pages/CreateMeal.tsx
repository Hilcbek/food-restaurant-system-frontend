import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Modal } from '@/custom-components/Modal/Modal';
import useCreateMeal from '@/Hooks/CreateMeal';
import { foodThunk } from '@/Toolkit/food/thunk';
import type { AppDispatch } from '@/Toolkit/store';
import clsx from 'clsx';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createFoodSchema, type createFoodSchemaType } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
const CreateMeal = () => {
  const { open, onClose } = useCreateMeal();
  const dispatch: AppDispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createFoodSchemaType>({
    resolver: zodResolver(createFoodSchema),
    defaultValues: {
      foodImage: '',
      foodName: '',
      isActive: '',
      price: 0,
    },
  });

  const handleCreateMeal: SubmitHandler<createFoodSchemaType> = async (
    data: createFoodSchemaType
  ) => {
    await dispatch(
      foodThunk.useCreatFood({
        foodImage: data.foodImage || '',
        foodName: data.foodName,
        isActive: data.isActive || 'yes',
        price: data.price,
        rating: data.rating || 1,
      })
    );
  };
  const BodyContent = () => {
    return (
      <div className={clsx('flex w-full flex-col p-5 md:p-10 gap-3')}>
        <h1 className="text-center my-3 text-4xl">Add Meal</h1>
        <Input<createFoodSchemaType>
          register={register}
          id="foodName"
          name="foodName"
          errors={errors}
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Food name"
        />
        <Input<createFoodSchemaType>
          name="rating"
          id="rating"
          errors={errors}
          register={register}
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Food rating"
        />
        <Input<createFoodSchemaType>
          name="foodImage"
          id="foodImage"
          errors={errors}
          register={register}
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="food image link"
        />
        <Input<createFoodSchemaType>
          name="restaurantName"
          id="restaurantName"
          errors={errors}
          register={register}
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Restaurant name"
        />
        <Input<createFoodSchemaType>
          name="isActive"
          id="isActive"
          errors={errors}
          register={register}
          className="p-3 ring-0 shadow-none hover:ring-0 hover:shadow-none w-full"
          placeholder="Status"
        />
        <div className="flex items-center gap-3 justify-center w-full">
          <Button
            onClick={() =>
              {handleSubmit(handleCreateMeal, (err) => console.log(err));
              console.log('object')}
            }
            className="flex-1 p-3 bg-yellow-500"
          >
            Add
          </Button>
          <Button className="flex-1 p-3" onClick={() => onClose()}>
            Cancel
          </Button>
        </div>
      </div>
    );
  };

  return <Modal onClose={onClose} BodyContent={BodyContent} open={open} />;
};

export default CreateMeal;
