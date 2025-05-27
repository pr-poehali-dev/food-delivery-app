interface BonusCardProps {
  storeName: string;
  bonusPoints: number;
  brandColor: string;
  logo: string;
}

const BonusCard = ({
  storeName,
  bonusPoints,
  brandColor,
  logo,
}: BonusCardProps) => {
  return (
    <div
      className="min-w-[280px] bg-gradient-to-br from-white to-gray-50 rounded-xl border p-4 shadow-sm"
      style={{ borderColor: brandColor + "20" }}
    >
      <div className="flex items-center justify-between mb-3">
        <img
          src={logo}
          alt={storeName}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div
          className="px-3 py-1 rounded-full text-white text-xs font-medium"
          style={{ backgroundColor: brandColor }}
        >
          {bonusPoints} баллов
        </div>
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{storeName}</h3>
      <p className="text-sm text-muted-foreground">Карта лояльности</p>
    </div>
  );
};

export default BonusCard;
