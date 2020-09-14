import React from 'react'
import { useHistory } from 'react-router-dom'

function LinkButton(props) {
    let history = useHistory();

    function handleClick() {
        history.push(props.to)
    }

    return (
        <button type="button" onClick={handleClick}>
            {props.message}
        </button>
    )
}

export default LinkButton