# next-share

Social media share buttons for your next React apps.

![next-share](https://raw.githubusercontent.com/bunlong/next-share/master/static/images/next-share.png)

[![NPM](https://img.shields.io/npm/v/next-share.svg)](https://www.npmjs.com/package/next-share) ![npm bundle size](https://img.shields.io/bundlephobia/min/next-share) [![Build Status](https://api.travis-ci.com/Bunlong/next-share.svg?branch=master)](https://travis-ci.com/Bunlong/next-share) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![downloads](https://img.shields.io/npm/dm/next-share.svg)](https://www.npmjs.com/package/next-share)

## 🎁 Features

* No dependencies
* Compatible with both JavaScript and TypeScript
* Share buttons for your next React app:
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

## 🔧 Install

next-share is available on npm. It can be installed with the following command:

```
npm install next-share --save
```

next-share is available on yarn as well. It can be installed with the following command:

```
yarn add next-share --save
```

## 💡 Usage

### 🎀 Facebook

```js
import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share'

<FacebookShareButton
  url={'https://github.com/next-share'}
  quote={'next-share is a social share buttons for your next React apps.'}
  hashtag={'#nextshare'}
>
  <FacebookIcon size={32} round />
</FacebookShareButton>
```

### 🎀 Line

```js
import {
  LineShareButton,
  LineIcon,
} from 'next-share'

<LineShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <LineIcon />
</LineShareButton>
```

### 🎀 Pinterest

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

### 🎀 Reddit

```js
import {
  RedditShareButton,
  RedditIcon,
} from 'next-share'

<RedditShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
  windowWidth={660}
  windowHeight={460}
>
  <RedditIcon size={32} round />
</RedditShareButton>
```

### 🎀 Telegram

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

### 🎀 Tumblr

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

### 🎀 Twitter

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

### 🎀 Viber

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

### 🎀 Weibo

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

### 🎀 Whatsapp

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

### 🎀 Linkedin

```js
import {
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share'

<LinkedinShareButton url={'https://github.com/next-share'}>
  <LinkedinIcon size={32} round />
</LinkedinShareButton>
```

### 🎀 VK

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

### 🎀 Livejournal

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

### 🎀 Workplace

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

### 🎀 Pocket

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

## 📚 Icons Documentation

### 📖 Icons Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>size</td>
    <td>number</td>
    <td></td>
    <td>Icon size in pixels.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>round</td>
    <td>boolean</td>
    <td>false</td>
    <td>Show round or rectangle.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>borderRadius</td>
    <td>number</td>
    <td></td>
    <td>Set rounded corners if using round icon.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>bgStyle</td>
    <td>object</td>
    <td></td>
    <td>Customize background style.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>iconFillColor</td>
    <td>string</td>
    <td>`white`</td>
    <td>Customize icon fill color.</td>
    <td>❌</td>
  </tr>
</table>

## 📚 ShareButtons Documentation

### 📖 FacebookShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>quote</td>
    <td>string</td>
    <td></td>
    <td>A quote to be shared.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>hashtag</td>
    <td>string</td>
    <td></td>
    <td></td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>550</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>400</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 LineShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>The title of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>500</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>500</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 PinterestShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>media</td>
    <td>string</td>
    <td></td>
    <td>The image URL that will be pinned.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
    <td></td>
    <td>The description of the shared media.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>550</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>400</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 RedditShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>The title of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>660</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>460</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 TelegramShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>The title of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>550</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>400</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 TumblrShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>The title of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>tags</td>
    <td><code>Array&lt;string&gt;</code></td>
    <td></td>
    <td></td>
    <td>❌</td>
  </tr>
  <tr>
    <td>caption</td>
    <td>string</td>
    <td></td>
    <td>The description of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>posttype</td>
    <td>string</td>
    <td><code>link</code></td>
    <td></td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>660</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>460</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 TwitterShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>The title of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>via</td>
    <td>string</td>
    <td></td>
    <td></td>
    <td>❌</td>
  </tr>
  <tr>
    <td>hashtags</td>
    <td>array</td>
    <td></td>
    <td></td>
    <td>❌</td>
  </tr>
  <tr>
    <td>related</td>
    <td>array</td>
    <td></td>
    <td></td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>550</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>400</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 ViberShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>The title of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>separator</td>
    <td>string</td>
    <td></td>
    <td></td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>660</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>460</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 WeiboShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>The title of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>image</td>
    <td>string</td>
    <td></td>
    <td>The image URL that will be shared.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>660</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>550</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 WhatsappShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>The title of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>separator</td>
    <td>string</td>
    <td></td>
    <td></td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>550</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>400</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 LinkedinShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>The title of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>summary</td>
    <td>string</td>
    <td></td>
    <td>Description of the shared page</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>source</td>
    <td>string</td>
    <td></td>
    <td>Source of the content (e.g. your website or application name).</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>550</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>400</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 VKShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>The title of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>image</td>
    <td>string</td>
    <td></td>
    <td>An absolute link to the image that will be shared</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>noParse</td>
    <td>boolean</td>
    <td></td>
    <td>If true is passed, VK will not retrieve URL information.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>noVkLinks</td>
    <td>boolean</td>
    <td></td>
    <td> If true is passed, there will be no links to the user's profile in the open window. Only for mobile devices.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>550</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>400</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 LivejournalShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>The title of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
    <td></td>
    <td>Description of the shared page.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>550</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>400</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 LivejournalShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>quote</td>
    <td>string</td>
    <td></td>
    <td>A quote to be shared along with the link.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>hashtag</td>
    <td>string</td>
    <td></td>
    <td> A hashtag specified by the developer to be added to the shared content. People will still have the opportunity to remove this hashtag in the dialog. The hashtag should include the hash symbol.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>550</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>400</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

### 📖 PocketShareButton Props

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>children</td>
    <td>React node</td>
    <td></td>
    <td>React component, HTML element or string.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>url</td>
    <td>string</td>
    <td></td>
    <td>The URL of the shared page.</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>Title of the shared page. Note that if Pocket detects a title tag on the page being saved, this parameter will be ignored and the title tag of the saved page will be used instead.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowWidth</td>
    <td>number</td>
    <td>550</td>
    <td>Opened window width.</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>windowHeight</td>
    <td>number</td>
    <td>400</td>
    <td>Opened window height.</td>
    <td>❌</td>
  </tr>
</table>

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
  </tr>
</table>

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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
