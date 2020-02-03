import React from 'react'

import Heading from './Heading'

const Skills = ({ data }) => (
  <div>
    <Heading>Skills & Experience</Heading>
    {data && (
      <ul className="list-flush">
        {data.map((b, i) => (
          <li key={i} className="mb1">
            {b}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default Skills
