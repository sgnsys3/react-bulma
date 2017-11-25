import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavStart = ({
  className,
  ...props
}) => {
  const classes = classNames('navbar-start', className)

  return <div className={classes} {...props} />
}

NavStart.displayName = 'Nav.Start'

NavStart.propTypes = {
  className: PropTypes.string
}

export default NavStart
