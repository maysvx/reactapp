import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>

      <Menu></Menu>

      <h1>Hello word</h1>

      <Button variant="primary">Primary</Button>{' '}

    </div>
  );
}

export default App;
