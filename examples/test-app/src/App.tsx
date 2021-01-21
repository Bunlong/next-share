import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
} from './next-share';
import './App.css';

function App() {
  return (
    <div className="App">
      <FacebookShareButton
        url={'https://github.com/next-share'}
        quote={'next-share is a social share buttons plugin for React apps.'}
        hashtag={'#nextshare'}
      >
        <FacebookIcon />
      </FacebookShareButton>

      <RedditShareButton
        url={'https://github.com/next-share'}
        title={'next-share is a social share buttons plugin for React apps.'}
        windowWidth={660}
        windowHeight={460}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
    </div>
  );
}

export default App;
