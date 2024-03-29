import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: { [key: string]: any }[];
  }


const Modal = ({ isOpen, onClose, data } : ModalProps) => {

    if (!isOpen) return null;

    return (
        <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>Tabla de datos</h2>
            <table>
            <thead>
                <tr>
                {Object.keys(data[0]).map((key) => (
                    <th key={key}>{key}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                <tr key={index}>
                    {Object.values(item).map((value, index) => (
                    <td key={index}>{value}</td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    )
}

export default Modal