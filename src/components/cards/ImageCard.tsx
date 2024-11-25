import styles from "../cards/ImageCard.module.scss";

type ImageProps = {
  image: {
    thumbnail: string,
    mobile: string,
    tablet: string,
    desktop: string,
  },
  thumbnail?: boolean

}

function ImageCard({ image, thumbnail }: ImageProps) {

  return (
    <>
      {!thumbnail ?
        <picture>
          <source media="(min-width: 769px)" srcSet={`${image.desktop}`} />
          <source media="(min-width: 376px)" srcSet={`${image.tablet}`} />
          <img src={`${image.mobile}`} alt="image" className={styles.ImageCard} />
        </picture>
        :
        <picture>
          <img src={`${image.thumbnail}`} alt="image" className={styles.ImageCard} />
        </picture>
      }
    </>
  );
}

export default ImageCard;
