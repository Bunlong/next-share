import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

type Options = {
  /** Your app's unique identifier. */
  appId: string;
  /** The URL to redirect to after a person clicks a button on the dialog.
   * Required when using URL redirection. */
  redirectUri?: string;
  /** A user ID of a recipient. Once the dialog comes up, the sender can
   * specify additional people as recipients. */
  to?: string;
};

function facebookMessengerLink(
  url: string,
  { appId, redirectUri, to }: Options,
) {
  return (
    'https://www.facebook.com/dialog/send' +
    transformObjectToParams({
      link: url,
      // eslint-disable-next-line @typescript-eslint/camelcase
      redirect_uri: redirectUri || url,
      // eslint-disable-next-line @typescript-eslint/camelcase
      app_id: appId,
      to,
    })
  );
}

const FacebookMessengerShareButton = createShareButton<Options>(
  'facebookmessenger',
  facebookMessengerLink,
  (props) => ({
    appId: props.appId,
    redirectUri: props.redirectUri,
    to: props.to,
  }),
  {
    windowWidth: 1000,
    windowHeight: 820,
  },
);

export default FacebookMessengerShareButton;
