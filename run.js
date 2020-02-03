#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

import yaml from 'js-yaml'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Root from './components/Root'

const file = path.join(__dirname, 'data.yml')
const content = fs.readFileSync(file, 'utf8')
const data = yaml.load(content)

let html = ReactDOMServer.renderToStaticMarkup(<Root data={data} />)
html = `<!doctype html>${html}\n`

process.stdout.write(html)
