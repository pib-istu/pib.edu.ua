import React from 'react'
import { Head } from 'react-static'

export default () => {
  return (
    <Head>
        <link rel="stylesheet" href="/modules/mod_phocagallery_image/css/phocagallery_module_image.css" />
        <link rel="stylesheet" href="/components/com_phocagallery/assets/phocagallery.css" />

        {/* <Script html={`
          Shadowbox.loadSkin("classic", "/components/com_phocagallery/assets/js/shadowbox/src/skin");
          Shadowbox.loadLanguage("en", "/components/com_phocagallery/assets/js/shadowbox/src/lang");
          Shadowbox.loadPlayer(["img"], "/components/com_phocagallery/assets/js/shadowbox/src/player");
          window.addEvent('domready', function(){
            Shadowbox.init()
          });
        `} /> */}

        {/* <link rel="stylesheet" href="/components/com_phocagallery/assets/js/shadowbox/src/skin/classic/skin.css" />
        <script src="/components/com_phocagallery/assets/js/shadowbox/src/skin/classic/skin.js"></script>
        <script src="/components/com_phocagallery/assets/js/shadowbox/src/lang/shadowbox-en.js"></script>
        <script src="/components/com_phocagallery/assets/js/shadowbox/src/player/shadowbox-img.js"></script>

        <script src="/components/com_phocagallery/assets/js/shadowbox/shadowbox.js" ></script>
        <script src="/components/com_phocagallery/assets/overlib/overlib_mini.js" ></script> */}
    </Head>
  )
}
