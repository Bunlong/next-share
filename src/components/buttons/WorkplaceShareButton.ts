import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function workplaceLink(
  url: string,
  { quote, hashtag }: { quote?: string; hashtag?: string },
) {
  return (
    'https://work.facebook.com/sharer.php' +
    transformObjectToParams({
      u: url,
      quote,
      hashtag,
    })
  );
}

const WorkplaceShareButton = createShareButton<{
  quote?: string;
  hashtag?: string;
}>(
  'workplace',
  workplaceLink,
  (props) => ({
    quote: props.quote,
    hashtag: props.hashtag,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default WorkplaceShareButton;
