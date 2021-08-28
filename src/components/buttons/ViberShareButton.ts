import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function viberLink(
  url: string,
  { title, separator }: { title?: string; separator?: string },
) {
  return (
    'viber://forward' +
    transformObjectToParams({
      text: title ? title + separator + url : url,
    })
  );
}

const ViberShareButton = createShareButton<{
  title?: string;
  separator?: string;
}>(
  'viber',
  viberLink,
  (props) => ({
    title: props.title,
    separator: props.separator || ' ',
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
);

export default ViberShareButton;
