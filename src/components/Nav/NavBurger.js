import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavBurger = ({
  className,
  ...props
}) => {
  const classes = classNames('navbar-burger', 'button', className)

  return (
    <button className={classes} {...props}>
      <span />
      <span />
      <span />
    </button>
  )
}

NavBurger.displayName = 'Nav.Burger'

NavBurger.propTypes = {
  className: PropTypes.string
}

export default NavBurger
