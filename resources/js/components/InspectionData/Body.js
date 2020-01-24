import React from "react";

const Body = (props) => {
    let { data } = props;

    const renderIcon = (condition) => {
        if(condition ==  "Coating Damage") {
            return <i className="fa fa-paint-brush text-danger" aria-hidden="true"></i>;
        }

        if(condition == "Lightning Strike") {
            return <i className="fa fa-bolt text-danger" aria-hidden="true"></i>;
        }

        return <i className="fa fa-check text-success" aria-hidden="true"></i>;
    };

    const renderTableRows = () => {
        return data.map((part) => {
            return <tr key={`wind-turbine-part-${part.part_number}`}>
                        <td>{part.part_number}</td>
                        <td>{part.condition}</td>
                        <td>{ renderIcon(part.condition) }</td>
                    </tr>;
        });
    }

    return <tbody>{ renderTableRows() }</tbody>
}

export default Body;
