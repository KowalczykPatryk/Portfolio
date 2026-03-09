import ProfilePictureBox from "../components/ProfilePictureBox";
import SocialsTop from "../components/SocialsTop";
import CVBox from "../components/CVBox";
import profileImage from "../img/profile_image_placeholder.avif";
import githubLogo from "../img/GitHub-logo.png";
import linkedInLogo from "../img/LinkedIn-Logo.png";
import Logo from "../components/Logo";

function Home(): React.JSX.Element
{

    return (
        <>
            <div className="p-2 grid grid-cols-3 items-center bg-white">
                <div></div>

                <div className="flex justify-center h-24">
                    <Logo />
                </div>

                <div className="flex justify-end">
                    <SocialsTop
                        socialsInfo={[
                            {imagePathName: githubLogo, socialPlatformName: "Github", url: "https://github.com/KowalczykPatryk"},
                            {imagePathName: linkedInLogo, socialPlatformName: "LinkedIn", url: "https://www.linkedin.com/in/patryk-kowalczyk-3a90b6320/"}
                        ]}
                    />
                </div>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
                <ProfilePictureBox imagePathName={profileImage} fullName="Kowalczyk Patryk" socialRoles={["Student AGH Applied Computer Science"]} />
                <CVBox />
            </div>
        </>
    );
}

export default Home;