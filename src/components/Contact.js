import React from 'react';
import './Contact.css';

const name = 'Riley Stone';
const image = 'https://randomuser.me/api/portraits/women/82.jpg';

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src={image} />
            <div className="Container-right">
                <div className="name">{name}</div>
                <div className="status">
                    <div className="status-online"></div>
                    <div className="status-text">Online</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;