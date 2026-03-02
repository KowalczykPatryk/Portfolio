
interface ProfilePictureBoxProps 
{
    imagePathName: string,
    fullName: string,
    socialRoles: Array<string>
}

function ProfilePictureBox({imagePathName, fullName, socialRoles}: ProfilePictureBoxProps): React.JSX.Element 
{
    const socialRolesList = socialRoles.map(role => <li key={role}>{role}</li>);
    return (
        <>
            <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 rounded-xl bg-white shadow-md max-w-1/2">
                <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={imagePathName} alt="profile image" />
                <div className="space-y-2 text-center sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg font-semibold text-black">{fullName}</p>
                        <ul>{socialRolesList}</ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePictureBox;