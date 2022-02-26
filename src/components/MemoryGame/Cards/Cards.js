import styles from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setState,
  shuffle,
} from "../../../store/MemoryGameSlice/MemoryGameSlice.js";

const Cards = () => {
  const items = [
    {
      id: 1,
      title: "bower",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 2,
      title: "angular",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 3,
      title: "ionic",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 4,
      title: "browserify",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 5,
      title: "meteor",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 6,
      title: "grunt",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 7,
      title: "phantomjs",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 8,
      title: "yarn",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 9,
      title: "react",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 10,
      title: "babel",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 11,
      title: "vue",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 12,
      title: "nodejs",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 13,
      title: "gulp",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 14,
      title: "ember",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 15,
      title: "yeoman",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 16,
      title: "bower",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 17,
      title: "angular",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 18,
      title: "ionic",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 19,
      title: "browserify",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 20,
      title: "meteor",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 21,
      title: "grunt",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 22,
      title: "phantomjs",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 23,
      title: "yarn",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 24,
      title: "react",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 25,
      title: "babel",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 26,
      title: "vue",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 27,
      title: "nodejs",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 28,
      title: "gulp",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 29,
      title: "ember",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
      isActive: false,
      isLocked: false,
    },
    {
      id: 30,
      title: "yeoman",
      img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",
      isActive: false,
      isLocked: false,
    },
  ];
  const cards = useSelector((state) => state.cards.items);
  const points = useSelector((state) => state.cards.points);
  const win = useSelector((state) => state.cards.win);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shuffle({ shuffledItems: shuffled }));
  }, []);
  const shuffled = items.sort(() => Math.random() - 0.5);
  return (
    <div>
      <h3 className={styles.points}>Points: {points}</h3>
      {win ? (
        <button
          className={styles.win}
          onClick={() => dispatch(shuffle({ shuffledItems: shuffled }))}
        >
          Shuffle
        </button>
      ) : (
        ""
      )}

      <div className={styles.cards}>
        {cards.map((card, i) => (
          <div
            key={card.id}
            onClick={() => {
              dispatch(setState({ index: i, title: card.title }));
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
              <div
                className={
                  card.isLocked ? `${styles.selected} ` : `${styles.back}`
                }
              >
                <img className={styles.img} src={card.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
