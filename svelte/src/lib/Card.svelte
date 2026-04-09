<script lang="ts">
  interface CardProps {
    title: string;
    desc: string;
    imgSrc: string;
    imgAlt: string;
  }

  let { title, desc, imgSrc, imgAlt }: CardProps = $props();
</script>

<div class="card">
  <div class="card__img">
    <img src={imgSrc} alt={imgAlt} loading="lazy" class="card__img-image" />
    <span class="card__img-decor decor--top-left"></span>
    <span class="card__img-decor decor--bottom-right"></span>
  </div>

  <div class="card__body">
    <h3 class="card__title">{title}</h3>
    <p class="card__description">{desc}</p>
  </div>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    padding: var(--space-4);
    padding-bottom: var(--space-10);
    width: 320px;
    background-color: var(--white);
    border-radius: 20px;
  }

  .card__body {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    padding-left: var(--space-4);
    padding-right: var(--space-4);
    text-align: center;
  }

  .card__description {
    font-weight: normal;
    font-size: var(--card-description-size);
    line-height: var(--card-description-line);
    color: var(--slate-500);
  }

  .card__img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 288px;
    height: 288px;
    position: relative;
    background-color: var(--blue-600);
    overflow: hidden;
    border-radius: 10px;
  }

  .card__img-image {
    width: 160px;
    height: 160px;
    z-index: 10;
  }

  .card__img-decor {
    position: absolute;
    background-color: var(--blue-500);
    border-radius: 100%;
    z-index: 0;
  }

  .decor--top-left {
    width: 328px;
    height: 328px;
    left: -130px;
    top: -160px;
  }

  .decor--bottom-right {
    width: 270px;
    height: 270px;
    bottom: -200px;
    right: -130px;
  }

  .card__title {
    font-weight: bold;
    font-size: var(--card-title-size);
    line-height: var(--card-title-line);
    color: var(--slate-900);
  }
</style>
