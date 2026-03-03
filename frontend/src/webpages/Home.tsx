import ProfilePictureBox from "../components/ProfilePictureBox";
import SocialsTop from "../components/SocialsTop";
import CVBox from "../components/CVBox";
import profileImage from "../img/profile_image_placeholder.avif";
import githubLogo from "../img/GitHub-logo.png";
import linkedInLogo from "../img/LinkedIn-Logo.png";

function Home(): React.JSX.Element
{

    return (
        <>
            <div className="p-2 flex justify-between bg-white">
                <div></div>
                <div></div>
                <SocialsTop socialsInfo={[
                    {imagePathName: githubLogo, socialPlatformName: "Github", url: "https://github.com/KowalczykPatryk"},
                    {imagePathName: linkedInLogo, socialPlatformName: "LinkedIn", url: "https://www.linkedin.com/in/patryk-kowalczyk-3a90b6320/"}

                ]} />
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
                <ProfilePictureBox imagePathName={profileImage} fullName="Kowalczyk Patryk" socialRoles={["Student AGH Applied Computer Science"]} />
                <CVBox />
            </div>
        </>
    );
}

export default Home;