import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function gabLink(url: string, { title }: { title?: string }) {
  return (
    'https://gab.com/compose' +
    transformObjectToParams({
      url,
      text: title,
    })
  );
}

const GabShareButton = createShareButton<{ title?: string }>(
  'gab',
  gabLink,
  (props) => ({
    title: props.title,
  }),
  {
    windowWidth: 660,
    windowHeight: 640,
    windowPosition: 'windowCenter',
  },
);

export default GabShareButton;
