import React from 'react';
import Incomplete from './Incomplete';
import Todo from './Todo';
import Doing from './Doing';
import Review from './Review';
import Completed from './Completed';
import Over from './Over';
const Home = () => {
    return (
        <div className="grid grid-cols-7 gap-96 mt-20 ">

            <Incomplete></Incomplete>
            <Todo></Todo>
            <Doing></Doing>
            <Review></Review>
            <Completed></Completed>
            <Over></Over>
        </div>
    );
};

export default Home;