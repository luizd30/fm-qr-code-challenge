import "./Card.css";

interface CardProps {
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
}

export const Card = (props: CardProps) => {
  
  return (
    <div class="card">
      <div class="card__img">
        <img
          src={props.imgSrc}
          alt={props.imgAlt}
          loading="lazy"
          class="card__img-image"
        />
        <span class="card__img-decor decor--top-left" />
        <span class="card__img-decor decor--bottom-right" />
      </div>

      <div class="card__body">
        <h3 class="card__title">{props.title}</h3>
        <p class="card__description">{props.desc}</p>
      </div>
    </div>
  );
};
