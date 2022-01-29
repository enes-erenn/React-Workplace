// Packages and Dependencies
import axios from "axios";
import { useState, useEffect } from "react";
// Components
import MainCard from "./UI/Main/MainCard.js";
import Aside from "./UI/AsideLeft/AsideLeft.js";
import AsideRight from "./UI/AsideRight/AsideRight.js";

function InputAPI(props) {
  const key = "ff2e21468d0bd228ea8adbb12de2a82f";
  const [inputDeg, setInputDeg] = useState();
  const [inputIcon, setInputIcon] = useState();
  const [inputCity, setInputCity] = useState();
  const [inputDes, setInputDes] = useState();
  const [videoLink, setVideoLink] = useState();
  const [dayOne, setDayOne] = useState();
  const [dayTwo, setDayTwo] = useState();
  const [dayThree, setDayThree] = useState();
  const [dayFour, setDayFour] = useState();
  const [dayFive, setDayFive] = useState();
  const [daySix, setDaySix] = useState();
  const [daySeven, setDaySeven] = useState();
  const [dayOneIcon, setDayOneIcon] = useState();
  const [dayTwoIcon, setDayTwoIcon] = useState();
  const [dayThreeIcon, setDayThreeIcon] = useState();
  const [dayFourIcon, setDayFourIcon] = useState();
  const [dayFiveIcon, setDayFiveIcon] = useState();
  const [daySixIcon, setDaySixIcon] = useState();
  const [daySevenIcon, setDaySevenIcon] = useState();
  const [nightOne, setNightOne] = useState();
  const [nightTwo, setNightTwo] = useState();
  const [nightThree, setNightThree] = useState();
  const [nightFour, setNightFour] = useState();
  const [nightFive, setNightFive] = useState();
  const [nightSix, setNightSix] = useState();
  const [nightSeven, setNightSeven] = useState();
  const [descriptionOne, setDescriptionOne] = useState();
  const [descriptionTwo, setDescriptionTwo] = useState();
  const [descriptionThree, setDescriptionThree] = useState();
  const [descriptionFour, setDescriptionFour] = useState();
  const [descriptionFive, setDescriptionFive] = useState();
  const [descriptionSix, setDescriptionSix] = useState();
  const [descriptionSeven, setDescriptionSeven] = useState();
  const [feelsDay, setFeelsDay] = useState();
  const [feelsNight, setFeelsNight] = useState();
  const [feelsMorn, setFeelsMorn] = useState();
  const [feelsEve, setFeelsEve] = useState();
  const iconOne = `http://openweathermap.org/img/wn/${dayOneIcon}@2x.png`;
  const iconTwo = `http://openweathermap.org/img/wn/${dayTwoIcon}@2x.png`;
  const iconThree = `http://openweathermap.org/img/wn/${dayThreeIcon}@2x.png`;
  const iconFour = `http://openweathermap.org/img/wn/${dayFourIcon}@2x.png`;
  const iconFive = `http://openweathermap.org/img/wn/${dayFiveIcon}@2x.png`;
  const iconSix = `http://openweathermap.org/img/wn/${daySixIcon}@2x.png`;
  const iconSeven = `http://openweathermap.org/img/wn/${daySevenIcon}@2x.png`;
  let imgUrl = `http://openweathermap.org/img/wn/${inputIcon}@2x.png`;
  let city = props.cityName;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=en`
      )
      .then((res) => {
        setInputDeg(res.data.main.temp);
        setInputIcon(res.data.weather[0].icon);
        setInputCity(res.data.name);
        setInputDes(res.data.weather[0].description);
        if (res.data.weather[0].description.includes("cloud")) {
          setVideoLink(
            "https://player.vimeo.com/external/408642844.sd.mp4?s=5a6ddff01fb9323efbde4616fc052f3d939adb05&profile_id=139&oauth2_token_id=57447761"
          );
        } else if (res.data.weather[0].description.includes("broken clouds")) {
          setVideoLink(
            "https://player.vimeo.com/external/314728144.sd.mp4?s=6805a87f81188a7f01d0394461308cae09716633&profile_id=164&oauth2_token_id=57447761"
          );
        } else if (res.data.weather[0].description.includes("snow")) {
          setVideoLink(
            "https://player.vimeo.com/external/514009030.sd.mp4?s=501ec0ae1120b341bcf2b560958515343bf9d2ed&profile_id=139&oauth2_token_id=57447761"
          );
        } else if (res.data.weather[0].description.includes("rain")) {
          setVideoLink(
            "https://player.vimeo.com/external/216445899.sd.mp4?s=12a8bdab939bda39a710f02e093e069e55067719&profile_id=164&oauth2_token_id=57447761"
          );
        } else if (res.data.weather[0].description.includes("clear sky")) {
          setVideoLink(
            "https://player.vimeo.com/external/420221145.sd.mp4?s=506857402d98eb686107e5ec482050bea5f1b33e&profile_id=139&oauth2_token_id=57447761"
          );
        } else if (res.data.weather[0].description.includes("storm")) {
          setVideoLink(
            "https://player.vimeo.com/external/293913779.sd.mp4?s=391a9b4a5da506bcaab3bd20172f6368bc2ea2f5&profile_id=164&oauth2_token_id=57447761"
          );
        } else if (res.data.weather[0].description.includes("mist")) {
          setVideoLink(
            "https://player.vimeo.com/external/317623578.sd.mp4?s=af98802d6bb3d75edb6fd92e67c3756ddb1ebfa8&profile_id=164&oauth2_token_id=57447761"
          );
        } else {
          setVideoLink(
            "https://player.vimeo.com/external/414879100.sd.mp4?s=dbe02aa9b047a22c01279e0b08a546a33179e642&profile_id=139&oauth2_token_id=57447761"
          );
        }
      })
      .then(
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${key}`
          )
          .then((res) => {
            setDayOne(res.data.list[0].temp.day);
            setDayTwo(res.data.list[1].temp.day);
            setDayThree(res.data.list[2].temp.day);
            setDayFour(res.data.list[3].temp.day);
            setDayFive(res.data.list[4].temp.day);
            setDaySix(res.data.list[5].temp.day);
            setDaySeven(res.data.list[6].temp.day);
            setDayOneIcon(res.data.list[0].weather[0].icon);
            setDayTwoIcon(res.data.list[1].weather[0].icon);
            setDayThreeIcon(res.data.list[2].weather[0].icon);
            setDayFourIcon(res.data.list[3].weather[0].icon);
            setDayFiveIcon(res.data.list[4].weather[0].icon);
            setDaySixIcon(res.data.list[5].weather[0].icon);
            setDaySevenIcon(res.data.list[6].weather[0].icon);
            setNightOne(res.data.list[0].temp.night);
            setNightTwo(res.data.list[1].temp.night);
            setNightThree(res.data.list[2].temp.night);
            setNightFour(res.data.list[3].temp.night);
            setNightFive(res.data.list[4].temp.night);
            setNightSix(res.data.list[5].temp.night);
            setNightSeven(res.data.list[6].temp.night);
            setDescriptionOne(res.data.list[0].weather[0].description);
            setDescriptionTwo(res.data.list[1].weather[0].description);
            setDescriptionThree(res.data.list[2].weather[0].description);
            setDescriptionFour(res.data.list[3].weather[0].description);
            setDescriptionFive(res.data.list[4].weather[0].description);
            setDescriptionSix(res.data.list[5].weather[0].description);
            setDescriptionSeven(res.data.list[6].weather[0].description);
            setFeelsDay(res.data.list[0].feels_like["day"]);
            setFeelsNight(res.data.list[0].feels_like["night"]);
            setFeelsMorn(res.data.list[0].feels_like["morn"]);
            setFeelsEve(res.data.list[0].feels_like["eve"]);
          })
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  }, [city]);

  return (
    <>
      <Aside
        dayOne={dayOne}
        dayTwo={dayTwo}
        dayThree={dayThree}
        dayFour={dayFour}
        dayFive={dayFive}
        daySix={daySix}
        daySeven={daySeven}
        dayOneIcon={iconOne}
        dayTwoIcon={iconTwo}
        dayThreeIcon={iconThree}
        dayFourIcon={iconFour}
        dayFiveIcon={iconFive}
        daySixIcon={iconSix}
        daySevenIcon={iconSeven}
        nightOne={nightOne}
        nightTwo={nightTwo}
        nightThree={nightThree}
        nightFour={nightFour}
        nightFive={nightFive}
        nightSix={nightSix}
        nightSeven={nightSeven}
        dayOneDescription={descriptionOne}
        dayTwoDescription={descriptionTwo}
        dayThreeDescription={descriptionThree}
        dayFourDescription={descriptionFour}
        dayFiveDescription={descriptionFive}
        daySixDescription={descriptionSix}
        daySevenDescription={descriptionSeven}
      />
      <MainCard
        cityName={inputCity}
        cityDeg={inputDeg}
        weatherIcon={imgUrl}
        weatherDescription={inputDes}
        videoLink={videoLink}
      />
      <AsideRight
        feelsDay={feelsDay}
        feelsNight={feelsNight}
        feelsMorn={feelsMorn}
        feelsEve={feelsEve}
      />
    </>
  );
}

export default InputAPI;