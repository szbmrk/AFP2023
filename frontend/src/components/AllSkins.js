import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../styles/allskins.css"

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
            <h1>Összes skin</h1>
            <div className = "container">
                {skins.map((skin) => (
                <div className="polaroidcontainer">
                    <div key={skin.SKINID}>
                        <div className ="picture">
                            <img src={`${process.env.PUBLIC_URL}/assets/skin_images/${skin.KEP}`} alt="skin" className="kep"/>
                        </div>
                        <div className = "overlay">
                            <p className ="skintext">{skin.FEGYVERNEV + " | " + skin.NEV}</p>
                            <p className="skintext">{skin.RITKASAGNEV}</p>
                            <p className="skintext">{skin.ERTEK}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}
