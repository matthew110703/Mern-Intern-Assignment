import { Button } from "@mui/material";

const Hero = () => {
    return (
        <section id="#about" className="container w-full border mx-auto flex gap-16 items-center justify-center">
            <img src="/profile.avif" alt="Profile" className="" width={400} height={400} />
            <div className="flex flex-col gap-y-4 w-1/2">
                <h2 className="text-4xl font-bold">I'm Mathew R</h2>
                <h5 className="font-semibold">Web Developer</h5>
                <p className=" font-light">Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
                <div className="flex items-center gap-8">

                <Button variant="contained">Download CV</Button>
                <Button variant="outlined">Get In Touch</Button>
                </div>
            </div>
        </section>
    )
}

export default Hero;