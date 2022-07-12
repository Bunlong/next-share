import jsonp from 'jsonp';

import objectToGetParams from '../../utils';
import createShareCount from '../../hocs/createShareCount';

function getHatenaShareCount(
  shareUrl: string,
  callback: (shareCount?: number) => void,
) {
  const url = 'https://bookmark.hatenaapis.com/count/entry';

  jsonp(
    url +
      objectToGetParams({
        url: shareUrl,
      }),
    (err, data) => {
      callback(!err && data ? data : undefined);
    },
  );
}

export default createShareCount(getHatenaShareCount);
