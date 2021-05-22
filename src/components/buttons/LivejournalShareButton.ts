import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function livejournalLink(
  _url: string,
  { title, description }: { title?: string; description?: string },
) {
  return (
    'https://www.livejournal.com/update.bml' +
    transformObjectToParams({
      subject: title,
      event: description,
    })
  );
}

const LivejournalShareButton = createShareButton<{
  title?: string;
  description?: string;
}>(
  'livejournal',
  livejournalLink,
  (props) => ({
    title: props.title,
    description: props.description,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
);

export default LivejournalShareButton;
