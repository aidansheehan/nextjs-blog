import '../styles/global.css';

/**
 * Top level component common across all the different pages
 * Can be used to keep state when navigating between pages!
 */
const App = ({ Component, pageProps }) => {

    return <Component {...pageProps} />;
}

export default App;