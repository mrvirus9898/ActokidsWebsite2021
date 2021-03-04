import * as React from 'react';

export default function loadProgramInformation() {
    const fetchData = async () => {
        console.log("Fetching Data")
        const response = await fetch('https://f40cgw4dk7.execute-api.us-west-2.amazonaws.com/test_get/programs');
        const json = await response.json();
        return json;
    }

    //const [programs, setPrograms] = React.useState();

    return fetchData();
}
