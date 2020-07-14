/** @jsx jsx */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { jsx, Styled } from 'theme-ui'
import styles from './header.module.css'

const Header = ({ siteTitle, imgUrl, description }) => {
  function createMarkup(text) {
    return { __html: text }
  }

  return (
    <header>
      <div className={styles.wrapper}>
        <Link
          to="/"
          sx={{
            color: 'text',
            textDecoration: 'none',
          }}
        >
          <Styled.h1>{siteTitle}</Styled.h1>
          <div dangerouslySetInnerHTML={createMarkup(description)}></div>{' '}
        </Link>
        <img className={styles.logo} src={imgUrl} alt={`${siteTitle} logo`} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  imgUrl: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  imgUrl: ``,
  description: ``,
}

export default Header
