import React, {useState, useEffect} from "react";

const Filters = (props) => {
    const {updateFilters, filters} = props;
    console.log(filters)

    const handleFilterChange = (value, field) => {
        const newFilters = Object.assign({}, filters, {[field]:value});
        updateFilters(Object.assign({}, newFilters));
    };

    return <div id={"filters"} className={'bg-white p-2 mb-4 text-center'}>
        <div className="form-inline">
            <span className={"mr-4"}>Filter Parts</span>
            <input type="text" className="form-control mr-4" placeholder={"Part Number"} value={filters.part_number}
                   onChange={(e) => handleFilterChange(e.target.value, 'part_number')}/>
            <input type="text" className="form-control" placeholder={"Condition"} value={filters.condition}
                   onChange={e => handleFilterChange(e.target.value, 'condition')}/>
        </div>
    </div>;
};

export default Filters;
