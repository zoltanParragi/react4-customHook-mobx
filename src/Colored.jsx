import React from 'react'
import { observer } from 'mobx-react-lite'
import store from './store'

function Colored() {
    return <div>
        <h3>Colored</h3>
        <div style={{ background: store.color }}></div>
    </div>
}

export default observer(Colored)
