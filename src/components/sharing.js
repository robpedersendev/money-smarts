import React from "react";
import "./sharing.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
const links = [
  {
    href: "https://twitter.com/share?ref_src=twsrc%5Etfw",
    className: "twitter-share-button",
    label: "Share on",
    alt: "twitter logo",
    // img: "/assets/twitter.png",
    textbody:
      "I am so excited that I will soon know what my pre tax salary should be!",
    url: "https://life-calculator.now.sh/",
    datavia: "robpedersendev",
    hashtags: ["WhatShouldYourPreTaxIncomeBe"],
  },
  {
    href:
      "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flife-calculator.now.sh%2F&amp;src=sdkpreparse",
    label: "Share on",
    className: "facebook-share-button",
    alt: "facebook logo",
    // img: "/assets/facebook.png",
    textbody:
      "I am so excited that I will soon know what my pre tax salary should be!",
    url: "https://life-calculator.now.sh/",
    datavia: "@robpedersendev",
    hashtags: "#WhatShouldYourPreTaxIncomeBe",
  },
  {
    href: "https://github.com/robpedersendev/life-calculator",
    label: "GitHub",
    className: "github",
    alt: "github logo",
    img: "/assets/github.png",
    url: "",
    datavia: "",
    hashtags: "",
  },
].map((link) => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}-${link.className}-${link.alt}-${link.img}-${link.datasize}-${link.datatext}-${link.dataurl}-${link.datavia}-${link.datahashtags}-${link.datashowcount}`,
}));

const Sharing = () => (
  <nav className="width100 flex-column-center3-wrap margin0a">
    <div className="width80 sharingBox  flex-column-spaceAround-center2-wrap b10sw bs1510">
      <h2 className="sharingTitle ">Social media and various links</h2>
      <ul className="width60">
        <li className="shareBtn">
          <p>{links[1].label}</p>
          <FacebookShareButton
            url={links[1].url}
            quote={
              links[1].textbody +
              " " +
              links[1].hashtags +
              " Thanks @robpedersendev"
            }
            hashtag={links[1].hashtags}
            // className={links[1].className}
          >
            <FacebookIcon size={64} round />
          </FacebookShareButton>
        </li>
        <li className="shareBtn">
          <p>{links[0].label}</p>
          <TwitterShareButton
            title={"Check out Life Calculator at"}
            url={links[1].url}
            via={links[0].datavia}
            hashtags={links[0].hashtags}
            // className={links[0].className}
          >
            <TwitterIcon size={64} round />
          </TwitterShareButton>
        </li>
        <li className="shareBtn">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={links[2].url}
            className={links[2].className}
          >
            <p className="githubP">{links[2].label}</p>
            <img className="icon" src={links[2].img} alt={links[2].alt} />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Sharing;
