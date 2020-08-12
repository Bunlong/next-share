import React from 'react';
import {
  Sticky,
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
      <Sticky>
        <FacebookShareButton
          url={'https://github.com/bunlong'}
          quote={'Testing - next-share is the social share buttons component for Nextjs, React and React Native.'}
          hashtag={'#NextShare'}
        >
          <FacebookIcon />
        </FacebookShareButton>
        <LineShareButton
          url={'https://github.com/bunlong'}
          title={'Test'}
        >
          <LineIcon />
        </LineShareButton>
        <PinterestShareButton
          url={'https://github.com/bunlong'}
          media={'https://github.com/Bunlong/react-webspeech/blob/master/static/images/react-webspeech.png'}
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
        <RedditShareButton
          url={'https://github.com/bunlong'}
          title={'Test'}
          windowWidth={660}
          windowHeight={460}
        >
          <RedditIcon size={32} round />
        </RedditShareButton>
        <TelegramShareButton
          url={'https://github.com/bunlong'}
          title={'Test'}
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <TumblrShareButton
          url={'https://github.com/bunlong'}
          title={'Test'}
        >
          <TumblrIcon size={32} round />
        </TumblrShareButton>
        <TwitterShareButton
          url={'https://github.com/bunlong'}
          title={'Test'}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <ViberShareButton
          url={'https://github.com/bunlong'}
          title={'Test'}
        >
          <ViberIcon size={32} round />
        </ViberShareButton>
        <WeiboShareButton
          url={'https://github.com/bunlong'}
          title={'Test'}
          // image={`${String(window.location)}/${exampleImage}`}
        >
          <WeiboIcon size={32} round />
        </WeiboShareButton>
        <WhatsappShareButton
          url={'https://github.com/bunlong'}
          title={'Test'}
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </Sticky>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
      abc<br/>
    </div>
  )
};

export default App;
