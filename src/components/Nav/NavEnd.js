import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavEnd = ({
  className,
  ...props
}) => {
  const classes = classNames('navbar-end', className)

  return <div className={classes} {...props} />
}

NavEnd.displayName = 'Nav.End'

NavEnd.propTypes = {
  className: PropTypes.string
}

export default NavEnd
