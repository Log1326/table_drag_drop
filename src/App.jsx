import React from 'react';
import {useSelector} from "react-redux";
import Table from "./Components/Table";

const App = () => {
    const {isLoading, error} = useSelector(state => state.table)
    return (
        <div className='_body'>
            {isLoading && <h1>load....</h1>}
            {error && <h1>ERROR !!! {error}</h1>}
            <Table/>
        </div>
    );
};

export default App;