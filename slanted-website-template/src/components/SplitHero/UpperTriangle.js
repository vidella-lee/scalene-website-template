// import triangle from "./upper-triangle.svg"
// border border-3 border-danger
//border border-3 border-warning
const UpperTriangle = ({ fill, image, title, logo }) => {
    return (
        <div
            className={`z-3 position-absolute d-flex flex-column flex-fill align-self-start align-items-end w-100 h-100  p-5`}
        //style={{ backgroundImage: `url(${triangle})` }}
        //style={{zIndex: "100"}}
        >

            <div className="z-1 position-relative d-flex">
                <svg width="1185" height="807" viewBox="0 0 1185 807" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g filter="url(#shadow)">
                        <path d="M1111.01 708.775C1110.9 716.615 1102.22 721.283 1095.62 717.055L4.76292 18.4212C-3.64915 13.0338 0.166733 0.000220058 10.1561 0.000219185L1110.88 0.000122957C1116.45 0.000122469 1120.95 4.56377 1120.87 10.1413L1111.01 708.775Z" fill={fill ? fill : "#fff"} />
                    </g>
                    <defs>

                        {/* <filter id="shadow" x="0.345215" y="0.00012207" width="1184.32" height="806.498" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="25" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_72_4" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_72_4" result="shape" />
                        </filter> */}

                    </defs>
                </svg>

                {/* <svg width="1185" height="807" viewBox="0 0 1185 807" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_72_4)">
                        <path d="M1125.39 727.812C1125.12 747.411 1103.42 759.083 1086.91 748.512L61.9073 92.0528C40.8771 78.5841 50.4167 46.0002 75.3902 46.0002L1109.66 46.0001C1123.61 46.0001 1134.86 57.4092 1134.66 71.353L1125.39 727.812Z" fill="#D9D9D9" />
                    </g>
                    <defs>
                        <filter id="filter0_d_72_4" x="0.345215" y="0.00012207" width="1184.32" height="806.498" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="25" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_72_4" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_72_4" result="shape" />
                        </filter>
                    </defs>
                </svg> */}

            </div>
            <div className="z-2 position-absolute d-flex flex-column fs-1 text-white p-5  m-5">
                <div className="d-flex w-25 align-self-center">
                    <img className="w-100" src={logo.src} alt={logo.alt} />
                    {/* {logo} */}
                </div>
                <div className="p-5 display-2 ">{title}</div>
            </div>
            {/* {image ? <image href={image} height="200" width="200" /> : null} */}


        </div>
    )
}

export default UpperTriangle;
