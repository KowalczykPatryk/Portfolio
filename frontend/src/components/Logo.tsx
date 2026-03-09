
function Logo()
{
    return (
        <svg id="website-logo" width="100%" height="100%" viewBox="0 0 1000 1000">
            {/* screen */}
            <polygon points="284,418 711,418 1000,1000 0,1000" stroke="none" fill="yellow" strokeWidth="3"/>
            <polygon points="287,54 709,51 726,155 267,154" stroke="black" fill="none" strokeWidth="3"/>
            <line x1="230" y1="158" x2="765" y2="154" stroke="black" strokeWidth="3"/>
            <line x1="230" y1="158" x2="218" y2="379" stroke="black" strokeWidth="3"/>
            <line x1="765" y1="154" x2="776" y2="377" stroke="black" strokeWidth="3"/>
            <path d="M 218 379 Q 493 395 776 377" stroke="black" fill="none" strokeWidth="3"/>
            <line x1="218" y1="379" x2="249" y2="585" stroke="black" strokeWidth="3"/>
            <line x1="776" y1="377" x2="744" y2="587" stroke="black" strokeWidth="3"/>
            <path d="M 249 585 Q 492 601 744 587" stroke="black" fill="none" strokeWidth="3"/>
            <line x1="273" y1="417" x2="284" y2="418" stroke="black" strokeWidth="3"/>
            <line x1="273" y1="417" x2="290" y2="542" stroke="black" strokeWidth="3"/>
            <line x1="284" y1="418" x2="303" y2="519" stroke="black" strokeWidth="3"/>
            <path d="M 284 418 Q 503 425 711 418" stroke="black" fill="none" strokeWidth="3"/>
            <line x1="711" y1="418" x2="724" y2="421" stroke="black" strokeWidth="3"/>
            <line x1="711" y1="418" x2="694" y2="518" stroke="black" strokeWidth="3"/>
            <line x1="724" y1="421" x2="705" y2="542" stroke="black" strokeWidth="3"/>
            <path d="M 303 519 Q 503 528 694 518" stroke="black" fill="none" strokeWidth="3"/>
            <path d="M 290 542 Q 499 553 705 542" stroke="black" fill="none" strokeWidth="3"/>

            {/* keyboard */}
            <rect width="643" height="246" x="175" y="676" rx="20" ry="20" stroke="black" fill="none" strokeWidth="2"/>
            <rect width="606" height="205" x="194" y="696" rx="20" ry="20" stroke="black" fill="none" strokeWidth="2"/>
            <rect width="126" height="160" x="650" y="720" rx="20" ry="20" stroke="black" fill="none" strokeWidth="2"/>

            {/* row 0 */}
            <circle cx="220" cy="730" r="15" stroke="black" fill="none" strokeWidth="2">
                <animate
                id="key1"
                attributeName="fill"
                values="white; none"
                dur="0.5s"
                begin="0s; key8.end"/>
            </circle>
            <circle cx="300" cy="730" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="260" cy="730" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="340" cy="730" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="380" cy="730" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="420" cy="730" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="460" cy="730" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="500" cy="730" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="540" cy="730" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="580" cy="730" r="15" stroke="black" fill="none" strokeWidth="2">
                <animate
                id="key7"
                attributeName="fill"
                values="white; none"
                dur="0.5s"
                begin="key6.end"/>
            </circle>
            <circle cx="620" cy="730" r="15" stroke="black" fill="none" strokeWidth="2"/>

            {/* row 1 */}
            <circle cx="240" cy="770" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="280" cy="770" r="15" stroke="black" fill="none" strokeWidth="2" >
                <animate
                id="key3"
                attributeName="fill"
                values="white; none"
                dur="0.5s"
                begin="key2.end"/>
            </circle>
            <circle cx="320" cy="770" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="360" cy="770" r="15" stroke="black" fill="none" strokeWidth="2">
                <animate
                id="key2"
                attributeName="fill"
                values="white; none"
                dur="0.5s"
                begin="key1.end"/>
            </circle>
            <circle cx="400" cy="770" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="440" cy="770" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="480" cy="770" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="520" cy="770" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="560" cy="770" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="600" cy="770" r="15" stroke="black" fill="none" strokeWidth="2"/>

            {/* row 2 */}
            <circle cx="220" cy="810" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="260" cy="810" r="15" stroke="black" fill="none" strokeWidth="2">
                <animate
                id="key6"
                attributeName="fill"
                values="white; none"
                dur="0.5s"
                begin="key5.end"/>
            </circle>
            <circle cx="300" cy="810" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="340" cy="810" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="380" cy="810" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="420" cy="810" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="460" cy="810" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="500" cy="810" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="540" cy="810" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="580" cy="810" r="15" stroke="black" fill="none" strokeWidth="2">
                <animate
                id="key5"
                attributeName="fill"
                values="white; none"
                dur="0.5s"
                begin="key4.end"/>
            </circle>
            <circle cx="620" cy="810" r="15" stroke="black" fill="none" strokeWidth="2"/>

            {/* row 3 */}
            <circle cx="240" cy="850" r="15" stroke="black" fill="none" strokeWidth="2">
                <animate
                id="key8"
                attributeName="fill"
                values="white; none"
                dur="0.5s"
                begin="key7.end"/>
            </circle>
            <circle cx="280" cy="850" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="320" cy="850" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="360" cy="850" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="400" cy="850" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="440" cy="850" r="15" stroke="black" fill="none" strokeWidth="2">
                <animate
                id="key4"
                attributeName="fill"
                values="white; none"
                dur="0.5s"
                begin="key3.end"/>
            </circle>
            <circle cx="480" cy="850" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="520" cy="850" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="560" cy="850" r="15" stroke="black" fill="none" strokeWidth="2"/>
            <circle cx="600" cy="850" r="15" stroke="black" fill="none" strokeWidth="2"/>
        </svg>
    )
}

export default Logo;