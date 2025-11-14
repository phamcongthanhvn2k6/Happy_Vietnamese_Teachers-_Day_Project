import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from './page/StartPage/Start'
import OpeningLetter from './page/OpeningLetter/OpeningLetter'
import TeacherInfo from './page/TeacherInfo/TeacherInfo'
import AlbumPage from './page/AlbumPage/AlbumPage'

function RouterSetUp() {
  return (
    <div>
        <BrowserRouter>
        {/* Your routes and components go here */}
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/Opening-Letter" element={<OpeningLetter />} />
                <Route path="/Teacher-Info" element={<TeacherInfo />} />
                <Route path="/Album-Page" element={<AlbumPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterSetUp
