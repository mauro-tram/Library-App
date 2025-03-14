import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from "../pages/Homepage.jsx";
import SingleBook from '../pages/SingleBook.jsx';
import SingleUser from '../pages/SingleUser.jsx';
import Users from '../pages/Users.jsx';
import Books from '../pages/Books.jsx';
import Info from '../pages/Info.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/books/:id" element={<SingleBook />} />
            <Route path="/books" element={<Books />} />
            <Route path="/users/:id" element={<SingleUser />} />
            <Route path="/users" element={<Users />} />
            <Route path="/info" element={<Info />} />
        </Routes>
    );
};

export default AppRoutes;