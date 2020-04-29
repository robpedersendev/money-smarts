import React from "react";
import Link from "next/link";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton
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
    hashtags: ["WhatShouldYourPreTaxIncomeBe"]
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
    hashtags: "#WhatShouldYourPreTaxIncomeBe"
  },
  {
    href: "https://github.com/robpedersendev/life-calculator",
    label: "GitHub",
    className: "github",
    alt: "github logo",
    img: "/assets/github.png",
    url: "",
    datavia: "",
    hashtags: ""
  }
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}-${link.className}-${link.alt}-${link.img}-${link.datasize}-${link.datatext}-${link.dataurl}-${link.datavia}-${link.datahashtags}-${link.datashowcount}`
}));

const Sharing = () => (
  <nav className="width100 flex-column-center3-wrap margin0a">
    <div className="width80 sharingBox  flex-column-spaceAround-center2-wrap b10sw bs1510">
      <h2 className="sharingTitle centered">Social media and various links</h2>
      <ul className="width60 centered">
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
          <a target="_blank" href={links[2].url} className={links[2].className}>
            <p>{links[2].label}</p>
            <img className="icon" src={links[2].img} alt={links[2].alt} />
          </a>
        </li>
      </ul>
    </div>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      :global(h2) {
        display: inline;
        font-size: 1.5em;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
      }
      .width100 {
        width: 100%;
      }
      .flex-column-center3-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
      }
      .margin0a {
        margin: 0 auto;
      }
      .sharingBox {
        background-color: lightgrey;
        color: white;
        opacity: 0.6;
      }
      .sharingBox:hover {
        opacity: 1;
        background-color: black;
      }
      .width80 {
        width: 80%;
      }
      .flex-column-spaceAround-center2-wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
      }
      .b10sw {
        border: 7.5px solid white;
        border-radius: 70px;
      }
      .bs1510 {
        box-shadow: 1px 1px 10px white;
      }
      .width60 {
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
      }
      a,
      a:visited,
      a:active {
        color: white;
        text-decoration: none;
        font-size: 10px;
        font-weight: bold;
        text-shadow: 2px 2px 10px black;
      }
      a:hover {
        color: black;
        text-decoration: underline;
        text-decoration-color: white;
        text-shadow: 2px 2px 10px white;
        font-weight: bolder;
        font-size: 10px;
      }
      // a {
      //   display: flex;
      //   align-items: center;
      //   align-content: center;
      //   flex-direction: column;
      //   justify-content: center;
      // }

      .icon {
        width: 64px;
        height: 64px;
      }
    `}</style>
  </nav>
);

export default Sharing;
