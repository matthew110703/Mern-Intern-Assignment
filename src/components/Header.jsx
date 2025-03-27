import FaceIcon from '@mui/icons-material/Face';

const Header = () => {
    return (
        <header className="flex container mx-auto items-center bg-gray-200 justify-around p-4 shadow-md">
            <div className="flex items-center gap-2">
                <FaceIcon />
                <h1 className="text-2xl font-semibold font-serif">Mathew R</h1>
            </div>
            <nav>
                <ul className="flex items-center gap-4 *:font-semibold *:text-sm">
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Extras</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;