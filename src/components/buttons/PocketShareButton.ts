import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function pocketLink(url: string, { title }: { title?: string }) {
  return (
    'https://getpocket.com/save' +
    transformObjectToParams({
      url,
      title,
    })
  );
}

const PocketShareButton = createShareButton<{ title?: string }>(
  'pocket',
  pocketLink,
  (props) => ({
    title: props.title,
  }),
  {
    windowWidth: 500,
    windowHeight: 500,
  },
);

export default PocketShareButton;
