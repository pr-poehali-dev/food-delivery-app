import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Clock } from "lucide-react";
import { Link } from "react-router-dom";

type StoreProps = {
  id: string;
  name: string;
  logo: string;
  deliveryTime: string;
  rating: number;
  brandColor: string;
  categories: string[];
};

const StoreCard = ({ id, name, logo, deliveryTime, rating, brandColor, categories }: StoreProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-0">
        <div 
          className="h-36 w-full flex items-center justify-center" 
          style={{ backgroundColor: brandColor }}
        >
          <img 
            src={logo} 
            alt={name} 
            className="h-24 object-contain"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl">{name}</CardTitle>
        <div className="flex items-center mt-2 space-x-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <CardDescription>{deliveryTime}</CardDescription>
          <Badge variant="outline">{rating}★</Badge>
        </div>
        <div className="flex flex-wrap gap-1 mt-3">
          {categories.slice(0, 3).map((category, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/store/${id}`} className="w-full">
          <Button className="w-full" style={{ backgroundColor: brandColor }}>
            <ShoppingBag className="h-4 w-4 mr-2" />
            Выбрать магазин
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default StoreCard;
