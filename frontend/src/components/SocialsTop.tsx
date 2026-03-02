
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
            <a href={socialInfo.url}><img className="h-8" src={socialInfo.imagePathName} alt={socialInfo.socialPlatformName} /></a>
        </div>
    );

    return (
        <>
            <div className="gap-2 p-4 bg-white absolute top-1 right-1 mx-auto flex flex-row ">
                {socialImages}
            </div>
        </>
    );
}

export default SocialsTop;