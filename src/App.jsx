import { Divider } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero'
import Skills from './components/Skills'
import TimelineCard from './components/TimelineCard';

const App = () => {
  return (
    <section id="home" className="container mx-auto space-y-16">
      <Header />
      <Hero />
      <Skills />
      <Divider />
      <section className='w-1/2 mx-auto my-8 p-4 space-y-8'>
      <h2 className='text-2xl font-bold'>Education</h2>
        <TimelineCard title={"Bachelor's in computer Applications"} institute={"Cambridge Institute of Technology"} from={"2021"} to={"2024"} description={"Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu."} />
        <TimelineCard title={"Pre-University"} institute={"Charan's PU College"} from={"2019"} to={"2021"} description={"Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu."} />
      </section>
    </section>
  )
}

export default App;