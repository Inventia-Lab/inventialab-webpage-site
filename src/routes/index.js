import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ROUTE_HOME,
  ROUTE_ABOUTUS,
  ROUTE_CONTACTUS,
  ROUTE_SERVICES,
  ROUTE_SERVICES_INVENTIAEXPERIENCE_PRODUCTDESIGN,
  ROUTE_SERVICES_INVENTIAEXPERIENCE_RESEARCH,
  ROUTE_SERVICES_INVENTIAEXPERIENCE_SERVICEDESIGN,
  ROUTE_SERVICES_INVENTIASOFTWARE_CLOUDENGINEERING,
  ROUTE_SERVICES_INVENTIASOFTWARE_DEVOPSIMPLEMENTATION,
  ROUTE_SERVICES_INVENTIASOFTWARE_FULLSTACKDEVELOPMENT,
  ROUTE_SUCCESSSTORIES,
  ROUTE_SUCCESSSTORIES_BANKINGBBVA,
  ROUTE_SUCCESSSTORIES_BANKINGFINANCIERAPODEMOSPROGRESAR,
  ROUTE_SUCCESSSTORIES_BANKINGGRUPOGENTERA,
  ROUTE_SUCCESSSTORIES_BANKINGION,
} from '../utils/routes';
import Home from '../app/page';
import RootLayout from '../app/layout';
import Services from '../app/services/page';
import ServicesInventiaExperienceResearch from '../app/services/inventiaexperience-research/page';
import ServicesInventiaExperienceProductDesign from '../app/services/inventiaexperience-productdesign/page';
import ServicesInventiaExperienceServiceDesign from '../app/services/inventiaexperience-servicedesign/page';
import ServicesInventiaSoftwareCloudEngineering from '../app/services/inventiasoftware-cloudengineering/page';
import ServicesInventiaSoftwareFullstackDevelopment from '../app/services/inventiasoftware-fullstackdevelopment/page';
import ServicesInventiaSoftwareDevopsImplementation from '../app/services/inventiasoftware-devopsimplementation/page';
import SuccessStories from '../app/success-stories/page';
import SuccessStoriesBBVA from '../app/success-stories/bbva/page';
import SuccessStoriesFinancieraPodemosProgresar from '../app/success-stories/financierapodemosprogresar/page';
import SuccessStoriesGentera from '../app/success-stories/gentera/page';
import SuccessStoriesION from '../app/success-stories/ion/page';
import AboutUs from '../app/about-us/page';
import ContactUs from '../app/contact-us/page';
import { AnimatePresence } from "framer-motion";
import Template from '../app/template';

const RouterWrapper = () => {
  return (
    <Router>
      <RootLayout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path={ROUTE_HOME} element={<Template key={'home'}><Home /></Template>} />
            <Route path={ROUTE_SERVICES} element={<Template key={'services-0'}><Services /></Template>} />
            <Route path={ROUTE_SERVICES_INVENTIAEXPERIENCE_PRODUCTDESIGN} element={<Template key={'services-1'}><ServicesInventiaExperienceProductDesign /></Template>} />
            <Route path={ROUTE_SERVICES_INVENTIAEXPERIENCE_RESEARCH} element={<Template key={'services-2'}><ServicesInventiaExperienceResearch /></Template>} />
            <Route path={ROUTE_SERVICES_INVENTIAEXPERIENCE_SERVICEDESIGN} element={<Template key={'services-3'}><ServicesInventiaExperienceServiceDesign /></Template>} />
            <Route path={ROUTE_SERVICES_INVENTIASOFTWARE_CLOUDENGINEERING} element={<Template key={'services-4'}><ServicesInventiaSoftwareCloudEngineering /></Template>} />
            <Route path={ROUTE_SERVICES_INVENTIASOFTWARE_DEVOPSIMPLEMENTATION} element={<Template key={'services-5'}><ServicesInventiaSoftwareDevopsImplementation /></Template>} />
            <Route path={ROUTE_SERVICES_INVENTIASOFTWARE_FULLSTACKDEVELOPMENT} element={<Template key={'services-6'}><ServicesInventiaSoftwareFullstackDevelopment /></Template>} />
            <Route path={ROUTE_SUCCESSSTORIES} element={<Template key={'success-0'}><SuccessStories /></Template>} />
            <Route path={ROUTE_SUCCESSSTORIES_BANKINGBBVA} element={<Template key={'success-1'}><SuccessStoriesBBVA /></Template>} />
            <Route path={ROUTE_SUCCESSSTORIES_BANKINGFINANCIERAPODEMOSPROGRESAR} element={<Template key={'success-2'}><SuccessStoriesFinancieraPodemosProgresar /></Template>} />
            <Route path={ROUTE_SUCCESSSTORIES_BANKINGGRUPOGENTERA} element={<Template key={'success-3'}><SuccessStoriesGentera /></Template>} />
            <Route path={ROUTE_SUCCESSSTORIES_BANKINGION} element={<Template key={'success-4'}><SuccessStoriesION /></Template>} />
            <Route path={ROUTE_ABOUTUS} element={<Template key={'about-us'}><AboutUs /></Template>} />
            <Route path={ROUTE_CONTACTUS} element={<Template key={'contact-us'}><ContactUs /></Template>} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </AnimatePresence>
      </RootLayout>
    </Router>
  );
};

export default RouterWrapper;