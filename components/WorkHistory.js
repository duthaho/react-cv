import marked from 'marked'
import React from 'react'

import Heading from './Heading'

const WorkHistory = ({ data }) => (
  <div>
    <Heading>Work History</Heading>
    {data.map(({ title, employer, time, intro, bullets }, i) => (
      <div key={i} className="mb3">
        <h3 className="mt0 mb05 h4">
          {title}, {employer}
        </h3>
        <p className="mb1 h5 mono">{time}</p>
        {intro && <div dangerouslySetInnerHTML={{ __html: marked(intro) }} />}
        {bullets && (
          <ul className="list-flush">
            {bullets.map((b, i) => (
              <li key={i} className="mb1">
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
)

export default WorkHistory
