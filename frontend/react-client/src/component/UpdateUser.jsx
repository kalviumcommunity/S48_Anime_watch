import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
    const { id } = useParams();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [favorite_anime_list, setFavorite_Anime_List] = useState('');
    const [watchlist, setWatchlist] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/getUser/${id}`)
            .then(response => {
                const { username, email, favorite_anime_list, watchlist } = response.data;
                setUsername(username);
                setEmail(email);
                setFavorite_Anime_List(favorite_anime_list);
                setWatchlist(watchlist)
            })
            .catch(error => console.log(error));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/updateUser/${id}`, { username, email, favorite_anime_list })
            .then(response => {
                console.log(response);
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="d-flex vh-100 bg-black justify-content-center align-items-center">
            <div className='w-200 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Update Users</h2>
                    <div className="mb-2">
                        <label htmlFor="">Username </label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                            value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email </label>
                        <input type="text" placeholder="Enter Email" className="form-control"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">favorite_anime_list </label>
                        <input type="text" placeholder="Enter favorite_anime_list" className="form-control"
                            value={favorite_anime_list} onChange={(e) => setFavorite_Anime_List(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">watchlist </label>
                        <input type="text" placeholder="Enter watchlist" className="form-control"
                            value={watchlist} onChange={(e) => setWatchlist(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
