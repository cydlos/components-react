import styles from './Product.module.css';

const Product = () => {
  return (
    <div>
      <h1 className={styles.title}>Notebook</h1>
      <p className={styles.price}>$ 12000</p>
      <button className={styles.buy}>Buy</button>
    </div>
  );
};

export default Product;
