import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from "../pages/Homepage.jsx";
import SingleBook from '../pages/SingleBook.jsx';
import SingleUser from '../pages/SingleUser.jsx';
import Users from '../pages/Users.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/books/:id" element={<SingleBook />} />
            <Route path="/users/:id" element={<SingleUser />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    );
};

export default AppRoutes;