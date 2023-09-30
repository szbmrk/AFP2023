import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../styles/inventory.css"

export default function Inventory() {
    const [skins, setSkins] = useState([]);
    const userId = JSON.parse(sessionStorage.getItem("userId"));

    useEffect(() => {
        fetchSkins();
    }, [])

    const fetchSkins = async () => {
        const response = await axios.get("http://localhost:5000/api/inventory/" + userId);
        setSkins(response.data.result);
    }

    return (
        <>
            <h1>Inventory</h1>
            {skins && skins.length == 0 ? <div>Inventory is empty!</div> : <div>
                {skins.map((skin) => (
                    <div key={skin.skinId}>
                        <img src={"../../../backend/skin_images/" + skin.kep} alt="skin" />
                        <p>{skin.fegyverNev + " | " + skin.nev}</p>
                        <p>{skin.ritkasagNev}</p>
                        <p>{skin.ertek}</p>
                    </div>
                ))}
            </div>
            }
        </>
    )
}
