import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

type Options = {
  body?: string;
  separator?: string;
  subject?: string;
  newTab?: boolean;
};

function emailLink(url: string, { subject, body, separator }: Options) {
  return (
    'mailto:' +
    transformObjectToParams({
      subject,
      body: body ? body + separator + url : url,
    })
  );
}

const EmailShareButton = createShareButton<Options>(
  'email',
  emailLink,
  (props) => ({
    subject: props.subject,
    body: props.body,
    newTab: props.newTab || false,
    separator: props.separator || ' ',
  }),
  {
    openShareDialogOnClick: false,
    onClick: (_, link: string, newTab?: boolean) => {
      window.open(link, newTab ? '_blank' : '_self');
    },
  },
);

export default EmailShareButton;
