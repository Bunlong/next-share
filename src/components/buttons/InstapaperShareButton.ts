import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function instapaperLink(
  url: string,
  { title, description }: { title?: string; description?: string },
) {
  return (
    'http://www.instapaper.com/hello2' +
    transformObjectToParams({
      url,
      title,
      description,
    })
  );
}

const InstapaperShareButton = createShareButton<{
  title?: string;
  description?: string;
}>(
  'instapaper',
  instapaperLink,
  (props) => ({
    title: props.title,
    description: props.description,
  }),
  {
    windowWidth: 500,
    windowHeight: 500,
    windowPosition: 'windowCenter',
  },
);

export default InstapaperShareButton;
