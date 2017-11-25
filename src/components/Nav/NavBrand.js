import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavBrand = ({
  className,
  ...props
}) => {
  const classes = classNames('navbar-brand', className)

  return <div className={classes} {...props} />
}

NavBrand.displayName = 'Nav.Brand'

NavBrand.propTypes = {
  className: PropTypes.string
}

export default NavBrand
