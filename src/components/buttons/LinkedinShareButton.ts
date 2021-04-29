import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

type Options = {
  title?: string;
  summary?: string;
  source?: string;
};

function linkedinLink(url: string, { title, summary, source }: Options) {
  return (
    'https://linkedin.com/shareArticle' +
    transformObjectToParams({ url, mini: 'true', title, summary, source })
  );
}

const LinkedinShareButton = createShareButton<Options>(
  'linkedin',
  linkedinLink,
  ({ title, summary, source }) => ({ title, summary, source }),
  {
    windowWidth: 750,
    windowHeight: 600,
  },
);

export default LinkedinShareButton;
