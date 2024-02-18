import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../StylesCSS/Computer.css'

function Computer(props) {
    const [isInfo, setIsInfo] = useState('none')
    const navigate = useNavigate()

    const { id, room_id, purchase_year, os, ram_volume, ram_type_id, cpu, storage_type_id,
        storage_volume, room_name, storage_type_name, ram_type_name} = props;

    const openInfo = () => {
        isInfo === 'none' ? setIsInfo('block') : setIsInfo('none')
    }

    const editInfo = (e) => {
        e.preventDefault()
        navigate(`edit_computer/${id}`)
    }

    return (
        <div className="computer">
            <div onClick={openInfo} className="computer__button">
                <span className="computer__name">Computer {id}</span>
                <div className="button__action">
                    <button onClick={(e) => editInfo(e, id)} className="edit">Edit</button>
                    <button onClick={() => props.onDelete(id)} className="delete">Delete</button>
                </div>
            </div>
            <div className="computer__info" style={{ display: isInfo }}>
                <p className="info">id: {id}</p>
                <p className="info">room_id: {room_id}</p>
                <p className="info">purchase_year: {purchase_year}</p>
                <p className="info">os: {os}</p>
                <p className="info">ram_volume: {ram_volume}</p>
                <p className="info">ram_type_id: {ram_type_id}</p>
                <p className="info">cpu: {cpu}</p>
                <p className="info">storage_type_id: {storage_type_id}</p>
                <p className="info">storage_volume: {storage_volume}</p>
                <p className="info">room_name: {room_name}</p>
                <p className="info">storage_type_name: {storage_type_name}</p>
                <p className="info">ram_type_name: {ram_type_name}</p>
            </div>
        </div>
    )
}

export default Computer;