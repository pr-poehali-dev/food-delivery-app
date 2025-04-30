import Header from "@/components/Header";
import AnalyticsChart from "@/components/AnalyticsChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, ShoppingBag, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";

// Фиктивные данные для аналитики
const monthlySpending = [
  { name: "Янв", value: 5400 },
  { name: "Фев", value: 6100 },
  { name: "Мар", value: 5900 },
  { name: "Апр", value: 6800 },
  { name: "Май", value: 7200 },
  { name: "Июн", value: 6500 },
];

const categorySpending = [
  { name: "Молочные", value: 2400 },
  { name: "Мясо", value: 3200 },
  { name: "Овощи", value: 1800 },
  { name: "Фрукты", value: 1400 },
  { name: "Выпечка", value: 1100 },
  { name: "Напитки", value: 1600 },
];

const Analytics = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Аналитика покупок</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Расходы в этом месяце
              </CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7,245 ₽</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
                <span className="text-green-500 font-medium">+12%</span> по сравнению с прошлым месяцем
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Всего заказов
              </CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <ArrowDownRight className="h-3 w-3 mr-1 text-red-500" />
                <span className="text-red-500 font-medium">-3%</span> по сравнению с прошлым месяцем
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Средний чек
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">302 ₽</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
                <span className="text-green-500 font-medium">+8%</span> по сравнению с прошлым месяцем
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <AnalyticsChart 
            title="История расходов"
            description="Анализ ваших расходов на продукты за последние 6 месяцев"
            spendingByMonth={monthlySpending}
            spendingByCategory={categorySpending}
          />
          
          <Card>
            <CardHeader>
              <CardTitle>Топ покупаемых товаров</CardTitle>
              <CardDescription>Товары, которые вы покупаете чаще всего</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  { name: "Молоко 3.2% 1л", count: 12, price: 89 },
                  { name: "Хлеб белый", count: 10, price: 54 },
                  { name: "Бананы 1кг", count: 8, price: 119 },
                  { name: "Яйца куриные C1 10шт", count: 8, price: 99 },
                  { name: "Чай черный 25пак", count: 6, price: 129 }
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center p-2 rounded-md hover:bg-muted">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <div className="text-sm text-muted-foreground">Куплено {item.count} раз</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{item.price} ₽</div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container text-center text-muted-foreground">
          ПродуктОнлайн © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Analytics;
