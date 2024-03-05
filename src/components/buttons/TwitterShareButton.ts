import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function twitterLink(
  url: string,
  {
    title,
    via,
    hashtags = [],
    related = [],
    isMobile = false,
  }: {
    title?: string;
    via?: string;
    hashtags?: string[];
    related?: string[];
    isMobile?: boolean;
  },
) {
  return (
    (isMobile
      ? 'https://mobile.twitter.com/intent/tweet'
      : 'https://twitter.com/intent/tweet') +
    transformObjectToParams({
      url,
      text: title,
      via,
      hashtags: hashtags.length > 0 ? hashtags.join(',') : undefined,
      related: related.length > 0 ? related.join(',') : undefined,
    })
  );
}

const TwitterShareButton = createShareButton<{
  title?: string;
  via?: string;
  hashtags?: string[];
  related?: string[];
  isMobile?: boolean;
}>(
  'twitter',
  twitterLink,
  (props) => ({
    hashtags: props.hashtags,
    title: props.title,
    via: props.via,
    related: props.related,
    isMobile: props.isMobile,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default TwitterShareButton;
