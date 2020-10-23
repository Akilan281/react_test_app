import React, { useState, useEffect } from 'react'
import DropdownComponent from './components/DropdownComponent'
import CountryStateComponent from './components/CountryStateComponent'
import './styles/home.css'
import { displayName } from './components/CommonFuntion';
import ProfileInfoComponent from './components/ProfileInfoComponent'
function Home(props) {
    const [country, setCountry] = useState()


    return (
        <div className="head">
            <div className="tasks">
                <DropdownComponent />
                <CountryStateComponent />
                <ProfileInfoComponent />
            </div>
        </div>
    )
}

export default Home
