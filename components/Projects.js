import React from "react"

import Heading from "./Heading"

const Entry = ({ name, url, code, description }) => (
  <div className="mb2">
    <div>
      <span className="mr05 bold">{name}</span>
      <span className="h6">
        {"("}
        {url && <a href={url}>site</a>}
        {url && " / "}
        <a href={code}>code</a>
        {")"}
      </span>
    </div>
    <div>{description}</div>
  </div>
)

const Projects = ({ data }) => (
  <div>
    <Heading>Personal Projects</Heading>
    {data.map((d, i) => (
      <Entry key={i} {...d} />
    ))}
    <p>
      Additional projects and experiments can be found on my{" "}
      <a href="https://duthaho.com/starters/">personal site</a> and{" "}
      <a href="https://github.com/duthaho?tab=repositories">GitHub</a>.
    </p>
  </div>
)

export default Projects
