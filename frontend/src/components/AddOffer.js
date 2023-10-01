import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useFetcher, useNavigate } from 'react-router-dom';

export default function AddOffer() {
    const [users, setUsers] = useState([]);
    const [mySkins, setMySkins] = useState([]);
    const [theirSkins, setTheirSkins] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [myChosenSkin, setMyChosenSkin] = useState("");
    const [theirChosenSkin, setTheirChosenSkin] = useState("");

    const navigate = useNavigate();
    const userId = sessionStorage.getItem("userId");

    useEffect(() => {
        fetchUsers();
        fetchMySkins();
    }, [])

    useEffect(() => {
        fetchSkins(selectedUser);
    }, [selectedUser])

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data.result);
    }

    const fetchMySkins = async () => {
        const response = await axios.get("http://localhost:5000/api/inventory/" + userId);
        setMySkins(response.data.result);
    }

    const fetchSkins = async (userId) => {
        if (userId === "") {
            return;
        }
        const response = await axios.get("http://localhost:5000/api/inventory/" + selectedUser);
        setTheirSkins(response.data.result);
    }

    const changeSelectedUser = (e) => {
        setSelectedUser(e.target.value);
    }

    const changeOwnSkin = (e) => {
        setMyChosenSkin(e.target.value);
    }

    const changeSelectedSkin = (e) => {
        setTheirChosenSkin(e.target.value);
    }

    const handleSubmit = async () => {
        const response = await axios.post("http://localhost:5000/api/sendoffer/" + userId + "/" + selectedUser + "/" + myChosenSkin + "/" + theirChosenSkin);
        console.log(response.data);
        navigate("/offers");
    }

    return (
        <>
            {users.length > 1 && mySkins.length > 0 &&
                <>
                    <h1>Ajánlat küldése</h1>
                    <h2>Kinek szeretnél ajánlatot küldeni?</h2>
                    <select onChange={(e) => changeSelectedUser(e)}>
                        <option value="" hidden>Válassz egy felhasználót..</option>
                        {users.map((user) => (
                            parseInt(user.userId) !== parseInt(userId) &&
                            <option key={user.userId} value={user.userId}>{user.username}</option>
                        ))}
                    </select>
                    {selectedUser !== "" &&
                        <>
                            <h2> Te küldöd</h2>
                            <select onChange={(e) => changeOwnSkin(e)}>
                                <option value="" hidden>Válassz egy skint..</option>
                                {mySkins.map((skin) => (
                                    <option key={skin.skinId} value={skin.skinId}>{skin.fegyverNev + " | " + skin.nev}</option>
                                ))}
                            </select>
                            <h2>Amit kérsz</h2>
                            <select onChange={(e) => changeSelectedSkin(e)}>
                                <option value="" hidden>Válassz egy skint..</option>
                                {theirSkins.map((skin) => (
                                    <option key={skin.skinId} value={skin.skinId}>{skin.fegyverNev + " | " + skin.nev}</option>
                                ))}
                            </select>
                        </>
                    }
                    {setSelectedUser !== "" && myChosenSkin !== "" && theirChosenSkin !== "" &&
                        <button onClick={handleSubmit}>Ajánlat küldése</button>}
                </>}
        </>
    )
}
