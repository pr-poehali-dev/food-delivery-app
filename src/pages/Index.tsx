import Header from "@/components/Header";
import AddressSelector from "@/components/AddressSelector";
import BonusCard from "@/components/BonusCard";
import RecommendedBasket from "@/components/RecommendedBasket";
import BottomNavigation from "@/components/BottomNavigation";

// Данные бонусных карт магазинов
const bonusCards = [
  {
    storeName: "Магнит",
    bonusPoints: 1250,
    brandColor: "#E30613",
    logo: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=100&auto=format&fit=crop&q=60",
  },
  {
    storeName: "Пятерочка",
    bonusPoints: 890,
    brandColor: "#ED1C24",
    logo: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=100&auto=format&fit=crop&q=60",
  },
  {
    storeName: "Табрис",
    bonusPoints: 2100,
    brandColor: "#35BFB5",
    logo: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=100&auto=format&fit=crop&q=60",
  },
  {
    storeName: "Окей",
    bonusPoints: 654,
    brandColor: "#FF6B35",
    logo: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=100&auto=format&fit=crop&q=60",
  },
  {
    storeName: "Лента",
    bonusPoints: 1567,
    brandColor: "#004C9B",
    logo: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=100&auto=format&fit=crop&q=60",
  },
];

// Данные для корзин
const fastDeliveryProducts = [
  {
    id: "f1",
    name: "Молоко 3.2% 1л",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60",
    category: "Молочные продукты",
    quantity: 1,
  },
  {
    id: "f2",
    name: "Хлеб белый",
    price: 54,
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=500&auto=format&fit=crop&q=60",
    category: "Хлебобулочные изделия",
    quantity: 1,
  },
];

const budgetProducts = [
  {
    id: "b1",
    name: "Макароны 500г",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500&auto=format&fit=crop&q=60",
    category: "Бакалея",
    quantity: 2,
  },
  {
    id: "b2",
    name: "Гречка 1кг",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=60",
    category: "Крупы",
    quantity: 1,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      <main className="container py-4">
        <AddressSelector />

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-4">Бонусные карты</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {bonusCards.map((card, index) => (
              <BonusCard key={index} {...card} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <RecommendedBasket
            title="Самая быстрая доставка"
            description="Доставим за 15-20 минут"
            products={fastDeliveryProducts}
            totalPrice={143}
          />

          <RecommendedBasket
            title="Самая бюджетная корзина"
            description="Экономия до 30%"
            products={budgetProducts}
            totalPrice={169}
          />
        </section>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Index;
