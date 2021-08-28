import createShareButton from '../../hocs/createShareButton';

function hatenaLink(url: string, { title }: { title?: string }) {
  return `http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`;
}

const HatenaShareButton = createShareButton<{ title?: string }>(
  'hatena',
  hatenaLink,
  (props) => ({
    title: props.title,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: 'windowCenter',
  },
);

export default HatenaShareButton;
