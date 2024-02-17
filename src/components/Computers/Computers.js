import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import Computer from "../Computer/Computer"
import GetById from "../GetById";

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer fyEshMxm7Z1MnZ0LsA0fCUCs1HUSwPp0mYOmrwaxXwEC3LvoBULurwHi6R2uBHX0");

const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

const requestOptionsDelete = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
};

const apiUrl = "https://am.nung.edu.ua/api"

function Computers() {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [searchId, setSearchId] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const url = searchId !== null ? `${apiUrl}/computers?id=${searchId}` : `${apiUrl}/computers`;
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }, [searchId])

    if (error) {
        return <h1>error: {error}</h1>
    }

    const handleSearch = (id) => {
        setSearchId(id !== '' ? id : null);
    }

    const handleDelete = (id) => {
        fetch(`https://am.nung.edu.ua/api/computers?id=${id}`, requestOptionsDelete)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

        const updatedData = data.filter(computer => computer.id !== id);
        setData(updatedData);
    };

    return (
        <>
            {isLoading ? (<p>Loading...</p>) : (
                <>
                    <GetById handleSearch={handleSearch} />
                    <NavLink className='add__computer__link' to={'add_computer'}><button>Add computer</button></NavLink>
                    
                    {data == '' ? <p>No result</p> 
                    : <div className="content">
                        {data.map(element => <Computer {...element} key={element.id} onDelete={() => handleDelete(element.id)} />)}
                    </div>}
                </>
            )}
        </>

    )
}

export default Computers