import axios from 'axios';
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"

export default function List() {

  const navigate = useNavigate();
  const username= Cookies.get("username")
  console.log(username)
  const [formData, setFormData] = useState({
    Watchlist: "",
    Favouriteanime: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
        axios.post("https://anime-watch.onrender.com/api/addlist", {
            Watchlist: formData.Watchlist,
            Favouriteanime: formData.Favouriteanime,
            createdby : username
        })
        .then(result => {
            console.log(result)
            navigate('/Home')
        })
        .catch(err => console.log(err))
    }


  return (
    <div>
        <div className="input-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="Watchlist">Watchlist:</label>
          <input
            type="text"
            id="Watchlist"
            name="Watchlist"
            placeholder="Enter your Watchlist"
            value={formData.Watchlist}
            onChange={handleChange}
            required
          />

          <label htmlFor="Favouriteanime">Favouriteanime:</label>
          <input
            type="Favouriteanime"
            id="Favouriteanime"
            name="Favouriteanime"
            placeholder="Enter your Favouriteanime address"
            value={formData.Favouriteanime}
            onChange={handleChange}
            required
          />

          <button className="SignUpBtn" type="submit">
            SUBMIT
          </button>
        </form>

        </div>
    </div>
  );
}
