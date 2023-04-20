import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './useFetch'
import Colored from './Colored'
import ColorControl from './ColorControl'

function App() {
  const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <div className="App">
      <h1>custom hooks, mobx example</h1>
      <h2>mobx</h2>
      <p>store.jsx: observable metódusal, attribútummal és default értékével</p>
      <p>kompnens observer metódussal: oberver metódus és store importálása, a sore megfelelő attribútum értékének felhasználása a komponenesben, exportálás az observer() metódusban </p>
      <p>kontroller komponens: action, store importálása, pl. setup metódus definiálása az action metódussal - a store új értékének a rögzítésével, onClick-re meghívjuk a setup metódust a megfelelő paraméterrel</p>

      <h2>Custom hooks, saját hook-ok</h2>
      <p>useState: state-t ad hozzá egy funcion komponenshez, ami alapból nem endelkezne saját state-tel.</p>
      <p>Csak function alapú komponensekben lehet hook-okat használni.</p>
      <p>saját hook: useFetch pl., önálló kompnensként is lehet használni, nem rendelkezik saját megjelenéssel, pl. aszinkron lekérdezés után ad vissza adatokat.</p>
      <p>Vigyázat: hot module refresh, ha valami nincs hozzákötve egy feltételhez akkor az folyamatosan újratöltődik. - A useFetch hookban kell használni a useEffect-et. A useEffect-be kell ágyazni a fetch-et, különben ha nincs useEffect, akkor folyamatosan újra megröténik a lekérés - hot module refresh</p>

      <p>useEffect: komponens életciklusához lehet kapcsolni vele a benne levő folyamtot, (1) [] - a komponens betöltődése után fut le a benne levő tatalom, (2) semmi - olyan mint ha nem is lenne useEffectben az adott dolog, (3) [valami1, valami2] - a valami1 és valami2 változók megváltozásához kötött a tartalom lefutása</p>
      <p>useEffect: clean up function, a komponenes leválásakor fut le (componentWillUnmount)</p>
      <hr />

      <h2>Színező, mobx</h2>
      <div id="colors">
        <ColorControl />
        <Colored />
      </div>

      <h2>postok useFetch saját hookkal</h2>
      {loading ? "loading..." : data.map((e, i) => {
        return <div key={i}>
          <h4>{e.title}</h4>
          <p>{e.body}</p>
        </div>
      })}
    </div >
  )
}

export default App
