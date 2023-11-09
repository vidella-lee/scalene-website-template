import React from "react";
// import styles from "./SplitHero.module.scss"


const MainContent = ({ heading, subheading, paragraph1, buttonLabel, btnHref }) => {
    return (
        <div
            className="d-flex flex-column w-100 w-xl-90 w-xxl-70 vh-100 justify-content-center p-2"
            data-aos="fade-down"
            data-aos-delay="500"
        >
            <h1
                style={{ display: `${heading ? "inline" : "none"}` }}
                className="ms-3 ms-md-5 display-1 fw-bold">
                <b>{heading}</b>
            </h1>
            <h2
                style={{ display: `${subheading ? "inline" : "none"}` }}
                className={` ms-3 ms-md-5`}>
                {subheading}
            </h2>
            <p
                style={{ display: `${paragraph1 ? "block" : "none"}` }}
                className={` ms-3 ms-md-5`}
            >
                {paragraph1}
            </p>
            <a
                style={{ display: `${buttonLabel ? "inline" : "none"}` }}
                role="button"
                //type="button"
                className="w-xl-30 p-3 btn btn-info btn-lg mt-4 mb-4 ms-md-5 shadow"
                href={btnHref}
            >
                {buttonLabel}
            </a>
        </div>

    )
}

const SubContent = ({ logo, title, titleColor, paragraph2 }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center h-100">

            <div
                style={{ display: `${logo ? "inline" : "none"}` }}
                className="mb-4 mt-3 me-2 d-none d-sm-inline"
                data-aos="fade-down" data-aos-delay="300"
            >
                <img className="w-100" src={logo.src} alt={logo.alt} />
            </div>
            <div
                className={`text-center w-60 pe-2 pe-sm-0 ${titleColor ? titleColor : ""}`}
                style={{ display: `${title ? "inline" : "none"}` }}
            >
                <h1 className=" me-md-4 " data-aos="fade-down" data-aos-delay="500">{title}</h1>

            </div>
            <div
                data-aos="fade-down"
                data-aos-delay="300"
            >
                <p
                    style={{ display: `${paragraph2 ? "block" : "none"}` }}
                    className={`ms-3 ms-md-5 display-4 display-heading-xl`}
                >
                    {paragraph2}
                </p>
            </div>
        </div>
    )

}

const SplitHero = ({
    title,
    titleColor,
    heading,
    subheading,
    paragraph1,
    paragraph2,
    logo,
    buttonLabel,
    btnHref,
    leftBgImg = { src: "none" },
    leftBgColor,
    leftTextColor,
    rightBgImg = { src: "none" },
    rightBgColor,
    rightTextColor,
    reverse,
    reverseContent
}) => {
    return (
        <div className={`position-relative d-flex  ${reverse ? "flex-column-reverse flex-lg-row-reverse" : "flex-column flex-lg-row"} justify-content-between min-vh-100 vh-lg-100 w-100`}>
            <div
                className={`${leftBgColor ? leftBgColor : "bg-dark"} ${leftTextColor ? leftTextColor : "text-white"} z-0 position-relative d-flex flex-column w-100 h-100 justify-content-center align-items-center shadow-lg`}
                style={{
                    backgroundImage: `url(${leftBgImg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backdropFilter: "blur(5px)",
                    //backgroundAttachment: "fixed",
                    backgroundPosition: "center"
                }}
                title={leftBgImg.title}
            >
                {!reverseContent ?
                    <MainContent
                        heading={heading}
                        subheading={subheading}
                        paragraph1={paragraph1}
                        buttonLabel={buttonLabel}
                        btnHref={btnHref}
                    /> :
                    <SubContent
                        logo={logo}
                        title={title}
                        titleColor={titleColor}
                        paragraph2={paragraph2}
                    />
                }
            </div>
            <div
                className={`${rightBgColor ? rightBgColor : "bg-primary"} ${rightTextColor ? rightTextColor : "text-info"} z-1 position-relative d-flex flex-column w-100 w-xl-50 h-100 justify-content-center align-items-center shadow-lg p-3`}
                style={{
                    backgroundImage: `url(${rightBgImg.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center"
                }}
            >
                {!reverseContent ?
                    <SubContent
                        logo={logo}
                        title={title}
                        titleColor={titleColor}
                        paragraph2={paragraph2}
                    /> :
                    <MainContent
                        heading={heading}
                        subheading={subheading}
                        paragraph1={paragraph1}
                        buttonLabel={buttonLabel}
                    />
                }
            </div>

        </div>

    );
}
export default SplitHero;