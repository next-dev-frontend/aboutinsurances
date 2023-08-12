import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  PinterestShareButton,
  PinterestIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share'

function SocialShare() {

  const urlShare = "https://aboutinsurances.vercel.app"
  const titleShare = "Insurancе information and tips wеbsitе."
  const descriptionShare = "Bеforе contracting any insurancе sеrvicе, visit our wеbsitе and clarify all your doubts on thе subjеct. Wе try to bring you thе most frеquеntly mеntionеd quеstions and thе answеrs to your quеstions about insurancе and insurancе agеnciеs. Wе arе vеry happy to bе ablе to hеlp pеoplе answеr quеstions and lеarn morе about how thе onlinе insurancе markеt works."
  const hashtagShare = "#insurances #insurance #questionsaboutinsurances"


  return (
    <div id="shareButtons" className="container mx-auto text-center w-full max-w-5xl py-8 border-2 border-color2 border-dashed">

      <div className="flex flex-wrap text-color1">
        <div className="w-full text-md md:text-xl lg:text-2xl">
          <div className="mx-auto align-middle p-4">
            <p className="text-xl font-semibold mb-4 animate-pulse">❤️ If you liked this post, share it with someone you know. Thanks!😘😘😘</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-no-wrap justify-center">
        <div className="px-2">
          <FacebookShareButton
            url={urlShare}
            quote={titleShare}
            hashtag={hashtagShare}
            blankTarget='true'
          >
            <FacebookIcon size={44} />
          </FacebookShareButton>
        </div>

        <div className="px-2">
          <TwitterShareButton
            url={urlShare}
            title={titleShare}
            hashtag={hashtagShare}
            blankTarget='true'
          >
            <TwitterIcon size={44} />
          </TwitterShareButton>
        </div>

        <div className="px-2">
          <PinterestShareButton
            url={urlShare}
            media={titleShare}
            description={descriptionShare}
            blankTarget='true'
          >
            <PinterestIcon size={44} />
          </PinterestShareButton>
        </div>

        <div className="px-2">
          <WhatsappShareButton
            url={urlShare}
            title={titleShare}
            separator=":: "
            blankTarget='true'
          >
            <WhatsappIcon size={44} />
          </WhatsappShareButton>
        </div>

        <div className="px-2">
          <TelegramShareButton
            url={urlShare}
            title={titleShare}
            blankTarget='true'
          >
            <TelegramIcon size={44} />
          </TelegramShareButton>
        </div>

        <div className="px-2">
          <LinkedinShareButton
            url={urlShare}
            title={titleShare}
            blankTarget='true'
          >
            <LinkedinIcon size={44} />
          </LinkedinShareButton>
        </div>

      </div>

    </div>
  );
}
export default SocialShare;