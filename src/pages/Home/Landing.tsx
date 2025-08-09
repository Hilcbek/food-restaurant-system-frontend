import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';

const Landing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ search: string }>();

  const onSubmit = (data: { search: string }) => {
    console.log('Searching for:', data.search);
  };

  return (
    <div className="w-full md:px-20 flex gap-10 items-center justify-center min-h-[500px] bg-yellow-400">
      <div className="w-full max-w-xl">
        <Label
          htmlFor="search"
          className="text-2xl font-bold md:text-4xl xl:text-6xl text-white mb-6 block"
        >
          Are you starving?
        </Label>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex gap-4 p-3 bg-white rounded-md"
        >
          <Input
            errors={errors}
            id="search"
            register={register}
            name="search"
            placeholder="Search meals..."
            className="flex-grow"
          />
          <Button
            className="p-3 rounded-sm bg-orange-500 text-white"
            type="submit"
          >
            Find Meal
          </Button>
        </form>
      </div>
      <div className="w-full">
        <img src="/banner.png" className="object-contain w-full h-full" />
      </div>
    </div>
  );
};

export default Landing;
