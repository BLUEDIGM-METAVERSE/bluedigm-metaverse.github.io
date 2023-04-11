import React, { FunctionComponent } from 'react'

import Layout from 'components/common/layout'

const NotFoundPage: FunctionComponent = function () {
  return (
    <Layout>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const Head = () => {}

export default NotFoundPage
