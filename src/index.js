import React from 'react';

export default class defaultComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="shopping-list">
                    <h1>Shopping List for name</h1>
                    <ul>
                        <li>Instagram</li>
                        <li>WhatsApp</li>
                        <li>Oculus</li>
                        <li>WhatsApp</li>
                        <li>WhatsApp</li>
                        <li>Oculus</li>

                    </ul>
                </div>
                <button className="ui labeled icon button"><i className="pause icon"></i> Pause </button>
                <button className="ui right labeled icon button"><i className="right arrow icon"></i> Next </button>
                <button className="ui primary button">Save </button>
                <button className="ui button">Discard </button>
            </div>
        );
    }
}