import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';
import Review from './components/review/Review';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Contents/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
