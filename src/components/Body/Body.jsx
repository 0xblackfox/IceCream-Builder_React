import React from 'react'
import IceCreamBuilder from '../../containers/iceCremBuilder/IceCreamBuilder'
import classes from './Body.module.css'

const Body = () => {
  return (
<div className={classes.mainBody}>
<IceCreamBuilder/>
</div>
  )
}

export default Body
