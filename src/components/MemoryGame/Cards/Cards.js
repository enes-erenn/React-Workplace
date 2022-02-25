import styles from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setState } from "../../../store/MemoryGameSlice/MemoryGameSlice.js";
import { useEffect } from "react";

const Cards = () => {
  const cards = useSelector((state) => state.cards.items);
  const slots = useSelector((state) => state.cards.slots);
  const firstSlot = useSelector((state) => state.cards.firstSlot);
  const secondSlot = useSelector((state) => state.cards.secondSlot);
  const dispatch = useDispatch();

  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => {
            dispatch(setState({ id: card.id, title: card.title }));
          }}
          className={styles.card}
        >
          <div
            className={
              card.isActive
                ? `${styles.content} ${styles.hover}`
                : `${styles.content}`
            }
          >
            <div className={styles.front}>?</div>
            <div className={styles.back}>
              <img className={styles.img} src={card.img} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
