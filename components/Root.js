import React from "react"

import Education from "./Education"
import Footer from "./Footer"
import Head from "./Head"
import Header from "./Header"
import Projects from "./Projects"
import Skills from "./Skills"
import Articles from "./Articles"
import WorkHistory from "./WorkHistory"

const Root = ({ data }) => {
  const { work, articles, skills, projects, edu } = data

  return (
    <html>
      <Head title="duthaho's cv" />
      <body>
        <div className="container mx-auto p2 sm-py3">
          <Header {...data} />
          <WorkHistory data={work} />
          <Skills data={skills} />
          <Articles data={articles} />
          <Projects data={projects} />
          <Education text={edu} />
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default Root
