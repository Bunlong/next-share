import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function redditLink(url: string, { title }: { title?: string }) {
  return (
    'https://www.reddit.com/submit' +
    transformObjectToParams({
      url,
      title,
    })
  );
}

const RedditShareButton = createShareButton<{ title?: string }>(
  'reddit',
  redditLink,
  (props) => ({
    title: props.title,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: 'windowCenter',
  },
);

export default RedditShareButton;
