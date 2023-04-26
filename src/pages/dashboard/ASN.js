import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { Navigate } from 'react-router-dom'

const ASN = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }
  return <Wrapper> ASN</Wrapper>
}
export default ASN

const Wrapper = styled.div`
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  /* border-bottom-left-radius: 2rem; */
  padding: 2rem;
`
