import { Navbar } from '../components';

function Home(props) {
  const { children } = props;

  return (
    <div className='flex flex-col relative z-0'>
      <Navbar />
      <main className='p-0 overflow-hidden'>{children}</main>
    </div>
  );
}

export default Home;
