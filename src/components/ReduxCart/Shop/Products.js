// Styles
import styles from "./Products.module.css";
// Components
import ProductItem from "./ProductItem";

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      price: 6,
      title: "My First Book",
      description: "The first book I ever wrote",
    },
  ];

  return (
    <section className={styles.products}>
      <h2 className={styles.header}>Buy your favorite products</h2>
      <ul className={styles.list}>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
