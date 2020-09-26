import React from 'react'
import axios from 'axios'
import path from 'path'
// import { Post } from './types'

const Script = ({ html }) => <script dangerouslySetInnerHTML={{ __html: html }} />;

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  // getRoutes: async () => {
  //   const { data: posts } /* :{ data: Post[] } */ = await axios.get(
  //     'https://jsonplaceholder.typicode.com/posts'
  //   )
  //   return [
  //     {
  //       path: '/blog',
  //       getData: () => ({ posts }),
  //       children: posts.map((post /* : Post */) => ({
  //         path: `/post/${post.id}`,
  //         template: 'src/containers/Post',
  //         getData: () => ({ post }),
  //       })),
  //     },
  //   ]
  // },
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

        <link rel="stylesheet" href="/modules/mod_icemegamenu/themes/css3/css/css3_icemegamenu.css" />

        <script src="https://connect.facebook.net/ru_RU/all.js?hash=ab35b7708555c021057c617c95543681&amp;ua=modern_es6" async="" crossOrigin="anonymous"></script>
        <script id="twitter-wjs" src="//platform.twitter.com/widgets.js"></script>
        <script id="facebook-jssdk" src="//connect.facebook.net/ru_RU/all.js#xfbml=1"></script>
        {/* <script async="" src="https://mc.yandex.ru/metrika/watch.js"></script> */}
        <script async="" src="https://ssl.google-analytics.com/ga.js"></script>
        <script src="/media/system/js/mootools-core.js" ></script>
        <script src="/media/system/js/mootools-more.js" ></script>

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

        <script src="/modules/mod_icetabs/assets/script_16.js" ></script>

        <link rel="stylesheet" href="/templates/pib/css/base.css?v7" />
        <link rel="stylesheet" href="/templates/pib/css/other.css?v7" />
        <link rel="stylesheet" href="/templates/pib/css/joomla.css" />
        <link rel="stylesheet" href="/templates/pib/css/ptsans.css" />
        <link rel="stylesheet" href="/templates/pib/css/main.css" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js" ></script>
        <script src="/templates/pib/js/showHide.js" ></script>

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

        <script charSet="utf-8" src="https://platform.twitter.com/js/button.e24f3bcdec527b80b9c80e88b62047c3.js"></script>
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
