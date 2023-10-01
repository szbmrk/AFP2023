import React, { useEffect, useState } from 'react'
import "../styles/offers.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Offers() {
    const [offers, setOffers] = useState([]);
    const navigate = useNavigate();
    const userId = sessionStorage.getItem("userId");

    useEffect(() => {
        fetchOffers();
    }, [])

    const fetchOffers = async () => {
        const response = await axios.get("http://localhost:5000/api/offers/" + userId);
        console.log(response.data);
        setOffers(response.data.result);
    }

    const acceptOffer = async (offerId) => {
        const response = await axios.post("http://localhost:5000/api/acceptoffer/" + offerId);
        console.log(response.data);
        fetchOffers();
    }

    const declineOffer = async (offerId) => {
        const response = await axios.delete("http://localhost:5000/api/declineoffer/" + offerId);
        console.log(response.data);
        fetchOffers();
    }

    return (
        <>
            <h1>Ajánlatok</h1>
            <button onClick={() => navigate("/offers/add")}>Ajánlat küldése</button>
            <h2>Ajánlataim</h2>
            {offers.length > 0 ? offers.map((offer) => (
                <div key={offers.offerId}>
                    <p>Küldte: {offer.username}</p>
                    <div>
                        <p>te skin-ed: { }</p>
                        <p>{offer.mySkin[0].fegyverNev + " | " + offer.mySkin[0].nev}</p>
                        <p>{offer.ertek}</p>
                    </div>
                    <div>
                        <p>ő skin-je: { }</p>
                        <p>{offer.theirSkin[0].fegyverNev + " | " + offer.theirSkin[0].nev}</p>
                        <p>{offer.ertek}</p>
                    </div>
                    <div>
                        <button onClick={() => acceptOffer(offer.offerId)}>Elfogad</button>
                        <button onClick={() => declineOffer(offer.offerId)}>Elutasít</button>
                    </div>
                </div>
            )) : <h4>Nincs aktív ajánlatod</h4>}
        </>
    )
}
