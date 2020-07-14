import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Styled } from 'theme-ui'
import Header from './header'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query TitleQuery {
      feedPodbaseMeta {
        title
        description
        image {
          url
        }
      }
    }
  `)

  return (
    <Styled.root>
      <Header
        siteTitle={data.feedPodbaseMeta.title}
        imgUrl={data.feedPodbaseMeta.image.url}
        description={data.feedPodbaseMeta.description}
      />
      <div className={styles.main}>
        <main>{children}</main>
      </div>
      <footer style={{ marginTop: 40 }}>© Podbase</footer>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
