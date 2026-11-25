export type Offer = {
  text: string;
  imageUrl: string;
};

export function OfferItem({
  offer,
  index,
  isActive,
  onSelect,
}: {
  offer: Offer;
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
}) {
  return (
    <li className="border-b border-neutral-200">
      <button
        type="button"
        onClick={() => onSelect(index)}
        aria-current={isActive ? 'true' : undefined}
        className={`font-heading flex w-full items-baseline gap-2 py-2 text-left text-xl leading-tight font-medium tracking-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:gap-3 sm:py-4 sm:text-3xl md:items-start md:py-5 md:text-5xl ${
          isActive
            ? 'text-neutral-950'
            : 'text-neutral-400 hover:text-neutral-600 active:text-neutral-950'
        }`}
      >
        <span className="shrink-0 tabular-nums">{`(${String(index + 1).padStart(2, '0')})`}</span>
        <span>{offer.text}</span>
      </button>
    </li>
  );
}
