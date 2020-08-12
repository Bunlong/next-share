// import assert from './utils/assert';
import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function telegramLink(url: string, { title }: { title?: string }) {
  // assert(url, 'telegram.url');

  return (
    'https://telegram.me/share/' +
    transformObjectToParams({
      url,
      text: title,
    })
  );
}

const TelegramShareButton = createShareButton<{ title?: string }>(
  'telegram',
  telegramLink,
  props => ({
    title: props.title,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default TelegramShareButton;
