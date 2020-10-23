import React, { useEffect, useState } from 'react'
import { displayName } from './CommonFuntion';
const axios = require('axios');

function ProfileInfoComponent() {
    const [userProfile, setUserProfile] = useState({});
    useEffect(() => {
        axios.get('https://reqres.in/api/users/2')
            .then(function (response) {
                setUserProfile(response.data.data);
            })
            .catch(function (error) { });
    }, []);

    return (
        <div className="sub-tasks" >
            <h1>Task 4 & Task 5</h1>
            {Object.keys(userProfile).length > 0 ?
                <div className="profile-wrap">
                    <div className="profile-img">
                        <img src={userProfile.avatar} />
                    </div>
                    <div className="name">
                        <h5>{displayName(userProfile.first_name, userProfile.last_name)}</h5>
                        <h5>{userProfile.email}</h5>
                    </div>
                </div>
                : null}
        </div>
    )
}

export default ProfileInfoComponent
