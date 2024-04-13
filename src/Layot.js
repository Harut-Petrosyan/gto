import React from 'react'
import { Outlet } from 'react-router-dom'
import Hader from './Hader'

export default function Layot() {
  return (
    <div>
      <>
        <Hader/>
        <main>
            <Outlet/>
        </main>
        <footer className=' bg-slate-950'>
            <h1>footer</h1>
        </footer>
      </>
    </div>
  )
}
