// Packages
import { useState, useEffect } from "react";
// Styles
import styles from "./Main.module.css";
// Components
import InputAPI from "../InputAPI";

function Main() {
  const snowing =
    "https://player.vimeo.com/external/514009030.sd.mp4?s=501ec0ae1120b341bcf2b560958515343bf9d2ed&profile_id=139&oauth2_token_id=57447761";

  const raining =
    "https://player.vimeo.com/external/216445899.sd.mp4?s=12a8bdab939bda39a710f02e093e069e55067719&profile_id=164&oauth2_token_id=57447761";

  const cloudy =
    "https://player.vimeo.com/external/408642844.sd.mp4?s=5a6ddff01fb9323efbde4616fc052f3d939adb05&profile_id=139&oauth2_token_id=57447761";

  const clearSky =
    "https://player.vimeo.com/external/420221145.sd.mp4?s=506857402d98eb686107e5ec482050bea5f1b33e&profile_id=139&oauth2_token_id=57447761";

  const [videoLink, setVideoLink] = useState(snowing);
  const [inputCity, setInputCity] = useState("Ankara");
  const [input, setInput] = useState();
  const [inputValue, setInputValue] = useState("");

  function citySubmitHandler(e) {
    e.preventDefault();
    setInputCity(input);
    setInputValue("");
  }

  function inputChangeHandler(e) {
    setInput(e.target.value);
    setInputValue(e.target.value);
  }

  return (
    <main>
      <form className={styles.inputContainer} onSubmit={citySubmitHandler}>
        <label htmlFor="search">Search a city:</label>
        <input
          type="text"
          id="input"
          className={styles.search}
          onChange={inputChangeHandler}
          value={inputValue}
        />
        <input type="submit" className={styles.glass} value="🔍" />
      </form>
      <div className={styles.outputContainer}>
        <InputAPI cityName={inputCity} />
      </div>
    </main>
  );
}

export default Main;