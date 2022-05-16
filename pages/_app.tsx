import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import MobileDetect from 'mobile-detect';

function MyApp({ Component, pageProps, isMobile }: AppProps & { isMobile?: boolean }) {
  return <Component {...pageProps} isMobile={isMobile} />;
}

// to detect device type when ssr
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// MyApp.getInitialProps = async ({ ctx }: { ctx: any }) => {
//   const userAgentServer = ctx?.req?.headers['user-agent'];
//   const userAgentClient = (typeof navigator !== 'undefined' ? navigator : null)?.userAgent;
//   const mobileDetect = new MobileDetect(userAgentServer || userAgentClient);
//   const isMobile = mobileDetect.phone() !== null || mobileDetect.mobile() === 'UnknownMobile';
//   return { isMobile };
// };

export default MyApp;
