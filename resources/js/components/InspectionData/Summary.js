import React, {useState, useEffect} from "react";

const Summary = (props) => {
    const { data } = props;

    const countCondition = (condition) => {
        return data.filter((row) => row.condition === condition).length
    };

    return <div id={"summary-container"} className={'bg-white p-2 mb-4 text-center'}>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="summary-box text-success">
                            <h3>Good</h3>
                            <div className="count">{ countCondition("Good") }</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="summary-box text-danger">
                            <h3>Coating Damage</h3>
                            <div className="count">{ countCondition("Coating Damage") }</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="summary-box text-danger">
                            <h3>Lightning Strike</h3>
                            <div className="count">{ countCondition("Lightning Strike") }</div>
                        </div>
                    </div>
                </div>
        </div>;
}

export default Summary;
