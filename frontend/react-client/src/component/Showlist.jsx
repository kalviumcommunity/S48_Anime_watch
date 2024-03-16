import { useState,useEffect } from 'react';
import axios from 'axios';

function Showlist(){
const [users, setUsers] = useState([])
    const [Lists ,setlists]  = useState([])
    const [selectedValue, setselectedValue]=  useState()

    useEffect(() => {
      axios.get('http://localhost:3000/api/users')
      .then(result => {setUsers(result.data)
    })
      .catch(err => console.log(err))
    },[])

    useEffect(() => {
        axios.get('http://localhost:3000/api/lists')
        .then(result => {setlists(result.data)
      })
        .catch(err => console.log(err))
      },[])    

    const handleSelectChange = (e) =>{
        setselectedValue(e.target.value)
    }

    return(
        <div>
            <select value={selectedValue} onChange={handleSelectChange} className="add-button">
            {
                users.map((item)=>(
                    <option key={item._id} value={item.username}> {item.username} </option> 
                ))
            }
            </select>
            <div>
            {
                Lists.filter(item => item.createdby == selectedValue).map(
                    (List, i)=>(
                        <div key={i}>
                            <p>Watchlist</p>
                            <h2>{List.Watchlist}</h2> <br />
                            <p>Favouriteanime</p>
                            <h2>{List.Favouriteanime}</h2>
                        </div>
                    )
                )
            }
            </div>
        </div>

    )
}


export default Showlist