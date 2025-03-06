import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from "../pages/Homepage.jsx";
import SingleBook from '../pages/SingleBook.jsx';
import SingleUser from '../pages/SingleUser.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/books/1" element={<SingleBook />} />
            <Route path="/users/1" element={<SingleUser />} />
        </Routes>
    );
};

export default AppRoutes;