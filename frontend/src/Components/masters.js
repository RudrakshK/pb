import React from 'react';
import './masters.css'

const Masters = ({masters,deleteMaster}) => {
    const masterList = masters.map((master,index) => {
        return (
            <div className="master" key={index}>
                <div>Name: {master.name}</div>
                <div>Side: {master.side}</div>
                <button onClick={() => {deleteMaster(index)}}>Delete Master</button>
            </div>
        ) ;
    })
    return(
        <div className="master-list">
            {masterList}
        </div>
    )
}

export default Masters
