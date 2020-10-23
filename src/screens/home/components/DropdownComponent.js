import React, { useState } from 'react'

function DropdownComponent() {

    const [clicked, setClicked] = useState(false)
    return (
        <div className="sub-tasks" >
            <h1>Task 1</h1>
            <div className="dropdown">
                <button className="moreAction-btn" onClick={() => setClicked(!clicked)}>More Actions</button>
                {clicked ?
                    <div className="dropdown-content">
                        <a >View</a>
                        <a >Edit</a>
                        <a >Send</a>
                        <a style={{ "color": "red" }}>Delete</a>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default DropdownComponent
