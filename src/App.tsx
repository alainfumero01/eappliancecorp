import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import AnalyticsTracker from './components/AnalyticsTracker'
import Home from './pages/Home'
import About from './pages/About'
import Manifests from './pages/Manifests'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import TexasWholesale from './pages/intent/TexasWholesale'
import NewJerseyWholesale from './pages/intent/NewJerseyWholesale'
import CustomerReturns from './pages/intent/CustomerReturns'
import ScratchAndDent from './pages/intent/ScratchAndDent'
import ApplianceLiquidation from './pages/intent/ApplianceLiquidation'
import WholesaleRefrigerators from './pages/intent/WholesaleRefrigerators'
import WholesaleWasherDryer from './pages/intent/WholesaleWasherDryer'
import WholesaleResellers from './pages/intent/WholesaleResellers'

// Route tree shared by BrowserRouter and StaticRouter.
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="manifests" element={<Manifests />} />
        <Route path="contact" element={<Contact />} />
        <Route path="texas-wholesale-appliance-loads" element={<TexasWholesale />} />
        <Route path="new-jersey-wholesale-appliance-loads" element={<NewJerseyWholesale />} />
        <Route path="customer-returns-appliances" element={<CustomerReturns />} />
        <Route path="scratch-and-dent-appliances" element={<ScratchAndDent />} />
        <Route path="appliance-liquidation-loads" element={<ApplianceLiquidation />} />
        <Route path="wholesale-refrigerator-loads" element={<WholesaleRefrigerators />} />
        <Route path="wholesale-washer-dryer-loads" element={<WholesaleWasherDryer />} />
        <Route path="wholesale-appliance-loads-for-resellers" element={<WholesaleResellers />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsTracker />
      <AppRoutes />
    </BrowserRouter>
  )
}
