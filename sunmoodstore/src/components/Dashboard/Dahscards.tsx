
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Dashcard } from '../../interfaces/intComponents/Dashcard'

const Dahscards = ({ icon, backgroundColor, title, value }: Dashcard) => {
    return (
        <div className="col-md-6 col-lg-4 p-2">
            <a className="text-decoration-none target-sbg" href="#">
                <div className={`card p-3 shadow bg-purple text-center border-0 ${backgroundColor}`}>
                    <FontAwesomeIcon icon={icon} fontSize={50} style={{ color: "white" }} />
                    <hr style={{ color: "white" }} />
                    <p className="card-title lead" style={{ color: "white" }}>
                        <b>{title} <span style={{ fontSize: "xx-large" }}>{value !== undefined ? value.toString() : ''}</span></b>
                    </p>
                </div>
            </a>
        </div>
    )
}

export default Dahscards