import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { I18nProvider } from '@lingui/react'
import { navigateTo } from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

import * as i18nPluginHelper from '../../plugins/gatsby-plugin-herodamage-i18n'
import withRoot from '../../plugins/gatsby-plugin-herodamage-material-ui/withRoot'
import { theme } from '../../plugins/gatsby-plugin-herodamage-material-ui/getPageContext'
import { getWowheadLink } from '../utils/wow'

import Head from '../components/layout/head'
import Header from '../components/layout/header'
import WowClassSelector from '../components/layout/wow-class-selector'
import Main from '../components/layout/main'
import Footer from '../components/layout/footer'
import GoogleAd from '../components/google-ad'
import GPTAd from '../components/gpt-ad'

const styles = (theme) => ({
  layout: {
    margin: '0 auto',
    maxWidth: theme.breakpoints.values.lg,
    [theme.breakpoints.up('xl')]: {
      maxWidth: 2 / 3 * 100 + '%'
    },
    '& h1': theme.typography.headline,
    '& h2': theme.typography.title,
    '& h3': theme.typography.subheading,
    '& h4': theme.typography.body2,
    '& figcaption': theme.typography.caption,
    '& a': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.secondary.light
      }
    },
    '& .site-name': {
      '& span': {
        fontWeight: 500,
        '&:nth-of-type(1)': {
          color: theme.palette.common.white
        },
        '&:nth-of-type(2)': {
          color: theme.palette.secondary.main
        }
      }
    },
    '& #results-loader': {
      display: 'block',
      marginTop: theme.spacing.unit * 8,
      marginBottom: theme.spacing.unit * 8,
      marginRight: 'auto',
      marginLeft: 'auto'
    },
    '& #google-chart-labels': {
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'column',
      float: 'left',
      marginTop: 54,
      position: 'relative',
      width: 240,
      zIndex: 1,
      '& > a': {
        height: 16,
        marginBottom: 9.6
      }
    },
    '& .azerite-tier2': {
      color: '#9ccc65'
    },
    '& .azerite-tier3': {
      color: '#29b6f6'
    },
    '& #chart-overlay': {
      width: '2px',
      position: 'absolute',
      backgroundColor: '#FFF',
      pointerEvents: 'none',
      zIndex: 2,
    },
    '& .chart-tooltip': {
      color: '#000',
      fontSize: 18,
      padding: 8,
      whiteSpace: 'nowrap'
    },
    '& p.blockers-text': {
      border: '1px solid #424242',
      borderRadius: 8,
      margin: 0,
      padding: 16,
      textAlign: 'center'
    }
  }
})

const Layout = ({classes, ...props}) => {
  const {data, i18nPlugin, location} = props
  const siteMetadata = data.site.siteMetadata
  return (
    <Typography className={classes.layout} component={'div'}>
      <Head siteMetadata={siteMetadata}/>
      <Header i18nPlugin={i18nPlugin} siteMetadata={siteMetadata}/>
      <WowClassSelector i18nPlugin={i18nPlugin} siteMetadata={siteMetadata}/>
      <GoogleAd location={location} type="top"/>
      <Main {...props}/>
      <GPTAd location={location} type="side"/>
      <GoogleAd location={location} type="bot"/>
      <Footer siteMetadata={siteMetadata}/>
    </Typography>
  )
}

Layout.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  i18nPlugin: PropTypes.object,
  location: PropTypes.object
}

const IndexLayout = (props) => {
  const {pathname} = props.location
  const lang = i18nPluginHelper.langFromPath(pathname)
  const i18nPlugin = {
    changeLang: (newLang) => {
      navigateTo(i18nPluginHelper.replacePrefix(newLang, pathname))
    },
    lang,
    langs: i18nPluginHelper.langs,
    t: i18nPluginHelper.translation(lang),
    tLink: (path) => i18nPluginHelper.replacePrefix(lang, path),
    wowheadLink: getWowheadLink(lang)
  }
  return (
    <ThemeProvider theme={theme}>
      <I18nProvider language={lang} catalogs={i18nPluginHelper.catalogs}>
        <Layout {...props} i18nPlugin={i18nPlugin}/>
      </I18nProvider>
    </ThemeProvider>
  )
}

IndexLayout.propTypes = {
  location: PropTypes.object
}

export default withRoot(withStyles(styles)(IndexLayout))

export const query = graphql`
  query IndexLayout {
    site {
      siteMetadata {
        title
        github
        description
        keywords
        wowClasses
      }
    }
  }
`
