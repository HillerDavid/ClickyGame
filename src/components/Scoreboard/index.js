import React from 'react'
import './style.css'

const Scoreboard = (props) => (
    <div className="container-flex text-center" id="scoreboard">
        <button type="button" className="btn" disabled>
            Score <span className="badge badge-danger">{props.score}</span>
        </button>
        <button type="button" className="btn" disabled>
            Hi-Score <span className="badge badge-danger">{props.hiScore}</span>
        </button>
    </div>
)

export default Scoreboard