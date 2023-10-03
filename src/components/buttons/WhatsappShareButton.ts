import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function whatsappLink(
  url: string,
  { title, separator }: { title?: string; separator?: string },
) {
  return (
    'https://api.whatsapp.com/send' +
    transformObjectToParams({
      text: title ? title + separator + url : url,
    })
  );
}

const WhatsappShareButton = createShareButton<{
  title?: string;
  separator?: string;
}>(
  'whatsapp',
  whatsappLink,
  (props) => ({
    title: props.title,
    separator: props.separator || ' ',
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default WhatsappShareButton;
