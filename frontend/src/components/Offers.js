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
            <h1 className='text'>Ajánlatok</h1>
            <div className ="offercontainer">
                <button onClick={() => navigate("/offers/add")} className="send">Ajánlat küldése</button>
                {offers.length > 0 ? offers.map((offer) => (
                    <div key={offers.OFFERID} className = "container">
                        <p className ="text4">Küldte: {offer.USERNAME}</p>
                        <div className="yours">
                            <p>{"A te skined: "+ offer.mySkin[0].FEGYVERNEV + " | " + offer.mySkin[0].NEV}</p>
                            <p>{offer.ERTEK}</p>
                        </div>
                        <div className="theirs">
                            <p>{"Az ő skinje:" + offer.theirSkin[0].FEGYVERNEV + " | " + offer.theirSkin[0].NEV}</p>
                            <p>{offer.ERTEK}</p>
                        </div>
                        <div>
                            <button onClick={() => acceptOffer(offer.OFFERID)} className="send2">Elfogad</button>
                            <button onClick={() => declineOffer(offer.OFFERID)} className="send2">Elutasít</button>
                        </div>
                    </div>
                  
            )) : <h4>Nincs aktív ajánlatod</h4>}
            </div>
        </>
    )
}
