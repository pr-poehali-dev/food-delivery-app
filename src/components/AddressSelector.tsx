import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AddressSelector = () => {
  return (
    <div className="bg-white rounded-lg border p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon name="MapPin" size={20} className="text-primary" />
          <div>
            <p className="font-medium text-sm">Доставка по адресу</p>
            <p className="text-muted-foreground text-sm">
              ул. Пушкина, д. 10, кв. 5
            </p>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <Icon name="ChevronDown" size={16} />
        </Button>
      </div>
    </div>
  );
};

export default AddressSelector;
