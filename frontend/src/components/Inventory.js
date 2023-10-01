import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../styles/inventory.css"

export default function Inventory() {
    const [skins, setSkins] = useState([]);
    const userId = sessionStorage.getItem("userId");

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
            {!skins && skins.length === 0 ? <h2>Üres az inventoryd!</h2> : <div>
                {skins.map((skin) => (
                    <div key={skin.SKINID}>
                        <img src={`${process.env.PUBLIC_URL}/assets/skin_images/${skin.KEP}`} alt="skin" />
                        <p>{skin.FEGYVERNEV + " | " + skin.NEV}</p>
                        <p>{skin.RITKASAGNEV}</p>
                        <p>{skin.ERTEK}</p>
                    </div>
                ))}
            </div>
            }
        </>
    )
}
