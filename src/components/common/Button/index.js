import React, {useState, useEffect} from "react"
import "./style.css"

function Button({fnc}) {
    return (
        <div className={"Btn " + fnc}>
            { fnc }
        </div>
    )
}

export default Button;