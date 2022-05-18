import './App.css';
import { Header } from './components/header';

import Tag from './components/Tag';

function App() {
  return (
    <div>
      <Header />
      <Tag type='secondary'>Hi</Tag>
    </div>
  );
}

export default App;
