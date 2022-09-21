import React from 'react';
import ReactDOM from 'react-dom';
import { FilteredList } from './FilteredList';

const people = [
    {
        name: "Joe",
        age: 23,
        id: 1,
    },
    {
        name: "Sam",
        age: 34,
        id: 2,
    },
    {
        name: "Tom",
        age: 20,
        id: 3,
    },
    {
        name: "Alex",
        age: 26,
        id: 4,
    }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FilteredList people={people}/>);