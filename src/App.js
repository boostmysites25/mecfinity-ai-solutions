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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
const CloudServices = lazy(() => import("./pages/landingPages/CloudServices"));
const SaasTransformation = lazy(() =>
  import("./pages/landingPages/SaasTransformation")
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
                      <WhatsAppIcon />
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
                    <WhatsAppIcon />
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
                    <WhatsAppIcon />
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
                    <WhatsAppIcon />
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
                    <WhatsAppIcon />
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
                    <WhatsAppIcon />
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
                    <WhatsAppIcon />
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
                    <WhatsAppIcon />
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
                    <WhatsAppIcon />
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
                    <WhatsAppIcon />
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
                    <WhatsAppIcon />
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
                    <WhatsAppIcon />
                    <LandingHeader />
                    <CloudServices />
                    <LandingFooter />
                  </>
                }
              />
              <Route
                path="/saas-transformation"
                element={
                  <>
                    <LandingHeader />
                    <SaasTransformation />
                    <LandingFooter />
                  </>
                }
              />
              <Route
                path="/terms-and-conditions"
                element={
                  <>
                    <WhatsAppIcon />
                    <WebsiteHeader />
                    <TermsAndConditions />
                  </>
                }
              />
              <Route
                path="/Privacy-Policy"
                element={
                  <>
                    <WhatsAppIcon />
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
