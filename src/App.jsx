import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Auth from './pages/Auth';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Roadmap from './pages/Roadmap';
import Careers from './pages/Careers';
import Dashboard from './pages/Dashboard';
import CreateSlip from './pages/CreateSlip';
import SlipsHistory from './pages/SlipsHistory';
import Customers from './pages/Customers';
import Vehicles from './pages/Vehicles';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Reports from './pages/Reports';
import Devices from './pages/Devices';
import DashboardLayout from './components/layout/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/features" element={<Layout><Features /></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:id" element={<Layout><BlogDetail /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms" element={<Layout><TermsOfService /></Layout>} />
        <Route path="/roadmap" element={<Layout><Roadmap /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/create-slip" element={<DashboardLayout><CreateSlip /></DashboardLayout>} />
        <Route path="/slips" element={<DashboardLayout><SlipsHistory /></DashboardLayout>} />
        <Route path="/customers" element={<DashboardLayout><Customers /></DashboardLayout>} />
        <Route path="/vehicles" element={<DashboardLayout><Vehicles /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
        <Route path="/help" element={<DashboardLayout><Help /></DashboardLayout>} />
        <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
        <Route path="/devices" element={<DashboardLayout><Devices /></DashboardLayout>} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  )
}

export default App;
