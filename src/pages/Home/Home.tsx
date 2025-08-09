import Landing from './Landing';
import { FoodCardList } from './FoodListPage';
import { data } from '@/utils/data';

const Home = () => {
  return (
    <div>
      <Landing />
      <FoodCardList data={data} />
    </div>
  );
};

export default Home;
