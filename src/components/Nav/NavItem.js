import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavItem = ({
  link,
  className,
  ...props
}) => {
  const classes = classNames('navbar-item', className)
  if (link) return <a className={classes} {...props} />
  else return <div className={classes} {...props} />
}

NavItem.displayName = 'Nav.Item'

NavItem.propTypes = {
  className: PropTypes.string,
  link: PropTypes.Bool
}

export default NavItem
