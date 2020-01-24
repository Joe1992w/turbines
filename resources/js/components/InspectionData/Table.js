import React from "react";
import Body from "./Body";

const Table = (props) => {
    let { data } = props;

    return (
        <table className={'table table-striped'}>
            <thead className={'thead-dark'}>
                <tr>
                    <th>Part Number</th>
                    <th>Condition</th>
                    <th></th>
                </tr>
            </thead>
            <Body data={data} />
        </table>
    )
}

export default Table;
