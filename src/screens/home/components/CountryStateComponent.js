import React, { useState } from 'react'

var countryState = {
    IN: ['KA', "KL", "TN", "MH"],
    US: ['AL', "DE", "GA"],
    CA: ["ON", "QC", 'BC']
};
function CountryStateComponent() {
    const [selectedCountry, setCountry] = useState('Select Country');
    const [selectedState, setState] = useState('Select State');

    function getCountry() {
        var country = Object.keys(countryState);
        var countryList = ['Select Country', ...country]
        return <select onChange={(e) => {
            setState('Select State')
            setCountry(e.target.value)
        }}
            value={selectedCountry}
        >
            {countryList.map(item => {
                return <option value={item}>{item}</option>;
            })}
        </select>
    }
    function getState() {
        var state = countryState[selectedCountry];
        var stateList = selectedCountry != 'Select Country' ? ['Select State', ...state] : ['Select State'];
        return <select className="state-wrap" value={selectedState}
            onChange={(e) => {
                setState(e.target.value)
            }}
        >
            {stateList.map(item => {
                return <option value={item} >{item}</option>;
            })}
        </select>
    }

    return (
        <div className="sub-tasks" >
            <h1>Task 2</h1>
            <div className="dropdown">
                <div class="custom-select">
                    {getCountry()}
                    {getState()}
                </div>
            </div>
        </div>
    )
}

export default CountryStateComponent;
