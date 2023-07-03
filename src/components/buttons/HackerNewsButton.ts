import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function hackerNewsLink( url: string, { title }: { title?: string } ) {
  return (
    'http://news.ycombinator.com/submitlink' +
    transformObjectToParams({
        u: url,
        t: title,
    })
  );
}

const HackerNewsShareButton = createShareButton<{ title?: string }>(
  'hackernews',
  hackerNewsLink,
  (props) => ({
    title: props.title,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default HackerNewsShareButton;
