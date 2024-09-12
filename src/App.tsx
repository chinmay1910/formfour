import { Routes, Route } from 'react-router-dom';
import Layout from './DashComponents/Layout'; // Import the Layout component
import { ThemeProvider } from './theme-provider';

import Assets from './DashComponents/Dashboard/Assets';
import Overview from './DashComponents/Dashboard/Overview';

// Import new components for each route
import ConditionAssessment from './DashComponents/SubNavMenu/ConditionAssesment';
import Profile from './DashComponents/SubNavMenu/Profile';
import ImportFile from './DashComponents/SubNavMenu/ImportFile';
import DataPreprocess from './DashComponents/SubNavMenu/DataPreprocess';
import DataTransfrom from './DashComponents/SubNavMenu/DataTransfrom';
import FeautreExtraction from './DashComponents/SubNavMenu/FeautreExtraction';
import RuleBasedAlerts from './DashComponents/SubNavMenu/RuleBasedAlerts';
export default function App() {
  return (
    <ThemeProvider  defaultTheme="light" storageKey="vite-ui-theme">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} /> {/* Default route */}
        <Route path="overview" element={<Overview />} />
        <Route path="assets" element={<Assets />} />
        <Route path="condition-assessment" element={<ConditionAssessment />} />
        <Route path="profile" element={<Profile />} />
        <Route path="import-file" element={<ImportFile />} />
        <Route path="data-preprocess" element={<DataPreprocess />} />\
        <Route path="data-transform" element={<DataTransfrom />} />
        <Route path="feature-extraction" element={<FeautreExtraction />} />
        <Route path="rule-based-alerts" element={<RuleBasedAlerts />} />
        im
      </Route>
    </Routes>
    </ThemeProvider>
  );
}
