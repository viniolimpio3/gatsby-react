import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TestPage = () => (
  <Layout>
    <SEO title="teste" />
    <h1>Página de Teste</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <a href="./page-2">Go href page 2</a> <br />
    <a href="./using-typescript">Go href "Using TypeScript"</a>
  </Layout>
)

export default TestPage
