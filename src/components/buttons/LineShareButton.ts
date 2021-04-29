import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function lineLink(url: string, { title }: { title?: string }) {
  return (
    'https://social-plugins.line.me/lineit/share' +
    transformObjectToParams({
      url,
      text: title,
    })
  );
}

const LineShareButton = createShareButton<{ title?: string }>(
  'line',
  lineLink,
  (props) => ({
    title: props.title,
  }),
  {
    windowWidth: 500,
    windowHeight: 500,
  },
);

export default LineShareButton;
