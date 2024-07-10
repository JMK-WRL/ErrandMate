// src/components/ErrandList.js
import React from 'react';
import ErrandItem from './ErrandItem';

function ErrandList({ errands }) {
    return (
        <div>
            {errands.map(errand => (
                <ErrandItem key={errand.id} errand={errand} />
            ))}
        </div>
    );
}

export default ErrandList;
