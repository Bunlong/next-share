import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function isMobileOrTablet() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}

function whatsappLink(
  url: string,
  { title, separator }: { title?: string; separator?: string },
) {
  return (
    'https://' +
    (isMobileOrTablet() ? 'api' : 'web') +
    '.whatsapp.com/send' +
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
