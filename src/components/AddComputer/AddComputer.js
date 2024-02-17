import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AddEditComputer.css'


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer fyEshMxm7Z1MnZ0LsA0fCUCs1HUSwPp0mYOmrwaxXwEC3LvoBULurwHi6R2uBHX0");

function AddComputer() {
    const [addData, setAddData] = useState({
        room_id: '', purchase_year: '', os: '', ram_volume: '', ram_type_id: '', cpu: '', storage_type_id: '', storage_volume: ''
    })
    const navigate = useNavigate()

    const changeAddData = (e, value) => {
        setAddData({ ...addData, [value]: e.target.value })
    }

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(addData),
        redirect: "follow"
    };

    const sentData = (e) => {
        const isDataValid = Object.values(addData).every(value => value.trim() !== '');

        if (!isDataValid) {
            console.error('Not all fields are filled in');
            return;
        }

        e.preventDefault()
        fetch("https://am.nung.edu.ua/api/computers", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error))
            .finally(() => navigate('..', { relative: 'path' }));
    }

    return (
        <form className="add__edit__computer">
            <input className="add__edit__info" placeholder="room_id" pattern="[0-9]*" maxLength="1" value={addData.room_id} onChange={(e) => changeAddData(e, 'room_id')} required />
            <input className="add__edit__info" placeholder="purchase_year" pattern="[0-9]*" maxLength="4" value={addData.purchase_year} onChange={(e) => changeAddData(e, 'purchase_year')} required />
            <input className="add__edit__info" placeholder="os" value={addData.os} onChange={(e) => changeAddData(e, 'os')} required />
            <input className="add__edit__info" placeholder="ram_volume" pattern="[0-9]*" value={addData.ram_volume} onChange={(e) => changeAddData(e, 'ram_volume')} required />
            <input className="add__edit__info" placeholder="ram_type_id" pattern="[0-9]*" maxLength="1" value={addData.ram_type_id} onChange={(e) => changeAddData(e, 'ram_type_id')} required />
            <input className="add__edit__info" placeholder="cpu" value={addData.cpu} onChange={(e) => changeAddData(e, 'cpu')} required />
            <input className="add__edit__info" placeholder="storage_type_id" pattern="[0-9]*" maxLength="1" value={addData.storage_type_id} onChange={(e) => changeAddData(e, 'storage_type_id')} required />
            <input className="add__edit__info" placeholder="storage_volume" value={addData.storage_volume} onChange={(e) => changeAddData(e, 'storage_volume')} required />

            <button onClick={(e) => sentData(e)} className='add__edit__button'>Add new computer</button>
        </form>
    )
}

export default AddComputer;