import React from 'react'
import { action } from 'mobx'
import store from './store'

export default function ColorControl() {
    const setup = action((color) => {
        store.color = color
    })

    const handleColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setup('#' + randomColor)
    }

    return <div>
        <h3>ColorControl</h3>
        <button onClick={() => handleColor()}>color it</button>
    </div>
}
