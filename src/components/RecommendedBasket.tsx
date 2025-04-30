import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Sparkles } from "lucide-react";

type ProductItemProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
};

type RecommendedBasketProps = {
  title: string;
  description: string;
  products: ProductItemProps[];
  totalPrice: number;
};

const ProductItem = ({ name, price, image, category, quantity }: ProductItemProps) => {
  return (
    <div className="flex items-center gap-3 py-2 border-b last:border-0">
      <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium truncate">{name}</h4>
        <Badge variant="outline" className="mt-1 text-xs">
          {category}
        </Badge>
      </div>
      <div className="text-right">
        <div className="font-medium">{price} ₽</div>
        <div className="text-xs text-muted-foreground">{quantity} шт.</div>
      </div>
    </div>
  );
};

const RecommendedBasket = ({ title, description, products, totalPrice }: RecommendedBasketProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-1">
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 bg-muted/30">
        <div>
          <div className="text-sm text-muted-foreground">Итого:</div>
          <div className="text-lg font-bold">{totalPrice} ₽</div>
        </div>
        <Button>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Заказать всё
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecommendedBasket;
