const LowerTriangle = ({ fill, image, heading, description }) => {
    return (
        <div
            className={`z-3 position-absolute d-flex flex-fill w-100 h-100`}
        //style={{ background: "#222222", backgroundImage: `url(${image})` }}
        >
            {/*
            <svg width="1761" height="879" viewBox="0 0 1761 879" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M559.72 0H25C11.1929 0 0 11.1929 0 25V854C0 867.807 11.1929 879 25 879H1735.5C1749.31 879 1760.5 867.807 1760.5 854V773.224C1760.5 764.676 1756.13 756.721 1748.92 752.132L573.142 3.90846C569.131 1.35583 564.475 0 559.72 0Z" fill="url(#pattern0)" />
                <defs>
                    <filter id="my-filter">
                        <feComponentTransfer>
                            <feFuncR type="linear" slope="0.3" />
                            <feFuncG type="linear" slope="0.3" />
                            <feFuncB type="linear" slope="0.3" />
                        </feComponentTransfer>
                    </filter>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_74_8" transform="matrix(0.000244141 0 0 0.000488976 0 -0.167696)" />
                    </pattern>
                    <image filter="url(#my-filter)" id="image0_74_8" width="4096" height="2731" xlinkHref={image}> </image>
                </defs>
            </svg> */}
            <svg width="1861" height="973" viewBox="0 0 1861 973" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g filter="url(#filter0_d_74_8)">
                    <path d="M589.72 46H55C41.1929 46 30 57.1929 30 71V900C30 913.807 41.1929 925 55 925H1765.5C1779.31 925 1790.5 913.807 1790.5 900V819.224C1790.5 810.676 1786.13 802.721 1778.92 798.132L603.142 49.9085C599.131 47.3558 594.475 46 589.72 46Z" fill="url(#pattern0)" shape-rendering="crispEdges" />
                </g>
                <defs>
                    <filter id="my-filter">
                        <feComponentTransfer>
                            <feFuncR type="linear" slope="0.35" />
                            <feFuncG type="linear" slope="0.35" />
                            <feFuncB type="linear" slope="0.35" />
                        </feComponentTransfer>
                    </filter>
                    <filter id="filter0_d_74_8" x="0" y="0" width="1860.5" height="979" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="20" dy="4" />
                        <feGaussianBlur stdDeviation="25" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow" result="shape" />
                    </filter>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_74_8" transform="matrix(0.000244141 0 0 0.000488976 0 -0.167696)" />
                    </pattern>
                    <image filter="url(#my-filter)" id="image0_74_8" width="4096" height="2731" xlinkHref={image}> </image>
                </defs>
            </svg>
            <div className="z-2 position-absolute d-flex flex-column  text-white p-5 m-5">
                <div className="p-5 fs-1">{heading}</div>
                <div className="p-5 fs-4 border border-danger">{description}</div>
            </div>
        </div >
    )
}

export default LowerTriangle;

