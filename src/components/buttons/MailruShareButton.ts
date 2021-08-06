import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function mailruLink(
  url: string,
  {
    title,
    description,
    imageUrl,
  }: { title?: string; description?: string; imageUrl?: string },
) {
  return (
    'https://connect.mail.ru/share' +
    transformObjectToParams({
      url,
      title,
      description,
      image_url: imageUrl,
    })
  );
}

const MailruShareButton = createShareButton<{
  title?: string;
  description?: string;
  imageUrl?: string;
}>(
  'mailru',
  mailruLink,
  (props) => ({
    title: props.title,
    description: props.description,
    imageUrl: props.imageUrl,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
);

export default MailruShareButton;
