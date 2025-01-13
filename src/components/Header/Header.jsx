import profile from '../../assets/images/profile.png'

// Header component that displays the title and profile image
const Header = () => {
    return (
        <div className='flex justify-between items-center px-4 py-2 border-b-2'>
            <h1 className="text-4xl font-bold">
                {/* Display the title */}
                Knowledge Cafe
            </h1>
            {/* Display the profile image */}
            <img src={profile} alt="Profile" />
        </div>
    );
};

export default Header;