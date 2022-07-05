import React from "react";
import { CreateRoomPage } from "./CreateRoomPage";
import { JoinRoomPage } from "./JoinRoomPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

export const HomePage = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/'>This is the home page.</Route>
                <Route path='/join' element={<JoinRoomPage/>} />
                <Route path='/create' element={<CreateRoomPage/>} />
                <Route path='/room/:roomCode' element ={<Room />} />
            </Routes>
        </Router>
    )
}