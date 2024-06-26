// "use client";

import { Badge } from "@/components/ui/badge";
import BadgeFilter from "@/components/ui/badge-filter";
import {   Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type RecipeType = {
  id: number;
  image: string;
  name: string;
  mealType: Array<string>;
  cuisine: string;
  difficulty: string;
  ingredients: Array<string>;
  instructions: Array<string>;
  rating: number;
  reviewCount: number;
  servings: string;
  prepTimeMinutes: string;
  cookTimeMinutes: string;
};

const getRecipes = async () => {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    return data.recipes;
};

export default async function HomePage(){

  const recipes = await getRecipes();


    const cuisines: string[] = [
        "All",
        "Asian",
        "American",
        "Greek",
        "Italian",
        "Indian",
        "Japanese",
        "Mediterranean",
        "Mexican",
        "Pakistani",
    ];

    return(
        <div className="xl:px-24 px-10">
            <div className="my-12">
            
                <BadgeFilter/>
                
                <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-x-10 gap-y-20 xl:gap-y-32 xl:pt-32 pt-12 pb-40">
                    {recipes.map((item: RecipeType) => (
                    <a href={`/recipes/${item.id}`} key={item.id}>
                        <Card className="flex flex-col bg-orange-50 hover:scale-105 ease-in duration-200 xl:min-h-[600px] fancyGradient">
                        <CardHeader>
                            <img
                            src={item.image}
                            alt={item.name}
                            width={500}
                            height={500}
                            className="bg-cover rounded-md shadow-xl"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="uppercase lg:text-3xl relative font-bold line-clamp-2">
                            {item.name}
                            </CardTitle>
                        </CardContent>
                        <CardFooter className="flex items-start gap-2 lg:gap-12 lg:flex-row flex-col">
                            <div className="flex flex-col">
                            <p className="text-lg">Serves</p>
                            <p className="text-gray-800">{item.servings}</p>
                            </div>
                            <div className="flex flex-col">
                            <p className="text-lg">Prep Time</p>
                            <p className="text-gray-800">{item.prepTimeMinutes} MIN</p>
                            </div>
                            <div className="flex flex-col">
                            <p className="text-lg">Cook Time</p>
                            <p className="text-gray-800">{item.cookTimeMinutes} MIN</p>
                            </div>
                        </CardFooter>
                        </Card>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    )
}