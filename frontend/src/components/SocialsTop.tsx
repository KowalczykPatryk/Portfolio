
interface SocialInfo
{
    imagePathName: string,
    socialPlatformName: string,
    url: string
}

interface SocialsProps
{
    socialsInfo: SocialInfo[]
}

function SocialsTop({socialsInfo}: SocialsProps)
{
    const socialImages = socialsInfo.map(socialInfo => 
        <div key={socialInfo.imagePathName}>
            <a href={socialInfo.url} target="_blank" rel="noreferrer"><img className="h-6" src={socialInfo.imagePathName} alt={socialInfo.socialPlatformName} /></a>
        </div>
    );

    return (
        <>
            <div className="gap-2 p-4 bg-white flex flex-row border-double border-b-5 divide-x-3 divide-double">
                {socialImages}
            </div>
        </>
    );
}

export default SocialsTop;