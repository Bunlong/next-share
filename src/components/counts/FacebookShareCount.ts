import jsonp from 'jsonp';

import createShareCount from '../../hocs/createShareCount';

function getFacebookShareCount(
  shareUrl: string,
  callback: (shareCount?: number) => void,
  appId?: string,
  appSecret?: string,
) {
  const endpoint = `https://graph.facebook.com/?id=${shareUrl}&fields=engagement&access_token=${appId}|${appSecret}`;

  jsonp(endpoint, (err: any, data: any) => {
    callback(
      !err && data && data.engagement ? data.engagement.share_count : undefined,
    );
  });
}

export default createShareCount(getFacebookShareCount);
