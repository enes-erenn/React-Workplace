import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./CharDetails.module.css";
import { Link } from "react-router-dom";

const CharDetails = () => {
  const [char, setChar] = useState();
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.header}>Breaking Bad</li>
          <div className={styles.pages}>
            <li className={styles.link}>
              <Link className={styles.link} to="/breakingbadcharacters">
                Characters
              </Link>
            </li>
            <li className={styles.link}>
              <Link className={styles.link} to="/breakingbadcharacters/quotes">
                Quotes
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      {loading && <div>Loading...</div>}
      {char && (
        <div className={styles.char}>
          <div className={styles.imgContainer}>

          <img className={styles.img} src={char.img} alt="" />
          </div>
          <div className={styles.informations}>
            <h1 className={styles.name}>{char.name}</h1>
            <h6>Birthday: </h6>
            <p className={styles.des}>{char.birthday}</p>
            <h6>Nickname: </h6>
            <p className={styles.des}>{char.nickname}</p>
            <h6>Occupation: </h6>
            <p className={styles.des}>
              {char.occupation.map((occ) => (
                <p>{occ}</p>
              ))}
            </p>
            <h6>Status:</h6>
            <p className={styles.des}>{char.status}</p>
            <h6>Portrayed:</h6>
            <p className={styles.des}>{char.portrayed}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharDetails;
