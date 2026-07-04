// App entry — hash router + modal state

const ROUTES = {
  "#/":                           { Component: () => window.HomePage,                    label: "Home" },
  "#/finops-services":            { Component: () => window.FinOpsPage,                  label: "FinOps Services" },
  "#/finops-for-cloud-resellers": { Component: () => window.FinOpsForCloudResellersPage, label: "FinOps for Cloud Resellers" },
  "#/why-moneta":                 { Component: () => window.WhyPage,                     label: "Why moneta" },
  "#/privacy-policy":             { Component: () => window.PrivacyPolicyPage,           label: "Privacy Policy" },
};

function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash || "#/");
  React.useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash || "#/");
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash;
}

function App() {
  const hash = useHashRoute();
  const [demoOpen, setDemoOpen] = React.useState(false);
  const route = ROUTES[hash] || ROUTES["#/"];
  const Page = route.Component();

  React.useEffect(() => {
    const titles = {
      "#/":                           "moneta — Cloud Reseller Billing",
      "#/finops-services":            "Cloud FinOps — moneta",
      "#/finops-for-cloud-resellers": "FinOps for Cloud Resellers — moneta",
      "#/why-moneta":                 "Why moneta — moneta",
      "#/privacy-policy":             "Privacy Policy — moneta",
    };
    document.title = titles[hash] || titles["#/"];
  }, [hash]);

  return (
    <React.Fragment>
      <Header onDemoClick={() => setDemoOpen(true)} />
      <main>
        {Page ? <Page onDemoClick={() => setDemoOpen(true)} /> : null}
      </main>
      <Footer onDemoClick={() => setDemoOpen(true)} />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
