import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavMenu = ({
  className,
  ...props
}) => {
  const classes = classNames('navbar-menu', className)

  return <div className={classes} {...props} />
}

NavMenu.displayName = 'Nav.Menu'

NavMenu.propTypes = {
  className: PropTypes.string
}

export default NavMenu
