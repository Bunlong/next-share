import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function pinterestLink(
  url: string,
  { media, description }: { media: string; description?: string },
) {
  return (
    'https://pinterest.com/pin/create/button/' +
    transformObjectToParams({
      url,
      media,
      description,
    })
  );
}

const PinterestShareButton = createShareButton<{
  media: string;
  description?: string;
}>(
  'pinterest',
  pinterestLink,
  (props) => ({
    media: props.media,
    description: props.description,
  }),
  {
    windowWidth: 1000,
    windowHeight: 730,
  },
);

export default PinterestShareButton;
