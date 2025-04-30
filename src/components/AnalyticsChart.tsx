import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from "recharts";

type AnalyticsDataPoint = {
  name: string;
  value: number;
  category?: string;
};

type AnalyticsChartProps = {
  title: string;
  description: string;
  spendingByMonth: AnalyticsDataPoint[];
  spendingByCategory: AnalyticsDataPoint[];
};

const AnalyticsChart = ({ title, description, spendingByMonth, spendingByCategory }: AnalyticsChartProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="byMonth">
          <TabsList className="mb-4">
            <TabsTrigger value="byMonth">По месяцам</TabsTrigger>
            <TabsTrigger value="byCategory">По категориям</TabsTrigger>
          </TabsList>
          
          <TabsContent value="byMonth" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spendingByMonth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value: number) => [`${value} ₽`, 'Сумма']}
                  labelFormatter={(label) => `Месяц: ${label}`}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Расходы"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="byCategory" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={spendingByCategory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [`${value} ₽`, 'Сумма']}
                  labelFormatter={(label) => `Категория: ${label}`}
                />
                <Legend />
                <Bar
                  dataKey="value"
                  name="Расходы"
                  fill="#8884d8"
                />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AnalyticsChart;
