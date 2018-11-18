import React from 'react';

export default class defaultComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="shopping-list">
                    <h1>Shopping List for name is qzq master</h1>
                    <h2>test git commit</h2>
                    <ul>
                        <li>Instagram666</li>
                        <li>WhatsApp</li>
                        <li>Oculus</li>
                        <li>WhatsApp</li>
                        <li>whatAoosd11</li>
                        <li>zsdqwfq111</li>
                    </ul>
                </div>
                <button className="ui labeled icon button"><i className="pause icon"></i> Pause </button>
                <button className="ui right labeled icon button"><i className="right arrow icon"></i> Next </button>
                <button className="ui primary button">Save </button>
                <button className="ui button">Discard sdasd </button>
            </div>
        );
    }
}
