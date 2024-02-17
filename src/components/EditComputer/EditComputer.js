import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../AddEditComputer.css'


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer fyEshMxm7Z1MnZ0LsA0fCUCs1HUSwPp0mYOmrwaxXwEC3LvoBULurwHi6R2uBHX0");

function EditComputer() {
    const [editData, setEditData] = useState({
        room_id: '', purchase_year: '', os: '', ram_volume: '', ram_type_id: '', cpu: '', storage_type_id: '', storage_volume: ''
    })
    const { id } = useParams()
    const navigate = useNavigate()

    const changeEditData = (e, value) => {
        setEditData({ ...editData, [value]: e.target.value })
    }

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(editData),
        redirect: "follow"
    };

    const requestOptionsEdit = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    
    useEffect(() => {
        fetch(`https://am.nung.edu.ua/api/computers?id=${id}`, requestOptionsEdit)
            .then((response) => response.json())
            .then((result) => setEditData(result[0]))
            .catch((error) => console.error(error));
    }, [id])

    const sentData = (e) => {
        e.preventDefault()
        fetch(`https://am.nung.edu.ua/api/computers?id=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.error(error))
            .finally(() => navigate('/computers', { relative: 'path' }));
    }

    return (
        <form className="add__edit__computer">
            <input className="add__edit__info" placeholder="room_id" pattern="[0-9]*" maxLength="1" value={editData.room_id} onChange={(e) => changeEditData(e, 'room_id')} />
            <input className="add__edit__info" placeholder="purchase_year" pattern="[0-9]*" maxLength="4" value={editData.purchase_year} onChange={(e) => changeEditData(e, 'purchase_year')} />
            <input className="add__edit__info" placeholder="os" value={editData.os} onChange={(e) => changeEditData(e, 'os')} />
            <input className="add__edit__info" placeholder="ram_volume" pattern="[0-9]*" value={editData.ram_volume} onChange={(e) => changeEditData(e, 'ram_volume')} />
            <input className="add__edit__info" placeholder="ram_type_id" pattern="[0-9]*" maxLength="1" value={editData.ram_type_id} onChange={(e) => changeEditData(e, 'ram_type_id')} />
            <input className="add__edit__info" placeholder="cpu" value={editData.cpu} onChange={(e) => changeEditData(e, 'cpu')} />
            <input className="add__edit__info" placeholder="storage_type_id" pattern="[0-9]*" maxLength="1" value={editData.storage_type_id} onChange={(e) => changeEditData(e, 'storage_type_id')} />
            <input className="add__edit__info" placeholder="storage_volume" value={editData.storage_volume} onChange={(e) => changeEditData(e, 'storage_volume')} />

            <button onClick={(e) => sentData(e)} className='add__edit__button'>Add edit info</button>
        </form>
    )
}

export default EditComputer;