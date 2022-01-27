import "./styles.css";
import { css } from "@emotion/css";
import { data } from "./data";

export default function App() {
  const isMobile = window.innerWidth <= 786;
  return (
    <div
      className={css`
        width: calc(100vw- 42px);
        margin-left: auto;
        margin-right: auto;
        background-color: white;
        /* height: 100vh; */
        margin-top: 4ch;
        display: flex;
        flex-direction: column;
        gap: 1ch;
        padding: 24px 18px;
        border: 8px;
        p {
          font-size: 12px;
        }
        #circle {
          width: 64px;
          height: 64px;
          border-radius: 100%;
          background-color: #e5e5ea;
        }

        .border {
          border: 1px solid #d1d1d6;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }

        #image {
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          background-color: #f8f8fa;
          height: 172px;
          display: flex;
          color: #d1d1d6;
          justify-content: center;
          align-items: center;
          font-size: 20px;
        }

        .post {
          display: flex;
          gap: 1ch;
          flex-direction: ${isMobile ? "column" : "row"};
          margin-top: 2ch;
          margin-bottom: 2ch;
        }
        .img {
          min-width: 104px;
          height: ${isMobile ? "82px" : "72px"};
          background-color: #e5e5e5;
        }
        .title {
          font-size: 12px;
        }
        .date {
          display: flex;
          flex-direction: ${isMobile ? "row" : "column"};
        }
        .content {
          font-size: 10px;
        }
        .posts {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1ch;
        }
        .Endcontent {
          display: center;
          align-items: center;
          font-size: 60%;
          justify-content: center;
          text-align: center;
        }
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: ${isMobile ? "flex-start" : "center"};
          flex-direction: ${isMobile ? "column" : "row"};

          & > :nth-child(2) {
            margin-left: ${isMobile ? "0" : "auto"};
            margin-right: auto;
            font-size: 20px;
          }
        `}
      >
        <div id="circle"> </div>
        <div> Your Weekly Updates</div>
      </div>
      <div id="border"> </div>
      <div id="image">Banner Image</div>
      <div
        className={css`
          padding: ${isMobile ? "0px 46px" : "0px 0px"};
        `}
      >
        <div>
          <p>Hi there!</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
            ornare sagittis etiam morbi diam, feugiat cursus adipiscing.
            Pellentesque orci, tellus arcu turpis et facilisis aliquet integer.
            Justo aenean sit at sollicitudin. Donec enim, a aliquam aliquam
            dolor in quam maecenas.
          </p>
          <p>
            Neque consequat fermentum aenean arcu.Quam id scelerisque phasellus
            orci. Quam aliquet quam dolor faucibus amet sed malesuada.
            Suspendisse elit et id viverra ac imperdiet commodo in amet.
            Dignissim elementum in ornare suscipit pulvinar. Non, amet, in
            tellus dignissim turpis dolor ultrices pretium auctor. Massa sit
            tempor convallis tortor sed. In nec ut quis euismod eget suscipit.
            Rhoncus blandit tellus urna, mattis egestas massa odio nascetur
            congue. Massa nibh ut ut tellus sit fringilla ultrices suspendisse
            luctus.
          </p>
          <p>
            <div> Best regards, </div> <div> Name/Team ClientAppName</div>
          </p>
        </div>
        <div className="posts">
          {data.map((e, i) => (
            <div>
              <div className="post">
                <div className="date">
                  <div
                    className={css`
                      font-size: 10.0281px;
                      line-height: 12px;
                    `}
                  >
                    OCT
                  </div>
                  <div
                    className={css`
                      font-size: 18px;
                      line-height: 18px;
                    `}
                  >
                    04
                  </div>
                </div>
                {!isMobile && i % 2 === 0 ? (
                  <>
                    <div className="main">
                      <div className="title">{e.title} </div>
                      <div className="content">{e.content} </div>
                      <div className="content">
                        <a href="www.google.com">Get more info</a>
                      </div>
                    </div>
                    <div className="img"></div>
                  </>
                ) : (
                  <>
                    <div className="img"></div>
                    <div className="main">
                      <div className="title">{e.title} </div>
                      <div className="content">{e.content} </div>
                      <div className="content">
                        <a href="www.google.com">Get more info</a>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="border"> </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={css`
          font-style: normal;
          font-weight: 600;
          font-size: 60%;
          line-height: 14px;
          text-align: center;
        `}
      >
        Enjoying using Client'sAppName? Share the app!{" "}
      </div>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <img alt="img" src="/asd.svg" />
      </div>
      <div className="Endcontent">
        {" "}
        For questions, you can reach out to us at
        <a href="www.gmail.com"> client@contact.com</a>
      </div>
      <div className="Endcontent">
        This email was sent to you because you downloaded the app
        Client’sAppName and were added to the mailing list.
        <br></br> If you would like to stop receiving such emails, you could
        <a href="www.google.com"> Unsubscribe.</a>
      </div>
      <div
        className={css`
          display: center;
          justify-content: center;
          align-items: center;
          font-size: 65%;
          font-weight: 600;
          padding-top: 3%;
        `}
      >
        Powered by NoCodeApp.Center
      </div>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <img alt="img" src="/Logo.svg" />
      </div>
    </div>
  );
}
