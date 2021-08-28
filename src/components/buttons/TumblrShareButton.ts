import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function tumblrLink(
  url: string,
  {
    title,
    caption,
    tags,
    posttype,
  }: {
    title?: string;
    caption?: string;
    tags?: string;
    posttype?: 'link' | string;
  },
) {
  return (
    'https://www.tumblr.com/widgets/share/tool' +
    transformObjectToParams({
      canonicalUrl: url,
      title,
      caption,
      tags,
      posttype,
    })
  );
}

type Options = {
  title?: string;
  caption?: string;
  posttype?: 'link' | string;
};

const TumblrShareButton = createShareButton<
  Options & { tags?: string[] },
  Options & { tags: string }
>(
  'tumblr',
  tumblrLink,
  (props) => ({
    title: props.title,
    tags: (props.tags || []).join(','),
    caption: props.caption,
    posttype: props.posttype || 'link',
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
);

export default TumblrShareButton;
