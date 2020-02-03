import React from 'react'
import CleanCSS from 'clean-css'

const css = `
  * { box-sizing: border-box; }

  html { font-size: 14px; }

  body {
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Helvetica Neue', Helvetica, sans-serif;
    line-height: 1.5;
    margin: 0;
    color: #111;
    background-color: #fff;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.25;
    margin-top: 1em;
    margin-bottom: .5em;
  }

  h1 { font-size: 2rem }
  h2 { font-size: 1.5rem }
  h3 { font-size: 1.25rem }
  h4 { font-size: 1rem }
  h5 { font-size: .875rem }
  h6 { font-size: .75rem }

  p, dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1em;
  }

  a {
    color: #0071dc;
    text-decoration-skip-ink: auto;
  }

  .container { max-width: 620px; }
  .mono { font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace; }
  .caps { text-transform: uppercase; letter-spacing: .1em; }
  .lower { text-transform: lowercase; }
  .bold { font-weight: 600; }
  .fw-800 { font-weight: 800; }
  .mb05 { margin-bottom: 0.25rem; }
  .mr05 { margin-right: 0.25rem; }
  .list-flush { padding-left: 1.2em; }

  .heading:after {
    content: ' ';
    display: block;
    margin-top: 0.375rem;
    width: 2rem;
    border: 2px solid #ddd;
    border-radius: 0.25rem;
  }

  @media print {
    html { font-size: 13px; }
    a { color: #111; }
    .container { max-width: 960px; }
    .print-hide { display: none !important; }
  }
`

const extraCss = { __html: new CleanCSS({}).minify(css).styles }

const Head = ({ title }) => (
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
    <title>{title}</title>
    <link
      href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css"
      rel="stylesheet"
    />
    <style
      dangerouslySetInnerHTML={{ __html: new CleanCSS().minify(css).styles }}
    />
  </head>
)

export default Head
