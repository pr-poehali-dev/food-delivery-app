import Header from "@/components/Header";
import RecommendedBasket from "@/components/RecommendedBasket";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ShoppingCart, ThumbsUp, ThumbsDown } from "lucide-react";

// Фиктивные данные для рекомендаций
const weeklyBasket = {
  title: "Еженедельная корзина",
  description: "Продукты, которые вы регулярно покупаете",
  products: [
    {
      id: "p1",
      name: "Молоко 3.2% 1л",
      price: 89,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60",
      category: "Молочные продукты",
      quantity: 2
    },
    {
      id: "p2",
      name: "Хлеб белый нарезной",
      price: 54,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=500&auto=format&fit=crop&q=60",
      category: "Хлебобулочные изделия",
      quantity: 1
    },
    {
      id: "p3",
      name: "Бананы 1кг",
      price: 119,
      image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60",
      category: "Фрукты",
      quantity: 1
    }
  ],
  totalPrice: 351
};

const healthyBasket = {
  title: "Здоровое питание",
  description: "Полезные продукты на основе ваших предпочтений",
  products: [
    {
      id: "p4",
      name: "Овсянка органическая",
      price: 95,
      image: "https://images.unsplash.com/photo-1614961233913-a5113a4df86a?w=500&auto=format&fit=crop&q=60",
      category: "Крупы",
      quantity: 1
    },
    {
      id: "p5",
      name: "Авокадо шт.",
      price: 129,
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=60",
      category: "Фрукты",
      quantity: 2
    },
    {
      id: "p6",
      name: "Греческий йогурт",
      price: 110,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=60",
      category: "Молочные продукты",
      quantity: 1
    }
  ],
  totalPrice: 463
};

const recommendedProducts = [
  {
    id: "rec1",
    name: "Шоколад горький 72%",
    price: 129,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&auto=format&fit=crop&q=60",
    reason: "На основе ваших предыдущих покупок"
  },
  {
    id: "rec2",
    name: "Чай зеленый листовой",
    price: 249,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=500&auto=format&fit=crop&q=60",
    reason: "Часто покупают вместе с кофе"
  },
  {
    id: "rec3",
    name: "Орехи ассорти 200г",
    price: 359,
    image: "https://images.unsplash.com/photo-1599316018-aef39176ea54?w=500&auto=format&fit=crop&q=60",
    reason: "Предпочтения похожих пользователей"
  }
];

const Recommendations = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Персональные рекомендации</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <RecommendedBasket {...weeklyBasket} />
          <RecommendedBasket {...healthyBasket} />
        </div>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-primary" />
            Возможно, вам понравится
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedProducts.map((product) => (
              <Card key={product.id}>
                <div className="aspect-square w-full relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold">{product.price} ₽</span>
                    <Button size="sm" variant="outline">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Добавить
                    </Button>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {product.reason}
                  </div>
                  <div className="flex items-center justify-end mt-3 space-x-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container text-center text-muted-foreground">
          ПродуктОнлайн © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Recommendations;
