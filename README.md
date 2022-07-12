# next-share

Social media share buttons for your next React apps.

[![downloads](https://img.shields.io/npm/dm/next-share.svg?label=monthly%20downloads)](https://www.npmjs.com/package/next-share) [![downloads](https://img.shields.io/npm/dt/next-share.svg?label=total%20downloads)](https://www.npmjs.com/package/next-share)

[![NPM](https://img.shields.io/npm/v/next-share.svg)](https://www.npmjs.com/package/next-share) ![npm bundle size](https://img.shields.io/bundlephobia/min/next-share) [![Build Status](https://api.travis-ci.com/Bunlong/next-share.svg?branch=master)](https://travis-ci.com/Bunlong/next-share) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img src="https://raw.githubusercontent.com/bunlong/next-share/master/static/images/next-share.png" alt="next-share" />

## 🎁 Features

* No dependencies
* Compatible with both JavaScript and TypeScript
* Share buttons for your next React app
  * Facebook
  * Line
  * Pinterest
  * Reddit
  * Telegram
  * Tumblr
  * Twitter
  * Viber
  * Weibo
  * Whatsapp
  * Linkedin
  * VKShare
  * Livejournal
  * Workplace
  * Pocket
  * Instapaper
  * Hatena
  * FacebookMessenger
  * Email
* Share counts
  * OKShareCount
  * PinterestShareCount
  * TumblrShareCount
  * VKShareCount

## 🔧 Install

next-share is available on npm. It can be installed with the following command:

```
npm install next-share --save
```

next-share is available on yarn as well. It can be installed with the following command:

```
yarn add next-share --save
```

## 💡 Usage of ShareButton

### 🎀 Facebook

#### 👨‍💻 Code

```js
import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share';

<FacebookShareButton
  url={'https://github.com/next-share'}
  quote={'next-share is a social share buttons for your next React apps.'}
  hashtag={'#nextshare'}
>
  <FacebookIcon size={32} round />
</FacebookShareButton>
```

#### 📖 FacebookShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| quote | string |  | A quote to be shared. | ❌ |
| hashtag | string |  | Hashtag to be shared. | ❌ |
| windowWidth | number | 550 | Opened window width. | ❌ |
| windowHeight | number | 400 | Opened window height. | ❌ |

#### 📖 [FacebookIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Line

#### 👨‍💻 Code

```js
import {
  LineShareButton,
  LineIcon,
} from 'next-share';

<LineShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <LineIcon />
</LineShareButton>
```

#### 📖 LineShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| windowWidth | number | 500 | Opened window width. | ❌ |
| windowHeight | number | 500 | Opened window height. | ❌ |

#### 📖 [LineIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Pinterest

#### 👨‍💻 Code

```js
import {
  PinterestShareButton,
  PinterestIcon,
} from 'next-share'

<PinterestShareButton
  url={'https://github.com/next-share'}
  media={'next-share is a social share buttons for your next React apps.'}
>
  <PinterestIcon size={32} round />
</PinterestShareButton>
```

#### 📖 PinterestShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| media | string |  | The image URL that will be pinned. | ✅ |
| description | string |  | The description of the shared media. | ❌ |
| windowWidth | number | 1000 | Opened window width. | ❌ |
| windowHeight | number | 730 | Opened window height. | ❌ |

#### 📖 [PinterestIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Reddit

#### 👨‍💻 Code

```js
import {
  RedditShareButton,
  RedditIcon,
} from 'next-share'

<RedditShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <RedditIcon size={32} round />
</RedditShareButton>
```

#### 📖 RedditShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |

#### 📖 [RedditIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Telegram

#### 👨‍💻 Code

```js
import {
  TelegramShareButton,
  TelegramIcon,
} from 'next-share'

<TelegramShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <TelegramIcon size={32} round />
</TelegramShareButton>
```

#### 📖 TelegramShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| windowWidth | number | 550 | Opened window width. | ❌ |
| windowHeight | number | 400 | Opened window height. | ❌ |

#### 📖 [TelegramIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Tumblr

#### 👨‍💻 Code

```js
import {
  TumblrShareButton,
  TumblrIcon,
} from 'next-share'

<TumblrShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <TumblrIcon size={32} round />
</TumblrShareButton>
```

#### 📖 TumblrShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| tags | <code>Array&lt;string&gt;</code> |  |  | ❌ |
| caption | string |  | The description of the shared page. | ❌ |
| posttype | string | <code>link</code> |  | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |

#### 📖 [TumblrIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Twitter

#### 👨‍💻 Code

```js
import {
  TwitterShareButton,
  TwitterIcon,
} from 'next-share'

<TwitterShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <TwitterIcon size={32} round />
</TwitterShareButton>
```

#### 📖 TwitterShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| via | string |  |  | ❌ |
| hashtags | array |  |  | ❌ |
| related | array |  |  | ❌ |
| windowWidth | number | 550 | Opened window width. | ❌ |
| windowHeight | number | 400 | Opened window height. | ❌ |

#### 📖 [TwitterIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Viber

#### 👨‍💻 Code

```js
import {
  ViberShareButton,
  ViberIcon,
} from 'next-share'

<ViberShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <ViberIcon size={32} round />
</ViberShareButton>
```

#### 📖 ViberShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| separator |  |  |  | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |

#### 📖 [ViberIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Weibo

#### 👨‍💻 Code

```js
import {
  WeiboShareButton,
  WeiboIcon,
} from 'next-share'

<WeiboShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
  image={`${String(window.location)}/${example-image}`}
>
  <WeiboIcon size={32} round />
</WeiboShareButton>
```

#### 📖 WeiboShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| image | string |  | The image URL that will be shared. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 550 | Opened window height. | ❌ |

#### 📖 [WeiboIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Whatsapp

#### 👨‍💻 Code

```js
import {
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share'

<WhatsappShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
  separator=":: "
>
  <WhatsappIcon size={32} round />
</WhatsappShareButton>
```

#### 📖 WhatsappShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| separator | string |  |  | ❌ |
| windowWidth | number | 550 | Opened window width. | ❌ |
| windowHeight | number | 400 | Opened window height. | ❌ |

#### 📖 [WhatsappIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Linkedin

#### 👨‍💻 Code

```js
import {
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share'

<LinkedinShareButton url={'https://github.com/next-share'}>
  <LinkedinIcon size={32} round />
</LinkedinShareButton>
```

#### 📖 LinkedinShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| summary | string |  | Description of the shared page. | ❌ |
| source | string |  | Source of the content (e.g. your website or application name). | ❌ |
| windowWidth | number | 750 | Opened window width. | ❌ |
| windowHeight | number | 600 | Opened window height. | ❌ |

#### 📖 [LinkedinIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 VK

#### 👨‍💻 Code

```js
import {
  VKShareButton,
  VKIcon,
} from 'next-share'

<VKShareButton
  url={'https://github.com/next-share'}
  image={'./next-share.png'}
>
  <VKIcon size={32} round />
</VKShareButton>
```

#### 📖 VKShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| image | string |  | An absolute link to the image that will be shared. | ❌ |
| noParse | boolean |  | If true is passed, VK will not retrieve URL information. | ❌ |
| noVkLinks | boolean |  | If true is passed, there will be no links to the user's profile in the open window. Only for mobile devices. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |

#### 📖 [VKIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Mailru

#### 👨‍💻 Code

```js
import {
  MailruShareButton,
  MailruIcon,
} from 'next-share'

<MailruShareButton
  url={'https://github.com/next-share'}
  title={'Next Share'}
>
  <MailruIcon size={32} round />
</MailruShareButton>
```

#### 📖 MailruShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| description | string |  | Description of the shared page. | ❌ |
| imageUrl | string |  | Image url of the shared page. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |

#### 📖 [MailruIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Livejournal

#### 👨‍💻 Code

```js
import {
  LivejournalShareButton,
  LivejournalIcon,
} from 'next-share'

<LivejournalShareButton
  url={'https://github.com/next-share'}
  title={'Next Share'}
  description={'https://github.com/next-share'}
>
  <LivejournalIcon size={32} round />
</LivejournalShareButton>
```

#### 📖 LivejournalShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | The title of the shared page. | ❌ |
| description | string |  | Description of the shared page. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |

#### 📖 [LivejournalIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Workplace

#### 👨‍💻 Code

```js
import {
  WorkplaceShareButton,
  WorkplaceIcon,
} from 'next-share'

<WorkplaceShareButton
  url={'https://github.com/next-share'}
  quote={'Next Share'}
>
  <WorkplaceIcon size={32} round />
</WorkplaceShareButton>
```

#### 📖 WorkplaceShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| quote | string |  |  | ❌ |
| hashtag | string |  |  | ❌ |
| windowWidth | number | 550 | Opened window width. | ❌ |
| windowHeight | number | 400 | Opened window height. | ❌ |

#### 📖 [WorkplaceIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Pocket

#### 👨‍💻 Code

```js
import {
  PocketShareButton,
  PocketIcon,
} from 'next-share'

<PocketShareButton
  url={'https://github.com/next-share'}
  title={'Next Share'}
>
  <PocketIcon size={32} round />
</PocketShareButton>
```

#### 📖 PocketShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | Title of the shared page. Note that if Pocket detects a title tag on the page being saved, this parameter will be ignored and the title tag of the saved page will be used instead. | ❌ |
| windowWidth | number | 500 | Opened window width. | ❌ |
| windowHeight | number | 500 | Opened window height. | ❌ |

#### 📖 [PocketIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Instapaper

#### 👨‍💻 Code

```js
import {
  InstapaperShareButton,
  InstapaperIcon,
} from 'next-share'

<InstapaperShareButton
  url={'https://github.com/next-share'}
  title={'Next Share'}
>
  <InstapaperIcon size={32} round />
</InstapaperShareButton>
```

#### 📖 InstapaperShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | Title of the shared page. | ❌ |
| description | string |  | Description of the shared page. | ❌ |
| windowWidth | number | 500 | Opened window width. | ❌ |
| windowHeight | number | 500 | Opened window height. | ❌ |

#### 📖 [InstapaperIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Hatena

#### 👨‍💻 Code

```js
import {
  HatenaShareButton,
  HatenaIcon,
} from 'next-share'

<HatenaShareButton
  url={'https://github.com/next-share'}
  title={'Next Share'}
>
  <HatenaIcon size={32} round />
</HatenaShareButton>
```

#### 📖 HatenaShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| title | string |  | Title of the shared page. | ❌ |
| windowWidth | number | 660 | Opened window width. | ❌ |
| windowHeight | number | 460 | Opened window height. | ❌ |

#### 📖 [HatenaIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 FacebookMessenger

#### 👨‍💻 Code

```js
import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from 'next-share'

<FacebookMessengerShareButton
  url={'https://github.com/next-share'}
  appId={''}
>
  <FacebookMessengerIcon size={32} round />
</FacebookMessengerShareButton>
```

#### 📖 FacebookMessengerShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| appId | string |  | Facebook application id. | ❌ |
| redirectUri | string |  | The URL to redirect to after sharing (default: the shared url). | ❌ |
| to | string |  | A user ID of a recipient. Once the dialog comes up, the sender can specify additional people as recipients. | ❌ |
| windowWidth | number | 1000 | Opened window width. | ❌ |
| windowHeight | number | 820 | Opened window height. | ❌ |

#### 📖 [FacebookMessengerIcon props](https://github.com/Bunlong/next-share#-icons-props)

### 🎀 Email

#### 👨‍💻 Code

```js
import {
  EmailShareButton,
  EmailIcon,
} from 'next-share'

<EmailShareButton
  url={'https://github.com/next-share'}
  subject={'Next Share'}
  body="body"
>
  <EmailIcon size={32} round />
</EmailShareButton>
```

#### 📖 EmailShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| subject | string |  |  | ❌ |
| body | string |  |  | ❌ |
| separator | string |  |  | ❌ |

#### 📖 [EmailIcon props](https://github.com/Bunlong/next-share#-icons-props)

## 📚 Icons props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| size | number |  | Icon size in pixels. | ❌ |
| round | boolean |  | Show round or rectangle. | ❌ |
| borderRadius | number |  | Set rounded corners if using round icon. | ❌ |
| bgStyle | object |  | Customize background style. | ❌ |
| iconFillColor | string | <code>white</code> | Customize icon fill color. | ❌ |

## 💡 Usage of ShareCount

#### 👨‍💻 Code

```js
import {
  OKShareCount,
  PinterestShareCount,
  TumblrShareCount,
  VKShareCount,
} from 'next-share';

<PinterestShareCount url={'https://github.com/next-share'} />

<PinterestShareCount url={'https://github.com/next-share'}>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</PinterestShareCount>
```

#### 📖 FacebookShareButton props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| url | string |  | The URL of the shared page. | ✅ |
| quote | string |  | A quote to be shared. | ❌ |
| hashtag | string |  | Hashtag to be shared. | ❌ |
| windowWidth | number | 550 | Opened window width. | ❌ |
| windowHeight | number | 400 | Opened window height. | ❌ |

## 📜 Changelog

Latest version 0.16.0 (2022-07-14):

  * Add sharecount component
    * [x] OKShareCount
    * [x] PinterestShareCount
    * [x] TumblrShareCount
    * [x] VKShareCount
    * [ ] FacebookShareCount
    * [ ] HatenaShareCount
    * [ ] RedditShareCount

Details changes for each release are documented in the [CHANGELOG.md](https://github.com/Bunlong/next-share/blob/master/CHANGELOG.md).

## 💖 Wrap Up

If you think any of the `next-share` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `next-share` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ✨ Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Bunlong">
        <img src="https://avatars0.githubusercontent.com/u/1308397?s=400&u=945dc6b97571e2b98b659d34b1c81ae2514046bf&v=4" width="100" alt="Bunlong" />
        <br />
        <sub>
          <b>Bunlong</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Akirtovskis">
        <img src="https://avatars.githubusercontent.com/u/25903618?v=4" width="100" alt="Arturs Kirtovskis" />
        <br />
        <sub>
          <b>Arturs Kirtovskis</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/helloitsm3">
        <img src="https://avatars.githubusercontent.com/u/13825491?v=4" width="100" alt="Sean" />
        <br />
        <sub>
          <b>Sean</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/stevescavo">
        <img src="https://avatars.githubusercontent.com/u/2171570?v=4" width="100" alt="Steve Scavo" />
        <br />
        <sub>
          <b>Steve Scavo</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- ======= Development =======

To use hook in development => https://reactjs.org/warnings/invalid-hook-call-warning.html

====================== -->

<!-- ======= Sticky =======

import React, { Component, CSSProperties } from 'react';

const styles = {
  sticky: {
    position: 'fixed',
    top: '50%',
    '-webkit-transform': 'translateY(-50%)',
    '-ms-transform': 'translateY(-50%)',
    transform: 'translateY(-50%)',
    display: 'grid',
    left: 0,
    border: 'none',
  } as CSSProperties,
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
};

interface Props {
  children: React.ReactNode;
}

export default class Sticky extends Component<Props> {
  render() {
    return (
      <div style={styles.sticky}>
        {this.props.children}
      </div>
    );
  }
}

====================== -->
