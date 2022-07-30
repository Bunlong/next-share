import type { NextPage } from 'next'

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
  LinkedinShareButton,
  LinkedinIcon,
  VKShareButton,
  VKIcon,
  MailruShareButton,
  MailruIcon,
  LivejournalShareButton,
  LivejournalIcon,
  WorkplaceShareButton,
  WorkplaceIcon,
  PocketShareButton,
  PocketIcon,
  InstapaperShareButton,
  InstapaperIcon,
  HatenaShareButton,
  HatenaIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
  GabShareButton,
  GabIcon,
  OKShareCount,
  PinterestShareCount,
  TumblrShareCount,
  VKShareCount,
  HatenaShareCount,
  // FacebookShareCount,
  // RedditShareCount,
} from 'next-share'

const Home: NextPage = () => {
  return (
    <>
      <FacebookShareButton
        url={'https://github.com/bunlong/next-share'}
        quote={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
        hashtag={'#NextShare'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <FacebookIcon size={32} round />
        </div>
      </FacebookShareButton>
      <LineShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <LineIcon size={32} round />
        </div>
      </LineShareButton>
      <PinterestShareButton
        url={'https://github.com/bunlong/next-share'}
        media={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <PinterestIcon size={32} round />
        </div>
      </PinterestShareButton>
      <RedditShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
        windowWidth={660}
        windowHeight={460}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <RedditIcon size={32} round />
        </div>
      </RedditShareButton>
      <TelegramShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <TelegramIcon size={32} round />
        </div>
      </TelegramShareButton>
      <TumblrShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <TumblrIcon size={32} round />
        </div>
      </TumblrShareButton>
      <TwitterShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <TwitterIcon size={32} round />
        </div>
      </TwitterShareButton>
      <ViberShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <ViberIcon size={32} round />
        </div>
      </ViberShareButton>
      <WeiboShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
        // image={`${String(window.location)}/${exampleImage}`}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <WeiboIcon size={32} round />
        </div>
      </WeiboShareButton>
      <WhatsappShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
        separator="::"
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <WhatsappIcon size={32} round />
        </div>
      </WhatsappShareButton>
      <LinkedinShareButton
        url={'http://github.com'}
        title={'Testing - next-share is a .'}
        summary={'Testing - next-share is a .'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <LinkedinIcon size={32} round />
        </div>
      </LinkedinShareButton>
      <VKShareButton
        url={'https://github.com/next-share'}
        image={`https://repository-images.githubusercontent.com/282947984/a3f80f00-df42-11ea-8d44-2d5482d26f27`}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <VKIcon size={32} round />
        </div>
      </VKShareButton>
      <MailruShareButton
        url={'https://github.com/next-share'}
        title={'Next Share'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <MailruIcon size={32} round />
        </div>
      </MailruShareButton>
      <LivejournalShareButton
        url={'https://github.com/next-share'}
        title={'Next Share'}
        description={'https://github.com/next-share'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <LivejournalIcon size={32} round />
        </div>
      </LivejournalShareButton>
      <WorkplaceShareButton
        url={'https://github.com/next-share'}
        quote={'Next Share'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <WorkplaceIcon size={32} round />
        </div>
      </WorkplaceShareButton>
      <PocketShareButton
        url={'https://github.com/next-share'}
        title={'Next Share'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <PocketIcon size={32} round />
        </div>
      </PocketShareButton>
      <InstapaperShareButton
        url={'https://github.com/next-share'}
        title={'Next Share'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <InstapaperIcon size={32} round />
        </div>
      </InstapaperShareButton>
      <HatenaShareButton
        url={'https://github.com/next-share'}
        title={'Next Share'}
        windowWidth={660}
        windowHeight={460}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <HatenaIcon size={32} round />
        </div>
      </HatenaShareButton>
      <FacebookMessengerShareButton
        url={'https://github.com/next-share'}
        appId={''}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <FacebookMessengerIcon size={32} round />
        </div>
      </FacebookMessengerShareButton>
      <EmailShareButton
        url={'https://github.com/next-share'}
        title={'Next Share'}
        body="body"
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <EmailIcon size={32} round />
        </div>
      </EmailShareButton>
      <GabShareButton
        url={'https://github.com/next-share'}
        title={'Next Share'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <GabIcon size={32} round />
        </div>
      </GabShareButton>
      {/* <OKShareCount url={'https://github.com/next-share'} /> */}
      <OKShareCount url={'https://github.com/next-share'}>
        {shareCount => <span className="myShareCountWrapper">OKShareCount: {shareCount}</span>}
      </OKShareCount>
      {/* <PinterestShareCount url={'https://github.com/next-share'} /> */}
      <PinterestShareCount url={'https://github.com/next-share'}>
        {shareCount => <span className="myShareCountWrapper">PinterestShareCount: {shareCount}</span>}
      </PinterestShareCount>
      {/* <TumblrShareCount url={'https://github.com/next-share'} /> */}
      <TumblrShareCount url={'https://github.com/next-share'}>
        {shareCount => <span className="myShareCountWrapper">TumblrShareCount: {shareCount}</span>}
      </TumblrShareCount>
      {/* <VKShareCount url={'https://github.com/next-share'} /> */}
      <VKShareCount url={'https://github.com/next-share'}>
        {shareCount => <span className="myShareCountWrapper">VKShareCount: {shareCount}</span>}
      </VKShareCount>
      {/* <HatenaShareCount url={'https://github.com/next-share'} /> */}
      <HatenaShareCount url={'https://github.com/next-share'}>
        {shareCount => <span className="myShareCountWrapper">HatenaShareCount: {shareCount}</span>}
      </HatenaShareCount>
      {/* <FacebookShareCount url={'https://github.com/next-share'} appId={''} appSecret={''} /> */}
      {/* <FacebookShareCount url={'https://github.com/next-share'} appId={''} appSecret={''}>
        {shareCount => <span className="myShareCountWrapper">FacebookShareCount: {shareCount}</span>}
      </FacebookShareCount> */}
      {/* <RedditShareCount url={'https://github.com/next-share'} /> */}
      {/* <RedditShareCount url={'https://github.com/next-share'}>
        {shareCount => <span className="myShareCountWrapper">RedditShareCount: {shareCount}</span>}
      </RedditShareCount> */}
    </>
  )
}

export default Home
