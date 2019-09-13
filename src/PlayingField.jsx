import React from "react";

import "./styles/field.scss";

class PlayingField extends React.Component {
    render() {
        return (
            <div className="field">
                {this.props.field.map((row, index) => (
                    <div key={index} className="row">
                        {row.map((cell, index) => (
                            <div key={index} className="cell"></div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default PlayingField;
