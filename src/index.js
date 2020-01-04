import { h, render } from 'preact';
import App from './App';
let mount;
const root = document.getElementById('root');
mount = render(<App />, root, mount);
