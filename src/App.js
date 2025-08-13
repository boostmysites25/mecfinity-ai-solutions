import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { LandingPage } from "./pages/landingPages/LandingPage";
import LandingHeader from "./components/landingPages/LandingHeader";
import LandingFooter from "./components/landingPages/LandingFooter";
import WebsiteHeader from "./components/website/WebsiteHeader";
import WebsiteFooter from "./components/website/WebsiteFooter";
import { routes } from "./constant";
import { lazy, Suspense, useEffect } from "react";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import WhatsAppIcon from "./components/common/Whatsapp.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import PageTracker from "./components/common/PageTracker.js";
import TermsAndConditions from "./pages/website/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/website/PrivacyPolicy.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const ServicePageLayout = lazy(() => import("./layout/ServicePageLayout"));
const ServiceDetails = lazy(() => import("./pages/website/ServiceDetails"));
const Thankyou = lazy(() => import("./pages/ThankYou"));
const BlogDetails = lazy(() => import("./pages/website/BlogDetails.jsx"));
const IotDevelopment = lazy(() =>
  import("./pages/landingPages/IotDevelopment")
);
const CloudComputing = lazy(() =>
  import("./pages/landingPages/CloudComputing")
);
const AiCallingAgency = lazy(() =>
  import("./pages/landingPages/AiCallingAgency")
);
const BlockchainDevelopment = lazy(() =>
  import("./pages/landingPages/BlockchainDevelopment")
);
const VRARDevelopment = lazy(() =>
  import("./pages/landingPages/VRARDevelopment")
);
const AutomationServices = lazy(() =>
  import("./pages/landingPages/AutomationServices")
);
const CustomWebDevelopment = lazy(() =>
  import("./pages/landingPages/CustomWebDevelopment")
);
const CloudServices = lazy(() =>
  import("./pages/landingPages/CloudServices")
);

AOS.init({
  once: true,
  duration: 500,
  offset: 0,
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 2,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SpinnerContextProvider>
        <HelmetProvider>
          <LoadingSpinnerContext />
          <Suspense fallback={<LoadingSpinner />}>
            <WhatsAppIcon />
            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  background: "#010C2A",
                  color: "#ffffff",
                },
              }}
            />
            <ScrollToTop />
            <PageTracker />
            <Routes>
            {/* Website Pages */}
            {routes.map(({ component, name, path }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <>
                    <WebsiteHeader name={name} />
                    {component}
                    <WebsiteFooter />
                  </>
                }
              />
            ))}

            <Route
              path="/blogs/:slug"
              element={
                <>
                  <WebsiteHeader />
                  <BlogDetails />
                  <WebsiteFooter />
                </>
              }
            />
            <Route path="/thank-you" element={<Thankyou />} />

            <Route path="/services" element={<ServicePageLayout />}>
              <Route path=":title" element={<ServiceDetails />} />
              <Route
                path="*"
                element={<Navigate to="/services/Web Development" />}
              />
            </Route>

            {/* Landing Pages */}
            <Route
              path="/web-development"
              element={
                <>
                  <LandingHeader />
                  <LandingPage page={"web-development"} />
                  <LandingFooter />
                </>
              }
            />
            <Route
              path="/app-development"
              element={
                <>
                  <LandingHeader />
                  <LandingPage page={"app-development"} />
                  <LandingFooter />
                </>
              }
            />
            <Route
              path="/iot-development"
              element={
                <>
                  <LandingHeader />
                  <IotDevelopment />
                  <LandingFooter />
                </>
              }
            />
            <Route
              path="/cloud-computing"
              element={
                <>
                  <LandingHeader />
                  <CloudComputing />
                  <LandingFooter />
                </>
              }
            />
            <Route
              path="/ai-calling-agency"
              element={
                <>
                  <LandingHeader />
                  <AiCallingAgency />
                  <LandingFooter />
                </>
              }
            />
            <Route
              path="/blockchain"
              element={
                <>
                  <LandingHeader />
                  <BlockchainDevelopment />
                  <LandingFooter />
                </>
              }
            />
            <Route
              path="/vr-ar-development"
              element={
                <>
                  <LandingHeader />
                  <VRARDevelopment />
                  <LandingFooter />
                </>
              }
            />
            <Route
              path="/automation-services"
              element={
                <>
                  <LandingHeader />
                  <AutomationServices />
                  <LandingFooter />
                </>
              }
            />
                    <Route
          path="/custom-web-development"
          element={
            <>
              <LandingHeader />
              <CustomWebDevelopment />
              <LandingFooter />
            </>
          }
        />
        <Route
          path="/cloud-services"
          element={
            <>
              <LandingHeader />
              <CloudServices />
              <LandingFooter />
            </>
          }
        />
            <Route
              path="/terms-and-conditions"
              element={
                <>
                  <WebsiteHeader />
                  <TermsAndConditions />
                </>
              }
            />
            <Route
              path="/Privacy-Policy"
              element={
                <>
                  <WebsiteHeader />
                  <PrivacyPolicy />
                </>
              }
            />
          </Routes>
        </Suspense>
      </HelmetProvider>
    </SpinnerContextProvider>
    </QueryClientProvider>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return null;
};
