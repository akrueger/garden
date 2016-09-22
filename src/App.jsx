// @flow weak

import React from 'react'
import Rx from 'rxjs/Rx'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import Plot from './Plot.jsx'

const store = observable({
	plants: [],
	weather: {
		rainLevel: 0,
		sunLevel: 50,
		temperature: 60
	}
})

const App = observer(React.createClass({
	getInitialState() {
		return store
	},

	intervalSource: Rx.Observable.interval(1000),
	intervalSubscription: undefined,

	turnOnWater() {
		this.intervalSubscription = this.intervalSource.subscribe(() => {
			store.plant.water += 1
		})
	},

	turnOffWater() {
		if(this.intervalSubscription) {
			this.intervalSubscription.unsubscribe()
		}
	},

	render() {
		return (
			<div className='main'>
				<Plot store={store}/>
			</div>
		)
	}
}))

export default App
