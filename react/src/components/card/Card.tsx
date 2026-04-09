import "./Card.css";

interface CardProps {
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
}

export const Card = (props: CardProps) => {
  const { imgSrc, imgAlt, title, desc } = props;
  return (
    <div className="card">
      <div className="card__img">
        <img
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
          className="card__img-image"
        />
        <span className="card__img-decor decor--top-left" />
        <span className="card__img-decor decor--bottom-right" />
      </div>

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{desc}</p>
      </div>
    </div>
  );
};
