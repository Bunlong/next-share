import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  PinterestShareButton,
  PinterestIcon,
  VKShareButton,
  VKIcon,
} from "next-share";

export default function SocialShareBtn({
  url,
  title,
  hashtags = [],
  networks = ["facebook", "twitter", "whatsapp"],
  classNames,
  image,
}) {
  const networksList = {
    facebook: (
      <FacebookShareButton
        url={url}
        quote={title}
        hashtag={hashtags.join(" ")}
        className={classNames}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    ),
    twitter: (
      <TwitterShareButton url={url} title={title} hashtags={hashtags}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    ),
    linkedin: (
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    ),
    whatsapp: (
      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    ),
    telegram: (
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    ),
    pinterest: (
      <PinterestShareButton url={url} media={image} description={title}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
    ),
    vk: (
      <VKShareButton url={url} image={image}>
        <VKIcon size={32} round />
      </VKShareButton>
    ),
  };
  return (
    <>
      {networks.map((m) => (
        <div key={m}>{networksList[m]}</div>
      ))}
    </>
  );
}
