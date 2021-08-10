import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

// function ncard(val)
// {
//     return(
//         <Card
//            imgsrc = {val.imgsrc}
//            title={val.title}
//            sname={val.sname}
//            link={val.link}
//            />

//     )

// }

ReactDom.render(
  <>
    <h1 className="heading_style"> List of top 5 Netflix Series </h1>
    {/* <Card imgsrc={var.imgsrc}
                   title={var.title}
                  sname={var.sname}
                   link="https://www.netflix.com/in/title/80192098"
                   />
                   <Card imgsrc={Sdata[1].imgsrc}
                    title={Sdata[1].title}
                   sname={Sdata[1].sname}
                   link="https://www.netflix.com/in/title/80244781"
                   />
                   <Card imgsrc={Sdata[2].imgsrc}
                    title={Sdata[2].title}
                   sname={Sdata[2].sname}
                   link="https://www.netflix.com/in/title/80211991"
                   />
                   <Card imgsrc={Sdata[3].imgsrc}
                    title={Sdata[3].title}
                  sname={Sdata[3].sname}
                   link="https://www.netflix.com/in/title/80179394#:~:text=2017%20%7C%20TV%2D14%20%7C%203,Show%2C%20Rafael%20De%20La%20Fuente"
                   />
                   <Card imgsrc={Sdata[4].imgsrc}
                    title={Sdata[4].title}
                    sname={Sdata[4].sname}
                   link="https://www.netflix.com/in/title/80154610"
                   /> */}
    {/* {Sdata.map(ncard)} */}
    {Sdata.map((val) => {
      return (
        <Card
        key={val.key}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
