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
    const getRarityColorClass = (RITKASAGID) => {
        // Define color classes for each rarity
        const rarityColors = {
            1: '#4B69FF',
            2: '#8847FF',
            3: '#D32CE6',
            4: '#EB4B4B',
            5: '#E4AE33',
        };
    
        // Return the corresponding color class based on rarity
        return rarityColors[RITKASAGID] || 'black';
      };

    return (
        <>
            <h1 className = "text">Inventory</h1>
            {!skins && skins.length === 0 ? <h2>Üres az inventoryd!</h2> : 
            <div className ="container">
                {skins.map((skin) => (
                    <div className ="polaroidcontainer">
                    <div key={skin.SKINID}>
                        <div className ="picture">
                            <img src={`${process.env.PUBLIC_URL}/assets/skin_images/${skin.KEP}`} alt="skin" />
                        </div>
                        <div className = "overlay">
                            <p className ="skintext">{skin.FEGYVERNEV + " | " + skin.NEV}</p>
                            <p className="skinRarity" style={{ color: getRarityColorClass(skin.RITKASAGID) }}> {skin.RITKASAGNEV}</p>
                            <p className="skintext">{skin.ERTEK + "€"}</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            }
        </>
    )
}
