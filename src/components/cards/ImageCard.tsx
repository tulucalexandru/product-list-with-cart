import styles from "../cards/ImageCard.module.scss";

type ImageProps = {
  url: string;
}

function ImageCard({ url }: ImageProps) {
  return <img src={`./src/${url}`} alt="image" className={styles.ImageCard} />;
}

export default ImageCard;
