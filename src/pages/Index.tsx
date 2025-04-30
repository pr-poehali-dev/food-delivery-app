import Header from "@/components/Header";
import StoreCard from "@/components/StoreCard";
import RecommendedBasket from "@/components/RecommendedBasket";
import { Button } from "@/components/ui/button";

// Фиктивные данные для магазинов
const stores = [
  {
    id: "magnit",
    name: "Магнит",
    logo: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500&auto=format&fit=crop&q=60",
    deliveryTime: "30-45 мин",
    rating: 4.7,
    brandColor: "#E30613",
    categories: ["Продукты", "Бытовая химия", "Товары для дома"]
  },
  {
    id: "tabris",
    name: "Табрис",
    logo: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500&auto=format&fit=crop&q=60",
    deliveryTime: "40-60 мин",
    rating: 4.9,
    brandColor: "#35BFB5",
    categories: ["Премиум продукты", "Фермерские товары", "Деликатесы"]
  },
  {
    id: "lenta",
    name: "Лента",
    logo: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500&auto=format&fit=crop&q=60",
    deliveryTime: "35-50 мин",
    rating: 4.5,
    brandColor: "#004C9B",
    categories: ["Продукты", "Электроника", "Одежда"]
  },
  {
    id: "pyaterochka",
    name: "Пятерочка",
    logo: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500&auto=format&fit=crop&q=60",
    deliveryTime: "25-40 мин",
    rating: 4.6,
    brandColor: "#ED1C24",
    categories: ["Продукты", "Косметика", "Товары для дома"]
  }
];

// Фиктивные данные для рекомендованной корзины
const recommendedProducts = [
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
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container py-6">
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Выберите магазин</h2>
            <Button variant="outline">Показать все магазины</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stores.map((store) => (
              <StoreCard key={store.id} {...store} />
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Рекомендуемая корзина</h2>
          <RecommendedBasket
            title="Ваши регулярные покупки"
            description="На основе ваших предыдущих заказов"
            products={recommendedProducts}
            totalPrice={351}
          />
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

export default Index;
