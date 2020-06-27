import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import path from 'path'

const IndexPage = () => {
  
return(
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
    <a href="./page-2">Go to page 2</a> <br />
    <a href="./using-typescript">Go to "Using TypeScript"</a>
  </Layout>
);
}

export default IndexPage
