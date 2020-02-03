import React from 'react'

const Separator = () => <span className="px1">/</span>

const Header = ({ name, phone, email, website }) => (
  <div>
    <h1 className="mt0 mb05 h2 caps fw-800">{name}</h1>
    <div className="h5">
      <span>{phone}</span>
      <Separator />
      <span>{email}</span>
      <span className="xs-hide">
        <Separator />
        <a href={website.url}>{website.display}</a>
      </span>
    </div>
  </div>
)

export default Header
