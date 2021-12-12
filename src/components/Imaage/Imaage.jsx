import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Segment, Image } from 'semantic-ui-react'

import gitlab_500 from 'images/gitlab_500.png'

const Imaage = () => (
  <Container>
    <Segment>
      <Image src={gitlab_500} size='large' centered style={{ padding: '20px' }} />
    </Segment>
  </Container>
)

export default withRouter(Imaage)
