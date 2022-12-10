// ** Router Import
//import '@custom-styles/basic/tooltip.scss';
import MainRouter from './router/Router';
const App = (props) => <MainRouter />;
//For Remove Console From Production Mode
if (process.env.NODE_ENV === 'production') console.log = () => {};

// const { auth } = store.getState();
// import { store } from './redux/storeConfig/store';

// store.dispatch( getAuthUser() );

export default App;
