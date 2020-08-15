import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  WeiboShareButton,
  WeiboIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share'

function App() {
  return (
    <div>
      <FacebookShareButton
        url={'https://github.com/bunlong/next-share'}
        quote={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
        hashtag={'#NextShare'}
      >
        <FacebookIcon />
      </FacebookShareButton>
      <LineShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <LineIcon />
      </LineShareButton>
      <PinterestShareButton
        url={'https://github.com/bunlong/next-share'}
        media={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
        windowWidth={660}
        windowHeight={460}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <TelegramShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <TumblrShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <TumblrIcon size={32} round />
      </TumblrShareButton>
      <TwitterShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <ViberShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <ViberIcon size={32} round />
      </ViberShareButton>
      <WeiboShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
        // image={`${String(window.location)}/${exampleImage}`}
      >
        <WeiboIcon size={32} round />
      </WeiboShareButton>
      <WhatsappShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
        separator="::"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  )
};

export default App;
