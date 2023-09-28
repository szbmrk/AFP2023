import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function AllSkins() {
    const [skins, setSkins] = useState([]);

    useEffect(() => {
        fetchSkins();
    }, [])

    const fetchSkins = async () => {
        const response = await axios.get("http://localhost:5000/api/skins");
        setSkins(response.data.result);
        console.log(response.data.result);
    }

    return (
        <>
            <div>AllSkins</div>
            <div>
                {skins.map((skin) => (
                    <div key={skin.skinId}>
                        <img src={"../../../backend/skin_images/" + skin.kep} alt="skin" />
                        <p>{skin.fegyverNev + " | " + skin.nev}</p>
                        <p>{skin.ritkasagNev}</p>
                        <p>{skin.ertek}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
