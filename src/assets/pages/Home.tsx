import React from 'react'
import styled from 'styled-components'
import Logo from '@components/Logo'
import ContactHomeButtons from '@components/ContactHomeButtons'
import HomeCards from '@components/HomeCards'
const backgroundImageUrl = 'https://iili.io/HDZ2uVa.jpg'


const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Logo />
        <ContactHomeButtons/>
        <HomeCards/>
      </Content>
    </Container>
  )
}

export default Home

const Container = styled.section`
  background: linear-gradient(0deg, #2E2E2E 20%, rgba(46, 46, 46, 0.00) 250%), url(${backgroundImageUrl}), lightgray 50% / cover no-repeat; 
  background-position: center center;
  background-size: cover;
  min-height: 80vh;
  padding: 3%;
`

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 70px;
  padding-top: 30px;
`

const Header = styled.section`
 height: 65px;
`