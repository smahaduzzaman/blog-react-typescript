import Navbar from './Components/Navbar';
import BlogList from './Components/BlogList';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <BlogList />
      </div>
    </div>
  );
};

export default App;
