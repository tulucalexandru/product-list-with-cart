import ProductImage from "../../assets/images/image-cake-mobile.jpg";
import styles from "../cards/ImageCard.module.scss";

function ImageCard() {
  return <img src={ProductImage} alt="image" className={styles.ImageCard} />;
}

export default ImageCard;
