import Reactotroton from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotroton.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  console.tron = tron;

  tron.clear();
}
