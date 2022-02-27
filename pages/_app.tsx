import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store, persistor } from "../app/store";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
        {/* </PersistGate> */}
      </Provider>
    </QueryClientProvider>
  );
}
export default MyApp;
