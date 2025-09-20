import { Routes, Route } from 'react-router-dom'
import { Home, AboutUs,  Gallery, Room, ContactUs, ErrorPage } from './index'
import Layout from '../components/Layout'
import PrivacyPolicy from '../components/PrivacyPolicy'
import TermsAndConditions from '../components/TermsAndConditions'
import CancellationRefundPolicy from '../components/CancellationandRefund'
import { Facilities } from '../components/homePageComponent/Facilities'

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='aboutus' element={<AboutUs />} />
                    {/* <Route path='events' element={<Events/>} /> */}
                    <Route path='facilities' element={<Facilities />} />
                    <Route path='gallery' element={<Gallery />} />
                    <Route path='contactUs' element={<ContactUs />} />
                    <Route path='Room' element={<Room />} />
                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                    <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
                    <Route path='/cancellation-and-refund-policy' element={<CancellationRefundPolicy />} />
                    {/* Add more routes as needed */}

                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes