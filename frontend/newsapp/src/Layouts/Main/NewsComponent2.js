import { element } from "prop-types";
import React, { Component } from "react";
import NewsItem, { NewsItem2 } from "./NewsItem2";

export class NewsComponent2 extends Component {
  // articles = [
  //   {
  //     title:
  //       "Google Doodle is celebrating jollof rice. Here are some Star stories ...",
  //     url: "https://www.thestar.com/news/gta/2022/11/04/google-doodle-is-celebrating-jollof-rice-here-are-some-star-stories-on-the-beloved-west-african-dish.html",
  //     image:
  //       "https://t0.gstatic.com/images?q=tbn:ANd9GcQLAH4wG2K9qFpjRBxl827IatnKkO8uQpYHG__OleJCQWodsPBSJbjU2gUTFjXgM8RDTcbBr7zq",
  //     snippet:
  //       "Today&#39;s Doodle marks West African rice farmers&#39; yearly crop harvest and the tradition of kitchens across the region making fresh jollof rice.",
  //     source: "Toronto Star",
  //     lastUpdated: "3h ago",
  //   },
  //   {
  //     title:
  //       "Megan Thee Stallion, Ye, more respond to Drake&#39;s disses on &#39;Her ...",
  //     url: "https://www.washingtonpost.com/arts-entertainment/2022/11/04/drake-album-megan-thee-stallion/",
  //     image:
  //       "https://t0.gstatic.com/images?q=tbn:ANd9GcTuGcr2o-tbkie6FMjMeBa4VnCbPoE8WG7DEmRXWcrIruz6TyMpRd1cZAr9jxvBn0gAGjjBeSag",
  //     snippet:
  //       "Drake&#39;s new album with 21 Savage alludes to Megan Thee Stallion&#39;s shooting allegations, as well as existing beefs with others such as Ye and D.R.A.M..",
  //     source: "The Washington Post",
  //     lastUpdated: "3h ago",
  //   },
  //   {
  //     title: "Flames multi-day 50/50 draw will help support Canadian veterans",
  //     url: "https://calgary.ctvnews.ca/flames-multi-day-50-50-draw-will-help-support-canadian-veterans-1.6139182",
  //     image:
  //       "https://t1.gstatic.com/images?q=tbn:ANd9GcQi4jnLU-scuNvux9hoHi7UNmoETlSlcIxYmjrh-WgxvKoC1T6FQMAu74fjwxqZPjrpZzNASwJ1",
  //     snippet:
  //       "Proceeds from a two-day Calgary Flames 50/50 draw will be used to support Canadian veterans and their families in honour of Remembrance Day.",
  //     source: "CTV Toronto",
  //     lastUpdated: "7h ago",
  //   },
  //   {
  //     title:
  //       "Millions of Canadians will get GST credits starting Friday. What to ...",
  //     url: "https://globalnews.ca/news/9251412/gst-payments-recession/",
  //     image:
  //       "https://t0.gstatic.com/images?q=tbn:ANd9GcSEF2xdwtaBKGNLmxZlf0zImwQl-zx7sr1djkjbxASAoxj-5HKpJjbKhkCFc2hfpBUBayyTWc82",
  //     snippet:
  //       "The bill, sponsored by Chrystia Freeland, is aimed to help low and modest income Canadians cope with inflation as fears of a recession loom.",
  //     source: "Globalnews.ca",
  //     lastUpdated: "10h ago",
  //   },
  //   {
  //     title:
  //       "Bruins sign renounced Coyotes draft pick Mitchell Miller to entry ...",
  //     url: "https://www.sportsnet.ca/nhl/article/bruins-sign-renounced-coyotes-draft-pick-mitchell-miller-to-entry-level-deal/",
  //     image:
  //       "https://t3.gstatic.com/images?q=tbn:ANd9GcQlS0aqa9qiTaslh8BsmdX2vSB0CT_fjWdrQ7s2-SBsYNCYa1C_dMknl_yxx2t-BhB67F8N3lzb",
  //     snippet:
  //       "The Boston Bruins have signed Mitchell Miller, the renounced Arizona Coyotes draft pick who assaulted, bullied and abused a Black classmate with a learning&nbsp;...",
  //     source: "Sportsnet.ca",
  //     lastUpdated: "3h ago",
  //   },
  //   {
  //     title: "Z-Library eBook site domains seized by U.S. Dept of Justice",
  //     url: "https://www.bleepingcomputer.com/news/technology/z-library-ebook-site-domains-seized-by-us-dept-of-justice/",
  //     image:
  //       "https://t3.gstatic.com/images?q=tbn:ANd9GcR_lMAN1Psu2zXF-QLzlllv36iKmjJ5BNsdCd4eZFJWmzRPhzBYwDpcvfKNrtG8vaUKYSIMxV-3",
  //     snippet:
  //       "Internet domains for the popular Z-Library online eBook repository were seized early this morning by the U.S. Department of Justice, preventing easy access&nbsp;...",
  //     source: "BleepingComputer",
  //     lastUpdated: "5h ago",
  //   },
  //   {
  //     title: "Enola Holmes 2 Thrives on Millie Bobby Brown&#39;s Charm",
  //     url: "https://www.vulture.com/article/enola-holmes-2-review-netflix-millie-bobby-brown-mystery.html",
  //     image:
  //       "https://t3.gstatic.com/images?q=tbn:ANd9GcQIEV78k2FA-hfFWoQUBASer5nNV8bOIjHUx21XWg0HTHEMIlHIEDiczaL6nlmTUeWXOB-5PDDk",
  //     snippet:
  //       "Movie Review: In Enola Holmes 2, Millie Bobby Brown reprises her charming role as Sherlock Holmes&#39;s teenage sister. Henry Cavill plays Holmes,&nbsp;...",
  //     source: "Vulture",
  //     lastUpdated: "4h ago",
  //   },
  //   {
  //     title:
  //       "Twitter temporarily closes offices as Elon Musk begins layoffs ...",
  //     url: "https://globalnews.ca/news/9252749/twitter-elon-musk-layoffs/",
  //     image:
  //       "https://t2.gstatic.com/images?q=tbn:ANd9GcQIQXjV3euHkxU0-iD0_Rp_0Fo05rKhZ5IiG8f4MlAr4pIDcyFaPuLaulpTTeKumDI37fht25YU",
  //     snippet:
  //       "Elon Musk, the world&#39;s richest person, is looking to cut around 3700 Twitter staff, or about half the workforce, as he seeks to slash costs and impose a&nbsp;...",
  //     source: "Globalnews.ca",
  //     lastUpdated: "7h ago",
  //   },
  //   {
  //     title:
  //       "Australia vs Afghanistan highlights, T20 World Cup 2022: Australia ...",
  //     url: "https://indianexpress.com/article/sports/cricket/aus-vs-afg-australia-vs-afghanistan-live-score-t20-world-cup-2022-8248671/",
  //     image:
  //       "https://t0.gstatic.com/images?q=tbn:ANd9GcTPx9JZKT0tGBZ0f2H8qlHhyZZVDhGX9K_Zs_40jn5cVxbPYvE8w-lHv6b-4gGRc-JXhrCy0EgS",
  //     snippet:
  //       "Australia vs Afghanistan Live Cricket Score, T20 WC 2022, 38th Match, Super 12 Group 1: Australia have beaten Afghanistan in a nailbiting contest by the&nbsp;...",
  //     source: "The Indian Express",
  //     lastUpdated: "11h ago",
  //   },
  //   {
  //     title: "Confidence is Contagious!",
  //     url: "https://www.businesswire.com/news/home/20221104005434/en/Confidence-is-Contagious%21",
  //     image:
  //       "https://t0.gstatic.com/images?q=tbn:ANd9GcQfPx8QiXpXLEq24JRS2nFj6nQRLDdKNs_ClFbJPsruhzeqd98BU8h50q0JoRYXseJkNVfNcU4f",
  //     snippet:
  //       "Global intimate apparel brand Knix embarked on its first-ever Confidence Tour that brought customers and brand ambassadors together for an unforgettab.",
  //     source: "Business Wire",
  //     lastUpdated: "8h ago",
  //   },
  //   {
  //     title: "Flames seeking answers for team skid, individual struggles",
  //     url: "https://calgarysun.com/sports/hockey/nhl/calgary-flames/flames-seeking-answers-for-team-skid-individual-struggles",
  //     image:
  //       "https://t1.gstatic.com/images?q=tbn:ANd9GcRZZhFG9RF7vnxd_18GXfmI9ZNODEcc8ylWjikFjAa8qghIfIRwJpxjtET19nOfSeHEQGzzL-vH",
  //     snippet:
  //       "Trying to explain an uninspired and, as a couple of his pals put it, “unacceptable” performance on home ice, Calgary Flames alternate captain Mikael&nbsp;...",
  //     source: "Calgary Sun",
  //     lastUpdated: "1h ago",
  //   },
  //   {
  //     title:
  //       "How the Cast of Manifest Stayed in Touch Between Cancelation and ...",
  //     url: "https://www.eonline.com/ca/news/1353271/how-the-cast-of-manifest-stayed-in-touch-between-cancelation-and-netflix-pick-up",
  //     image:
  //       "https://t0.gstatic.com/images?q=tbn:ANd9GcR7bcGAe23tTCJ50_C_pOU7TkmsvwTjKvEeGsPv9MQg7SZPg7cyo50D55DWRBmWj_oaf1uQV6Rr",
  //     snippet:
  //       "In an exclusive interview with E! News, the cast of Manifest—which was resurrected by Netflix after being canceled by NBC—revealed how they kept their bond&nbsp;...",
  //     source: "E! Online",
  //     lastUpdated: "8h ago",
  //   },
  //   {
  //     title: "Deals: Launch Day Discounts Hit New Apple TV 4K Models on ...",
  //     url: "https://www.macrumors.com/2022/11/04/deals-launch-day-apple-tv-4k/",
  //     image:
  //       "https://t1.gstatic.com/images?q=tbn:ANd9GcQauJDJ3EvGGV9TIgsK15BhdMdqyBu4TLo1hR2KFNrSnTYe4GF4TQlQnUhyPKH0xkGyN68NxAO9",
  //     snippet:
  //       "The new Apple TV 4K is now available to purchase today, and Amazon is still offering a small $4 discount on the streaming device, which it first...",
  //     source: "Mac Rumors",
  //     lastUpdated: "7h ago",
  //   },
  //   {
  //     title:
  //       "&#39;My Policeman&#39; Ending, Explained: Who Had Reported Patrick To ...",
  //     url: "https://dmtalkies.com/my-policeman-ending-explained-2022-film-michael-grandage-harry-styles/",
  //     image:
  //       "https://t1.gstatic.com/images?q=tbn:ANd9GcS8Q1cA4gmJiOACjOYHVvI06-1SnfzQX4W7iAZL_N-L-LvI_oIMHukBN5zyPAjXqDkEjmnQc2Bj",
  //     snippet:
  //       "Amazon Prime Video film, &quot;My Policeman&quot; explores the idea of forbidden romance during a time when being homosexual was a criminal offense.",
  //     source: "Digital Mafia Talkies",
  //     lastUpdated: "5h ago",
  //   },
  //   {
  //     title:
  //       "Shiv Sena leader Sudhir Suri dies after being shot at, accused ...",
  //     url: "https://lagatar24.com/shiv-sena-leader-sudhir-suri-dies-after-being-shot-at-accused-arrested/129633/",
  //     image:
  //       "https://t1.gstatic.com/images?q=tbn:ANd9GcR_vi_OT1ErsldIxDgSrOClFEz-uU0UW1CZaFUCM0wi-bxvklwcPCW7eAVBpaBDSKj3eJbrFfF6",
  //     snippet:
  //       "“Sudhir Suri was shot outside Gopal Mandir, Amritsar during some agitation. He sustained bullet injuries and was rushed to hospital and died. Accused arrest,&nbsp;...",
  //     source: "Lagatar English",
  //     lastUpdated: "10h ago",
  //   },
  //   {
  //     title: "Weird: The Al Yankovic Story movie review (2022) | Roger Ebert",
  //     url: "https://www.rogerebert.com/reviews/weird-the-al-yankovic-story-2022",
  //     image:
  //       "https://t2.gstatic.com/images?q=tbn:ANd9GcSpi8uvekn8RZIffSLWZHBlgIs093QcP-XznoPssMPl0l-3lofDRmZO5brh76njhDabB8FW0zX1",
  //     snippet:
  //       "“Weird Al” Yankovic stands at the precipice of greatness and next to some hot dog buns when he has another eureka moment. At a party packed with the real&nbsp;...",
  //     source: "Roger Ebert",
  //     lastUpdated: "8h ago",
  //   },
  //   {
  //     title: "Cole Caufield and Nick Suzuki earn Molson Cup for October",
  //     url: "https://www.nhl.com/canadiens/news/cole-caufield-and-nick-suzuki-earn-molson-cup-for-october/c-337203870",
  //     image:
  //       "https://t3.gstatic.com/images?q=tbn:ANd9GcRwwqaX5lXi9XHC7il_6z5sDoQmZElnLKwifaHSiIGjM0kx5YeGi2nGHFLyoY4V-HwlPSjU-h8f",
  //     snippet:
  //       "A ceremony honoring Caufield and Suzuki will be held ahead of Saturday night&#39;s game against the Golden Knights.",
  //     source: "NHL.com",
  //     lastUpdated: "9h ago",
  //   },
  //   {
  //     title: "Ye Returns To Twitter, Calls Out Canada&#39;s Harley Pasternak",
  //     url: "https://www.iheartradio.ca/news/ye-returns-to-twitter-calls-out-canada-s-harley-pasternak-1.18736508",
  //     image:
  //       "https://t3.gstatic.com/images?q=tbn:ANd9GcSE6XgYbTnGj8evhZorvHKxMCMb6ZGS29Ly_lHkQQoTF6bie7pWbYKLr5vcYhr2i5RNC8skQrly",
  //     snippet:
  //       "Ye returned to Twitter on Thursday and quickly called out Canadian personal trainer Harley Pasternak. The rapper formerly known as Kanye West shared a&nbsp;...",
  //     source: "AM800 (iHeartRadio)",
  //     lastUpdated: "11h ago",
  //   },
  //   {
  //     title: "Johnny Depp launches appeal of Amber Heard $2M counterclaim ...",
  //     url: "https://globalnews.ca/news/9253491/johnny-depp-amber-heard-appeal-2-million-defamation-verdict/",
  //     image:
  //       "https://t0.gstatic.com/images?q=tbn:ANd9GcTXoU0sOKVkJFgpDFx7m_B6POvxkNfSp9nZ6EwCxC4nd78sklpbIq5ynBHY29uQoeplPAz4Cc0Q",
  //     snippet:
  //       "Johnny Depp and his legal team filed an appeal of Amber Heard&#39;s US$2-million counterclaim win, alleging the verdict in favour of his ex-wife was &#39;erroneous.",
  //     source: "Globalnews.ca",
  //     lastUpdated: "3h ago",
  //   },
  //   {
  //     title:
  //       "Holger Rune Primed For &#39;The Big Top&#39; In Milan | ATP Tour | Tennis",
  //     url: "https://www.atptour.com/en/news/holger-rune-milan-2022-feature",
  //     image:
  //       "https://t2.gstatic.com/images?q=tbn:ANd9GcTQH-rmQToA9vqn7KrvuWReVAiuSzzUJ15OS2mULzA7B-q9FEFDzL-EQW7ba1YMREnQrfCz9OTM",
  //     snippet:
  //       "Holger Rune has had a busy 2022 season developing his game on court, but that hasn&#39;t stopped the Dane from also finding time to work on a slightly different&nbsp;...",
  //     source: "ATP Tour",
  //     lastUpdated: "2h ago",
  //   },
  // ];

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      DataisLoaded: false,
    };
    console.log("constructor is called");
  }

  componentDidMount() {
    fetch("http://localhost:8000/", { method: "POST" })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles: json,
          DataisLoaded: true,
        });
      });
    console.log("componentDidMount is called");
  }

  render() {
    return (
      <>
        <div className="container my-5">
          <h2>Top headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-4">
                  <NewsItem2
                    imgUrl={element.image}
                    title={element.title.slice(0, 50)}
                    description={element.snippet.slice(0, 115) + "..."}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default NewsComponent2;
