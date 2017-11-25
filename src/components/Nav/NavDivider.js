import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavDivider = ({
  className,
  ...props
}) => {
  const classes = classNames('navbar-divider', className)

  return <div className={classes} {...props} />
}

NavDivider.displayName = 'Nav.Divider'

NavDivider.propTypes = {
  className: PropTypes.string
}

export default NavDivider
