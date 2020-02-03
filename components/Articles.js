import React from 'react'

import Heading from './Heading'

const Articles = ({ data }) => (
  <div>
    <Heading>Articles</Heading>
    {data.map(({ title, link }, i) => (
      <p key={i}>
        <span className="italic">{title}</span>,{' '}
        <a href={link}>detail</a>
      </p>
    ))}
  </div>
)

export default Articles
