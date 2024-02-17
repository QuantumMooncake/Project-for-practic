import { useState } from "react";

function GetById ({handleSearch}) {
    const [id, setId] = useState('')

    const handleChange = (event) => {
        setId(event.target.value)
        handleSearch(event.target.value)
    }

    return (
        <input className="id__input" placeholder="Search by ID" value={id} onChange={handleChange}></input>
    )
}

export default GetById;