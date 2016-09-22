import React from 'react'
import { render } from 'react-dom'
import DevTools from 'mobx-react-devtools'
import App from './App.jsx'

require('./styles/main.styl')

const Main = () =>
	<div>
		<App/>
		<DevTools/>
	</div>

const root = document.getElementById('root')

render(<Main/>, root)
