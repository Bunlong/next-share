import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function weiboLink(
  url: string,
  { title, image }: { title?: string; image?: string },
) {
  return (
    'http://service.weibo.com/share/share.php' +
    transformObjectToParams({
      url,
      title,
      pic: image,
    })
  );
}

const WeiboShareButton = createShareButton<{ title?: string; image?: string }>(
  'weibo',
  weiboLink,
  (props) => ({
    title: props.title,
    image: props.image,
  }),
  {
    windowWidth: 660,
    windowHeight: 550,
    windowPosition: 'screenCenter',
  },
);

export default WeiboShareButton;
