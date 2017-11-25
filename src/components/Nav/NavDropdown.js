import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavDropdown = ({
  className,
  ...props
}) => {
  const classes = classNames('navbar-dropdown', className)

  return <div className={classes} {...props} />
}

NavDropdown.displayName = 'Nav.Dropdown'

NavDropdown.propTypes = {
  className: PropTypes.string
}

export default NavDropdown
