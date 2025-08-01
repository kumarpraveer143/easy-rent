import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Developer from "./pages/Developer";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import LandownerAuth from "./components/Auth/LandownerAuth";
import RentersAuth from "./components/Auth/RentersAuth";
import Loading from "./components/UI/Loading";
import AuthenticatedUser from "./components/Auth/AuthenticatedUser";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const LandOwnerRooms = React.lazy(() =>
  import("./pages/landownerPages/LandOwnerRooms")
);
const FavouriteRoom = React.lazy(() => import("./pages/FavouriteRoom"));
import Home from "./pages/Home";
// Lazy load pages
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Login = React.lazy(() => import("./pages/Login"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const Signup = React.lazy(() => import("./pages/Signup"));
const FindRooms = React.lazy(() => import("./pages/FindRooms"));
const Profile = React.lazy(() => import("./pages/Profile"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const UploadRooms = React.lazy(() => import("./pages/UploadRooms"));
const Layout = React.lazy(() => import("./components/layouts/Layout"));
const ArchievedRenters = React.lazy(() =>
  import("./pages/landownerPages/ArchievedRenters")
);
const NoRenters = React.lazy(() => import("./pages/landownerPages/NoRenters"));
const AddRent = React.lazy(() => import("./pages/landownerPages/AddRent"));
const CheckHistory = React.lazy(() =>
  import("./pages/landownerPages/CheckHistory")
);
const NoHistory = React.lazy(() => import("./pages/landownerPages/NoHistory"));

const ProtectedRoute = React.lazy(() =>
  import("./components/Auth/ProtectedRoute")
);
const Reset = React.lazy(() => import("./pages/Reset"));
const UnauthenticatedRoute = React.lazy(() =>
  import("./components/Auth/UnauthenticatedRoute")
);
const ViewRoomDetails = React.lazy(() => import("./pages/ViewRoomDetails"));
const IncommingRequest = React.lazy(() =>
  import("./pages/landownerPages/IncommingRequest")
);
const RenterHistoryDetails = React.lazy(() =>
  import("./pages/rentersPages/RenterHistoryDetails")
);
const RenterMyRoom = React.lazy(() =>
  import("./pages/rentersPages/RenterMyRoom")
);

const PaymentHistory = React.lazy(() =>
  import("./pages/landownerPages/PaymentHistory")
);
const MyRenters = React.lazy(() => import("./pages/landownerPages/MyRenters"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="font-sans bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <Loading />
          </div>
        }
      >
        <Routes>
          {/* Open Routes for all */}
          <Route element={<Layout />}>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/findrooms" element={<FindRooms />} />

            <Route path="/reset/:token" element={<Reset />} />
            <Route path="/forget-password" element={<ForgotPassword />} />

            {/* Unauthorized Route */}
            <Route element={<UnauthenticatedRoute />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<AuthenticatedUser />}>
              {/* Routes for only Renters */}
              <Route element={<RentersAuth />}>
                <Route path="/rentersMyRoom" element={<RenterMyRoom />} />
                <Route
                  path="/viewRoomsDetails/:id"
                  element={<ViewRoomDetails />}
                />
                <Route
                  path="/renter-history"
                  element={<RenterHistoryDetails />}
                />
                <Route path="/favouriteRooms" element={<FavouriteRoom />} />
              </Route>

              {/* Routes for only landowners */}
              <Route element={<LandownerAuth />}>
                <Route path="/payment-history" element={<PaymentHistory />} />
                <Route path="/uploadrooms" element={<UploadRooms />} />
                <Route path="/landowner-rooms" element={<LandOwnerRooms />} />
                <Route path="/my-renters" element={<MyRenters />} />
                <Route path="/add-rent/:relationId" element={<AddRent />} />
                <Route path="/no-history" element={<NoHistory />} />
                <Route
                  path="/check-history/:relationId"
                  element={<CheckHistory />}
                />
                <Route path="/incoming-request" element={<IncommingRequest />} />
                <Route path="/archieved-renters" element={<ArchievedRenters />} />
                <Route path="/no-renters" element={<NoRenters />} />
              </Route>

              {/* Protected Routes for all users  */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Route>

            <Route path="/pagenotfound" element={<PageNotFound />} />
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
