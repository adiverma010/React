import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './Greeting'
import Student from './Student'

function App() {

  return (
    <>
    <h1>Student Information</h1>
    <Student name = {"Aditya"} age = {19} course = {"Computer Science"}/>
    <Student name = {'Minku'} age = {28} course = {"Mechanical Engineering"}/>
    <Student name = {"Ankit"} age = {35} course = {"Electrical Engineering"}/>
    </>
  )
}

export default App
