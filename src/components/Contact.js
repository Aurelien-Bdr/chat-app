import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            online: props.online,
        }
    }
    render() {
        return (
            <div className="Contact">
                <img className="avatar"
                    src={this.props.avatar}
                    alt={this.props.name} />
                <div>
                    <p className="name">{this.props.name}</p>
                    <div className="status"
                        onClick={event => {
                            const newStatut = !this.state.online
                            this.setState({ online: newStatut })
                        }}
                    >
                        <div className={this.state.online ? 'status-online' : 'status-offline'} />
                        <p className="status-text">{this.state.online ? 'Online' : 'Offline'}</p>
                    </div>
                </div>
            </div >
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default Contact;