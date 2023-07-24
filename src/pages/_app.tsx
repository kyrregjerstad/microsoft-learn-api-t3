import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="dark flex min-h-screen w-full flex-col items-center justify-center bg-background">
        <div className="w-full max-w-7xl px-4">
          <Component {...pageProps} />
        </div>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;
