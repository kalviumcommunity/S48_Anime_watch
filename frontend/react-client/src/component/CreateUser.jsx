import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function CreateUser(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [favorite_anime_list, setFavorite_Anime_List] = useState("");
    const [watchlist, setWatchlist] = useState("");
    const navigate = useNavigate()

    const Submit = (e) =>{
        e.preventDefault();
        axios.post("https://anime-watch.onrender.com/createuser", {
            username,
            email,
            favorite_anime_list,
            watchlist
        })
        .then(result => {
            console.log(result)
            navigate('/Users')
        })
        .catch(err => {
            alert(err.response.data)
            console.log(err.response.data)
        })
    }

    return(
        <div className="d-flex vh-100 bg-black justify-content-center align-items-center">
            <div className='w-100 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add Users</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name </label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email </label>
                        <input type="text" placeholder="Enter Email" className="form-control"
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">favorite_anime_list </label>
                        <input type="text" placeholder="Enter favorite_anime_list" className="form-control"
                        onChange={(e)=>setFavorite_Anime_List(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Watchlist </label>
                        <input type="text" placeholder="Enter watchlist" className="form-control"
                        onChange={(e)=>setWatchlist(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;
