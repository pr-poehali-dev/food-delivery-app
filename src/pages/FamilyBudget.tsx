import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import BottomNavigation from "@/components/BottomNavigation";

const FamilyBudget = () => {
  const [budgetLimit, setBudgetLimit] = useState(50000);
  const [spent] = useState(32500);
  const remaining = budgetLimit - spent;
  const spentPercentage = (spent / budgetLimit) * 100;

  const familySpending = [
    { name: "Мама", amount: 15200, category: "Продукты" },
    { name: "Папа", amount: 8300, category: "Техника" },
    { name: "Дочь", amount: 5800, category: "Одежда" },
    { name: "Сын", amount: 3200, category: "Игрушки" },
  ];

  const budgetOffers = [
    { name: "Хлеб белый", price: 45, oldPrice: 65, discount: 31 },
    { name: "Молоко 1л", price: 89, oldPrice: 115, discount: 23 },
    { name: "Куриное филе 1кг", price: 299, oldPrice: 399, discount: 25 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Семейный бюджет</h1>
          <p className="text-sm text-gray-600 mt-1">
            Управляйте семейными тратами
          </p>
        </div>

        {/* Budget Setting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Settings" size={20} />
              Лимит бюджета
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                type="number"
                value={budgetLimit}
                onChange={(e) => setBudgetLimit(Number(e.target.value))}
                placeholder="Введите лимит"
              />
              <Button>Сохранить</Button>
            </div>
          </CardContent>
        </Card>

        {/* Budget Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Icon name="PieChart" size={20} />
                Обзор бюджета
              </span>
              <span className="text-lg font-bold text-primary">
                {remaining.toLocaleString()} ₽
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Потрачено: {spent.toLocaleString()} ₽</span>
                <span>Лимит: {budgetLimit.toLocaleString()} ₽</span>
              </div>
              <Progress value={spentPercentage} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Family Spending */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              Траты по членам семьи
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {familySpending.map((member, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.category}</p>
                </div>
                <span className="font-bold text-lg">
                  {member.amount.toLocaleString()} ₽
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Budget-Friendly Offers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Tag" size={20} />
              Выгодные предложения
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {budgetOffers.map((offer, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-medium">{offer.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-bold text-green-600">
                      {offer.price} ₽
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {offer.oldPrice} ₽
                    </span>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                      -{offer.discount}%
                    </span>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Icon name="Plus" size={16} />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default FamilyBudget;
