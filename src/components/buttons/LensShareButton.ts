import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function lensLink(
  url: string,
  { text, hashtags, via }: { text?: string; hashtags?: string, via?: string },
) {
  return (
    'https://lenster.xyz/' +
    transformObjectToParams({
      url,
      text,
      via,
      hashtags,
    })
  );
}

const LensShareButton = createShareButton<{
  text?: string;
  hashtags?: string;
  via?: string;
}>(
  'lens',
  lensLink,
  (props) => ({
    text: props.text,
    hashtag: props.hashtags,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default LensShareButton;
