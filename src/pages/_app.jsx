import { Provider } from 'react-redux';
import store from '@/redux/store';

import '../styles/globals.css';
import '../styles/components/intro.css';
import '../styles/components/about.css';
import '../styles/components/productList.css';
import '../styles/components/product.css';
import '../styles/components/contact.css';
import '../styles/components/toggle.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        {/* Dari App */}
      </div>
      <Component {...pageProps} />
    </Provider>
  );
  // return <Component {...pageProps} />
}

export default MyApp
