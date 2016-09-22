// @flow weak

import React from 'react'

const Plant = ({store, id}) =>
	<div className='plant'>
		{store.plants[id].sun}
	</div>

Plant.propTypes = {
	store: React.PropTypes.object,
	id: React.PropTypes.number
}

export default Plant
