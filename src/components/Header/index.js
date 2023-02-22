import React, { useState } from "react";
import Navi from "../Navi";
import "./index.css";

export default function Header ({ handlePageChange, pages, currentPage}) {
    return (
        <>
        <header className='header'>
            <h2 className='name text-center'>Cory Pendergraft</h2>
            <Navi 
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            pages={pages}
            ></Navi>
            </header>
            </>
    );
}