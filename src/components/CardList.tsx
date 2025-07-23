import { count } from "console";
import { Badge } from "@/components/ui/badge"; 
import { title } from "process";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";

const popularContent = [
  {
    id:1,
    title: "Popular Content 1",
    Badge: "Coding",
    description: "This is a description for popular content 1.",
    image: "https://picsum.photos/150",
    count: 120,
  },
   {
    id:1,
    title: "Popular Content 1",
    Badge: "Coding",
    description: "This is a description for popular content 1.",
    image: "https://picsum.photos/150",
    count: 120,
  },
  {
    id:2,
    title: "Popular Content 2",
    Badge: "Design",
    description: "This is a description for popular content 2.",
    image: "https://picsum.photos/150",
    count: 150,
  },
  {
    id:3,
    title: "Popular Content 3",
    Badge: "Marketing",
    description: "This is a description for popular content 3.",
    image: "https://picsum.photos/150",
    count: 180,
  },
  {
    id:3,
    title: "Popular Content 3",
    Badge: "Marketing",
    description: "This is a description for popular content 3.",
    image: "https://picsum.photos/150",
    count: 180,
  }, 
 
];

const latestTransactions = [
  {
    id: 1,
    title: "Latest Transaction 1",
    Badge: "jane smith",
    image: "https://picsum.photos/150",
    count: 120,
  },
   {
    id: 1,
    title: "Latest Transaction 1",
    Badge: "jane smith",
    image: "https://picsum.photos/150",
    count: 120,
  },
   {
    id: 1,
    title: "Latest Transaction 1",
    Badge: "jane smith",
    image: "https://picsum.photos/150",
    count: 120,
  },
   {
    id: 1,
    title: "Latest Transaction 1",
    Badge: "jane smith",
    image: "https://picsum.photos/150",
    count: 120,
  }, {
    id: 1,
    title: "Latest Transaction 1",
    Badge: "jane smith",
    image: "https://picsum.photos/150",
    count: 120,
  },

];






const CardList = ({title}:{title:string}) => {
  const list = title === "Popular Content" ? popularContent : latestTransactions;
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4 ">
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image src={item.image} alt={"item.title"} fill className="object-cover"></Image>
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <Badge variant="secondary">{item.Badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count/1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardList;