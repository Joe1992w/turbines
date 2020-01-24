import React, {useState, useEffect} from "react";
import Table from "./Table";
import Summary from "./Summary";
import axios from "axios";

const InspectionData = (props) => {
    const [data, setData] = useState({
        inspectionData: [],
        loading: false,
        error: false
    });

    useEffect(() => {
        const fetchInspectionData = async () => {
            try {
                setData(Object.assign({}, data, {loading: true}));
                const response = await axios.get('/api/wind-turbines/inspection-data');

                setData(Object.assign({}, data, {
                    inspectionData: response.data,
                    loading: false
                }));
            } catch (e) {
                setData(Object.assign({}, data, {error: true, loading: false}));
            }

        }

        fetchInspectionData();
    }, []);


    return <div>
        <Summary data={data.inspectionData}/>
        <Table data={data.inspectionData}/>
    </div>;
}

export default InspectionData;
