import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render () {
    let css, gptScript, gptLoad, gptInit, cookieconsentStyle, cookieconsentScript, cookieconsentLoad
    if (process.env.NODE_ENV === `production`) {
      // Can't use React.Fragment yet, Gatsby V2 / Babel 7 only
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{__html: stylesStr}}
        />
      )
      gptScript = (
        <script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'>
        </script>
      )
      gptLoad = (
        <script dangerouslySetInnerHTML={{__html: `
            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];
          `}}>
        </script>
      )
      gptInit = (
        <script dangerouslySetInnerHTML={{__html: `
            var gptAdSlots = [];
            googletag.cmd.push(function() {
              var topBotMapping = googletag.sizeMapping()
                .addSize([141, 125], [[125, 125]])
                .addSize([196, 125], [[125, 125]])
                .addSize([196, 150], [[180, 150], [125, 125]])
                .addSize([216, 125], [[125, 125]])
                .addSize([216, 150], [[180, 150], [125, 125]])
                .addSize([216, 200], [[200, 200], [180, 150], [125, 125]])
                .addSize([250, 60], [[234, 60]])
                .addSize([250, 125], [[125, 125], [234, 60]])
                .addSize([250, 150], [[180, 150], [125, 125], [234, 60]])
                .addSize([250, 200], [[200, 200], [180, 150], [125, 125], [234, 60]])
                .addSize([256, 60], [[234, 60]])
                .addSize([256, 125], [[125, 125], [234, 60]])
                .addSize([256, 133], [[240, 133], [125, 125], [234, 60]])
                .addSize([256, 150], [[240, 133], [180, 150], [125, 125], [234, 60]])
                .addSize([256, 200], [[200, 200], [240, 133], [180, 150], [125, 125], [234, 60]])
                .addSize([266, 60], [[234, 60]])
                .addSize([266, 125], [[125, 125], [234, 60]])
                .addSize([266, 133], [[240, 133], [125, 125], [234, 60]])
                .addSize([266, 150], [[240, 133], [180, 150], [125, 125], [234, 60]])
                .addSize([266, 200], [[200, 200], [240, 133], [180, 150], [125, 125], [234, 60]])
                .addSize([266, 250], [[250, 250], [200, 200], [240, 133], [180, 150], [125, 125], [234, 60]])
                .addSize([316, 60], [[234, 60]])
                .addSize([316, 75], [[300, 75], [234, 60]])
                .addSize([316, 100], [[300, 100], [300, 75], [234, 60]])
                .addSize([316, 125], [[300, 100], [300, 75], [125, 125], [234, 60]])
                .addSize([316, 133], [[240, 133], [300, 100], [300, 75], [125, 125], [234, 60]])
                .addSize([316, 150], [[240, 133], [300, 100], [180, 150], [300, 75], [125, 125], [234, 60]])
                .addSize([316, 200], [[200, 200], [240, 133], [300, 100], [180, 150], [300, 75], [125, 125], [234, 60]])
                .addSize([316, 250], [[300, 250], [250, 250], [200, 200], [240, 133], [300, 100], [180, 150], [300, 75], [125, 125], [234, 60]])
                .addSize([336, 50], [[320, 50]])
                .addSize([336, 60], [[320, 50], [234, 60]])
                .addSize([336, 75], [[300, 75], [320, 50], [234, 60]])
                .addSize([336, 100], [[320, 100], [300, 100], [300, 75], [320, 50], [234, 60]])
                .addSize([336, 125], [[320, 100], [300, 100], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([336, 133], [[320, 100], [240, 133], [300, 100], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([336, 150], [[320, 100], [240, 133], [300, 100], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([336, 200], [[200, 200], [320, 100], [240, 133], [300, 100], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([336, 250], [[300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([352, 50], [[320, 50]])
                .addSize([352, 60], [[320, 50], [234, 60]])
                .addSize([352, 75], [[300, 75], [320, 50], [234, 60]])
                .addSize([352, 100], [[320, 100], [300, 100], [300, 75], [320, 50], [234, 60]])
                .addSize([352, 125], [[320, 100], [300, 100], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([352, 133], [[320, 100], [240, 133], [300, 100], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([352, 150], [[320, 100], [240, 133], [300, 100], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([352, 200], [[200, 200], [320, 100], [240, 133], [300, 100], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([352, 250], [[300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([352, 280], [[336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([484, 50], [[320, 50]])
                .addSize([484, 60], [[468, 60], [320, 50], [234, 60]])
                .addSize([484, 75], [[468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([484, 100], [[320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([484, 125], [[320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([484, 133], [[320, 100], [240, 133], [300, 100], [468, 60], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([484, 150], [[320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([484, 200], [[200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([484, 250], [[300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([484, 280], [[336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([496, 50], [[320, 50]])
                .addSize([496, 60], [[468, 60], [320, 50], [234, 60]])
                .addSize([496, 75], [[468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([496, 100], [[320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([496, 125], [[320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([496, 133], [[320, 100], [240, 133], [300, 100], [468, 60], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([496, 150], [[320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([496, 200], [[200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([496, 250], [[300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([496, 280], [[336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([496, 320], [[480, 320], [336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([596, 50], [[320, 50]])
                .addSize([596, 60], [[468, 60], [320, 50], [234, 60]])
                .addSize([596, 75], [[468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([596, 100], [[320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([596, 125], [[320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([596, 133], [[320, 100], [240, 133], [300, 100], [468, 60], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([596, 150], [[320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([596, 200], [[200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([596, 250], [[300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([596, 280], [[336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([596, 320], [[480, 320], [336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([596, 400], [[580, 400], [480, 320], [336, 280], [300, 250], [250, 250], [200, 200], [320, 100], [240, 133], [300, 100], [468, 60], [180, 150], [300, 75], [320, 50], [125, 125], [234, 60]])
                .addSize([744, 50], [[320, 50]])
                .addSize([744, 60], [[468, 60], [320, 50], [234, 60]])
                .addSize([744, 75], [[468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([744, 90], [[728, 90], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([744, 100], [[728, 90], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([766, 50], [[320, 50]])
                .addSize([766, 60], [[468, 60], [320, 50], [234, 60]])
                .addSize([766, 75], [[468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([766, 90], [[728, 90], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([766, 100], [[750, 100], [728, 90], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([966, 50], [[320, 50]])
                .addSize([966, 60], [[468, 60], [320, 50], [234, 60]])
                .addSize([966, 75], [[468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([966, 90], [[950, 90], [728, 90], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([966, 100], [[950, 90], [750, 100], [728, 90], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([976, 50], [[320, 50]])
                .addSize([976, 60], [[468, 60], [320, 50], [234, 60]])
                .addSize([976, 75], [[468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([976, 90], [[960, 90], [950, 90], [728, 90], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([976, 100], [[960, 90], [950, 90], [750, 100], [728, 90], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([986, 50], [[320, 50]])
                .addSize([986, 60], [[468, 60], [320, 50], [234, 60]])
                .addSize([986, 66], [[970, 66], [468, 60], [320, 50], [234, 60]])
                .addSize([986, 75], [[970, 66], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([986, 90], [[970, 90], [960, 90], [950, 90], [728, 90], [970, 66], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([986, 100], [[970, 90], [960, 90], [950, 90], [750, 100], [728, 90], [970, 66], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([996, 50], [[320, 50]])
                .addSize([996, 60], [[468, 60], [320, 50], [234, 60]])
                .addSize([996, 66], [[970, 66], [468, 60], [320, 50], [234, 60]])
                .addSize([996, 75], [[970, 66], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([996, 90], [[980, 90], [970, 90], [960, 90], [950, 90], [728, 90], [970, 66], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([996, 100], [[980, 90], [970, 90], [960, 90], [950, 90], [750, 100], [728, 90], [970, 66], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
                .addSize([996, 120], [[980, 120], [980, 90], [970, 90], [960, 90], [950, 90], [750, 100], [728, 90], [970, 66], [320, 100], [300, 100], [468, 60], [300, 75], [320, 50], [234, 60]])
                .build();

              var sideMapping = googletag.sizeMapping()
                .addSize([0, 0], [])
                .addSize([1552, 256], [[120, 240]])
                .addSize([1552, 616], [[120, 600], [120, 240]])
                .addSize([1562, 141], [[125, 125]])
                .addSize([1562, 256], [[120, 240], [125, 125]])
                .addSize([1562, 616], [[120, 600], [120, 240], [125, 125]])
                .addSize([1632, 141], [[125, 125]])
                .addSize([1632, 256], [[120, 240], [125, 125]])
                .addSize([1632, 616], [[160, 600], [120, 600], [120, 240], [125, 125]])
                .addSize([1712, 141], [[125, 125]])
                .addSize([1712, 216], [[200, 200], [125, 125]])
                .addSize([1712, 256], [[200, 200], [120, 240], [125, 125]])
                .addSize([1712, 462], [[200, 446], [200, 200], [120, 240], [125, 125]])
                .addSize([1712, 616], [[160, 600], [200, 446], [120, 600], [200, 200], [120, 240], [125, 125]])
                .addSize([1792, 141], [[125, 125]])
                .addSize([1792, 216], [[200, 200], [125, 125]])
                .addSize([1792, 256], [[200, 200], [120, 240], [125, 125]])
                .addSize([1792, 416], [[240, 400], [200, 200], [120, 240], [125, 125]])
                .addSize([1792, 462], [[240, 400], [200, 446], [200, 200], [120, 240], [125, 125]])
                .addSize([1792, 616], [[240, 400], [160, 600], [200, 446], [120, 600], [200, 200], [120, 240], [125, 125]])
                .addSize([1812, 141], [[125, 125]])
                .addSize([1812, 216], [[200, 200], [125, 125]])
                .addSize([1812, 256], [[200, 200], [120, 240], [125, 125]])
                .addSize([1812, 266], [[250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1812, 376], [[250, 360], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1812, 416], [[240, 400], [250, 360], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1812, 462], [[240, 400], [250, 360], [200, 446], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1812, 616], [[240, 400], [160, 600], [250, 360], [200, 446], [120, 600], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1912, 141], [[125, 125]])
                .addSize([1912, 216], [[200, 200], [125, 125]])
                .addSize([1912, 256], [[200, 200], [120, 240], [125, 125]])
                .addSize([1912, 266], [[300, 250], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1912, 376], [[250, 360], [300, 250], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1912, 416], [[240, 400], [250, 360], [300, 250], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1912, 462], [[240, 400], [250, 360], [200, 446], [300, 250], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1912, 616], [[300, 600], [240, 400], [160, 600], [250, 360], [200, 446], [300, 250], [120, 600], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1912, 1066], [[300, 1050], [300, 600], [160, 600], [240, 400], [250, 360], [200, 446], [300, 250], [120, 600], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1952, 141], [[125, 125]])
                .addSize([1952, 216], [[200, 200], [125, 125]])
                .addSize([1952, 256], [[200, 200], [120, 240], [125, 125]])
                .addSize([1952, 266], [[300, 250], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1952, 376], [[250, 360], [300, 250], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1952, 416], [[240, 400], [250, 360], [300, 250], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1952, 462], [[240, 400], [250, 360], [200, 446], [300, 250], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1952, 496], [[320, 480], [240, 400], [250, 360], [200, 446], [300, 250], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1952, 616], [[300, 600], [320, 480], [160, 600], [240, 400], [250, 360], [200, 446], [300, 250], [120, 600], [250, 250], [200, 200], [120, 240], [125, 125]])
                .addSize([1952, 1066], [[300, 1050], [300, 600], [320, 480], [160, 600], [240, 400], [250, 360], [200, 446], [300, 250], [120, 600], [250, 250], [200, 200], [120, 240], [125, 125]])
                .build();

              gptAdSlots[0] = googletag
                .defineSlot('/21735668613/bfa-hd_top', [728, 90], 'div-gpt-ad-1534303848220-0')
                .defineSizeMapping(topBotMapping)
                .addService(googletag.pubads());

              gptAdSlots[1] = googletag
                .defineSlot('/21735668613/bfa-hd_side', [120, 600], 'div-gpt-ad-1534304579228-0')
                .defineSizeMapping(sideMapping)
                .addService(googletag.pubads());

               gptAdSlots[2] = googletag
                .defineSlot('/21735668613/bfa-hd_bot', [728, 90], 'div-gpt-ad-1534304680941-0')
                .defineSizeMapping(topBotMapping)
                .addService(googletag.pubads());

              googletag.pubads().enableSingleRequest();
              googletag.pubads().disableInitialLoad();
              googletag.pubads().collapseEmptyDivs();
              googletag.enableServices();
            });
          `}}>
        </script>
      )
      cookieconsentStyle = (
        <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.4/cookieconsent.min.css"/>
      )
      cookieconsentScript = (
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"/>
      )
      cookieconsentLoad = (
        <script dangerouslySetInnerHTML={{__html: `
            window.addEventListener("load", function(){
              window.cookieconsent.initialise({
                "palette": {
                  "popup": {
                    "background": "#424242",
                    "text": "#ffffff"
                  },
                  "button": {
                    "background": "#b71c1c",
                    "text": "#ffffff"
                  }
                },
                "theme": "classic"
              })
            });
          `}}>
        </script>
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
          {gptScript}
          {gptLoad}
          {gptInit}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
          {cookieconsentStyle}
          {cookieconsentScript}
          {cookieconsentLoad}
          <script dangerouslySetInnerHTML={{__html: `
              var whTooltips = {colorLinks: true, iconizeLinks: true, iconSize: true};
            `}}>
          </script>
          <script src="https://wow.zamimg.com/widgets/power.js">
          </script>
        </body>
      </html>
    )
  }
}
