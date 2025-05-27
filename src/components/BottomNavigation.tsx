import Icon from "@/components/ui/icon";

const BottomNavigation = () => {
  const navItems = [
    { icon: "User", label: "ЛК", active: false },
    { icon: "BarChart3", label: "Аналитика", active: false },
    { icon: "Store", label: "Магазины", active: true },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="container max-w-md mx-auto">
        <div className="flex justify-around py-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
                item.active
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon name={item.icon as any} size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
