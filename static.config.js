import React from 'react'
import axios from 'axios'
import path from 'path'
// import { Post } from './types'

const Script = ({ html }) => <script dangerouslySetInnerHTML={{ __html: html }} />;

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const { data: posts } /* :{ data: Post[] } */ = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map((post /* : Post */) => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  Document: ({
    Html,
    Head,
    Body,
    children,
    // state: { siteData, renderMeta },
  }) => (
    <Html lang="uk-ua">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Сайт Полтавського інституту Бізнесу Міжнародного науково-технічного університету імені академіка Бугая - все про ПІБ МНТУ для абітурієнтів" />
        <title>ПІБ МНТУ - Полтавський інститут Бізнесу - Головна</title>

        <link rel="stylesheet" href="/modules/mod_phocagallery_image/css/phocagallery_module_image.css" />
        <link rel="stylesheet" href="/media/system/css/modal.css" />
        <link rel="stylesheet" href="/modules/mod_ice_newsblock/assets/style.css" />
        {/* <link rel="stylesheet" href="/plugins/content/mavikthumbnails/slimbox-mt1.2/css/slimbox.css" /> */}
        <link rel="stylesheet" href="/components/com_phocagallery/assets/phocagallery.css" />
        <link rel="stylesheet" href="/modules/mod_icetabs/themes/default-white/assets/style.css" />
        <link rel="stylesheet" href="/modules/mod_icetabs/themes/default-black/assets/style.css" />
        <link rel="stylesheet" href="/modules/mod_icemegamenu/themes/css3/css/css3_icemegamenu.css" />

        <script src="https://connect.facebook.net/ru_RU/all.js?hash=ab35b7708555c021057c617c95543681&amp;ua=modern_es6" async="" crossOrigin="anonymous"></script>
        <script id="twitter-wjs" src="//platform.twitter.com/widgets.js"></script>
        <script id="facebook-jssdk" src="//connect.facebook.net/ru_RU/all.js#xfbml=1"></script>
        {/* <script async="" src="https://mc.yandex.ru/metrika/watch.js"></script> */}
        <script async="" src="https://ssl.google-analytics.com/ga.js"></script>
        <script src="/media/system/js/mootools-core.js" ></script>
        <script src="/media/system/js/core.js" ></script>
        <script src="/media/system/js/mootools-more.js" ></script>
        <script src="/media/system/js/caption.js" ></script>
        <script src="/media/system/js/modal.js" ></script>

        <Script html={`
          Object.assign(window, {
            $defined(obj) {
              return (obj != undefined);
            },
            $clear(a) {
              clearInterval(a)
              clearTimeout(a)
            },
            $extend(a, b) {
              Object.append(a, b)
              a.appended = true
              return a
            }
          })
        `} />

        <script src="/components/com_phocagallery/assets/js/shadowbox/shadowbox.js" ></script>
        {/* <script src="/plugins/content/mavikthumbnails/slimbox-mt1.2/js/slimbox.js" ></script> */}
        <script src="/components/com_phocagallery/assets/overlib/overlib_mini.js" ></script>
        <script src="/modules/mod_icetabs/assets/script_16.js" ></script>
        <Script html={`
          window.addEvent('load', function() {
                  new JCaption('img.caption');
                });
              window.addEvent('domready', function() {

                SqueezeBox.initialize({});
                SqueezeBox.assign($$('a.modal-button'), {
                  parse: 'rel'
                });
              });
          window.addEvent('domready', function() {
                $$('.hasTip').each(function(el) {
                  var title = el.get('title');
                  if (title) {
                    var parts = title.split('::', 2);
                    el.store('tip:title', parts[0]);
                    el.store('tip:text', parts[1]);
                  }
                });
                var JTooltips = new Tips($$('.hasTip'), { maxTitleChars: 50, fixed: false});
              });
        `} />
        {/* <!--[if lt IE 8]>
        <link rel="stylesheet" href="/components/com_phocagallery/assets/phocagalleryieall.css" />
        <![endif]--> */}
        {/* <!--[if lt IE 8]>
        <link rel="stylesheet" href="/modules/mod_phocagallery_image/css/phocagallery_moduleieall_image.css" />
        <![endif]-->
        <!--[if lt IE 7]>
        <style>
        .phocagallery-box-file{
        background-color: expression(isNaN(this.js)?(this.js=1, this.onmouseover=new Function("this.className+=' hover';"),
        this.onmouseout=new Function("this.className=this.className.replace(' hover','');")):false););
        }
        </style>
        <![endif]--> */}

        <Script html={`
          Shadowbox.loadSkin("classic", "/components/com_phocagallery/assets/js/shadowbox/src/skin");
          Shadowbox.loadLanguage("en", "/components/com_phocagallery/assets/js/shadowbox/src/lang");
          Shadowbox.loadPlayer(["img"], "/components/com_phocagallery/assets/js/shadowbox/src/player");
          window.addEvent('domready', function(){
            Shadowbox.init()
          });
        `} />

        <link rel="stylesheet" href="/components/com_phocagallery/assets/js/shadowbox/src/skin/classic/skin.css" />
        <script src="/components/com_phocagallery/assets/js/shadowbox/src/skin/classic/skin.js"></script>
        <script src="/components/com_phocagallery/assets/js/shadowbox/src/lang/shadowbox-en.js"></script>
        <script src="/components/com_phocagallery/assets/js/shadowbox/src/player/shadowbox-img.js"></script>


        <link rel="stylesheet" href="/templates/system/css/system.css" />
        <link rel="stylesheet" href="/templates/system/css/general.css" />
        <link rel="stylesheet" href="/templates/pib/css/base.css?v7" />
        <link rel="stylesheet" href="/templates/pib/css/joomla.css" />
        <link rel="stylesheet" href="/templates/pib/css/ptsans.css" />
        {/* <!--[if IE 7]>
          <link href="/templates/pib/css/ie7.css" rel="stylesheet" media="all" />
          </style>
          <![endif]-->
        <!--[if IE]>
          <link href="/templates/pib/css/ie.css" rel="stylesheet" media="all" />
          </style>
          <![endif]--> */}
        {/* <link href="/index.php?option=com_ninjarsssyndicator&amp;feed_id=1&amp;format=raw" rel="alternate" type="application/rss+xml" title="RSS 2.0" /> */}
        <link rel="stylesheet" href="/templates/pib/css/main.css" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js" ></script>
        <script src="/templates/pib/js/showHide.js" ></script>
        <Script html={`
          jQuery(document).ready(function(){

            jQuery('.divslide').showHide({
              speed: 300,  // speed you want the toggle to happen
              easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
              changeText: 0, // if you dont want the button text to change, set this to 0
            });

            jQuery('.divslide2').showHide({
              speed: 500,  // speed you want the toggle to happen
              easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
              changeText: 0, // if you dont want the button text to change, set this to 0
            });

            jQuery('.divslide3').showHide({
              speed: 300,  // speed you want the toggle to happen
              easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
              changeText: 0, // if you dont want the button text to change, set this to 0
            });
          });
        `} />

        <Script html={`
          jQuery.noConflict();
        `} />

        <Script html={`
          var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-38994317-4']);
          _gaq.push(['_trackPageview']);

          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        `} />

        {/* <Script html={`
          (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter20593846 = new Ya.Metrika({id:20593846, webvisor:true, clickmap:true, trackLinks:true, accurateTrackBounce:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");
        `} />

        <noscript>
          <div><img src="//mc.yandex.ru/watch/20593846" style={{position:'absolute', left:'-9999px' }} alt="" /></div>
        </noscript> */}

        <script charset="utf-8" src="https://platform.twitter.com/js/button.e24f3bcdec527b80b9c80e88b62047c3.js"></script>
      </Head>
      <Body>
        {children}

        <Script html={`
          (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1";
          fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `} />

        <Script html={`
          !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
        `} />
      </Body>
    </Html>
  ),
}
