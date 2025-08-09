import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { IData } from '@/utils/data';

interface FoodCardListProps {
  data: IData[];
}

export function FoodCardList({ data }: FoodCardListProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((food, idx) => (
        <Card key={idx} className="hover:shadow-lg transition-shadow">
          <img
            src={food.foodImage}
            alt={food.foodName}
            className="h-48 w-full object-cover rounded-t-md"
            loading="lazy"
          />
          <CardHeader>
            <CardTitle>{food.foodName}</CardTitle>
            <CardDescription>{food.restaurantName}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold mb-2">${food.price}</p>
            <div className="flex items-center space-x-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < food.rating ? 'currentColor' : 'none'}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.11 6.462h6.801c.969 0 1.371 1.24.588 1.81l-5.502 3.996 2.11 6.462c.3.921-.755 1.688-1.538 1.118L12 17.77l-5.502 3.995c-.783.57-1.838-.197-1.538-1.118l2.11-6.462-5.502-3.996c-.783-.57-.38-1.81.588-1.81h6.801l2.11-6.462z"
                  />
                </svg>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Badge
              variant={food.isActive === 'yes' ? 'default' : 'destructive'}
              className="capitalize"
            >
              {food.isActive}
            </Badge>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
