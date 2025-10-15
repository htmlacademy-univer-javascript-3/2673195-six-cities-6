export function OfferDescription({description}: { description: string[] }) {
  return (
    <div className="offer__description">
      {description.map((paragraph) =>
        (
          <p className="offer__text" key={paragraph}>
            {paragraph}
          </p>))}
    </div>);
}
