import React from 'react'
import {Link} from './node_modules/gatsby'
import Global from '../../components/Styles/Global';

const Test = () => (
    <>
      <Global/>
      <h1>Strona testowa - symulacja innej książki</h1>
      <Link to='/'>Wróć</Link>
    </>
  )

export default Test
