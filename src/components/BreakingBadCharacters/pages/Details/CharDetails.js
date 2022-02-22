import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      {loading && <div>Loading...</div>}
      {char && (
        <div>
          <h1>{char.name}</h1>
          <img src={char.img} alt="" />
        </div>
      )}
    </div>
  );
};

export default CharDetails;
