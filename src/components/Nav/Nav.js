import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import NavBrand from './NavBrand'
import NavBurger from './NavBurger'
import NavDivider from './NavDivider'
import NavDropdown from './NavDropdown'
import NavEnd from './NavEnd'
import NavItem from './NavItem'
import NavLink from './NavLink'
import NavMenu from './NavMenu'
import NavStart from './NavStart'

/*
A responsive horizontal nav bar that can contain links, tabs, buttons, icons, and a logo
*/
const Nav = ({
  as: Div,
  hasShadow,
  className,
  ...props
}) => {
  const classes = classNames('nav', {
    'has-shadow': hasShadow
  }, className)

  return <Div className={classes} {...props} />
}

Nav.displayName = 'Nav'

Nav.propTypes = {
  as: PropTypes.node,
  hasShadow: PropTypes.bool,
  className: PropTypes.string
}

Nav.defaultProps = {
  as: 'nav'
}

Nav.Brand = NavBrand
Nav.Burger = NavBurger
Nav.Divider = NavDivider
Nav.Dropdown = NavDropdown
Nav.End = NavEnd
Nav.Item = NavItem
Nav.Link = NavLink
Nav.Menu = NavMenu
Nav.Start = NavStart

export default Nav
