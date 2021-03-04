import React, {useState} from 'react';

export default function loadTaxonomyInformation() {
    const fetchData = async () => {
        console.log("Fetching Taxonomy Data")
        const response = await fetch('https://f40cgw4dk7.execute-api.us-west-2.amazonaws.com/test_tax/Taxonomy');
        const json = await response.json();
        return json;
    }

    //const [programs, setPrograms] = React.useState();

    return fetchData();
}
