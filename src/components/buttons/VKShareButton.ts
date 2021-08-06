import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

type Options = {
  title?: string;
  image?: string;
  noParse?: boolean;
  noVkLinks?: boolean;
};

function vkLink(url: string, { title, image, noParse, noVkLinks }: Options) {
  return (
    'https://vk.com/share.php' +
    transformObjectToParams({
      url,
      title,
      image,
      noparse: noParse ? 1 : 0,
      no_vk_links: noVkLinks ? 1 : 0,
    })
  );
}

const VKShareButton = createShareButton<Options>(
  'vk',
  vkLink,
  (props) => ({
    title: props.title,
    image: props.image,
    noParse: props.noParse,
    noVkLinks: props.noVkLinks,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
  },
);

export default VKShareButton;
