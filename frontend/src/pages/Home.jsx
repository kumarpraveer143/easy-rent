

import React, { useState } from 'react';
import HomeImage from "/images/homeImage.png"
import {Link} from"react-router-dom"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [activeTab, setActiveTab] = useState('landlords');
  const [activeQuestion, setActiveQuestion] = useState(null);
  const navigate = useNavigate();

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I list my property?",
      answer: "Simply create an account, click on 'List Property', and follow the step-by-step guide to showcase your space to potential tenants."
    },
    {
      question: "Is there a fee for listing my property?",
      answer: "Basic listings are free. Premium features are available for a small fee to boost visibility and attract more potential tenants."
    },
    {
      question: "How do I search for rooms?",
      answer: "Use our search bar to filter by location, price range, amenities, and more. You can search by pin code or use our interactive map feature."
    },
    {
      question: "Are payments secure?",
      answer: "Yes, all transactions are processed through our secure payment gateway with encryption and fraud protection measures in place."
    },
    {
      question: "Can I schedule a viewing before renting?",
      answer: "Absolutely! You can request viewings directly through our platform and coordinate with property owners for a convenient time."
    }
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Find Your Perfect Rental</span>
                <span className="block text-blue-200">with Ease</span>
              </h1>
              <p className="mt-3 max-w-md text-lg text-blue-100 sm:text-xl md:mt-5 md:max-w-3xl">
                Connect with landowners or tenants effortlessly. List your property or discover your dream room today.
              </p>
              <div className="mt-10 sm:flex">
                <div className="rounded-md shadow">
                  <Link to="/uploadrooms" className="z-1000 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 ">
                    List Property
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to ="/findRooms" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                    Find Rooms
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div>
                <div className="w-full h-64 flex items-center justify-center">
                  <img className="sm:w-[30rem] md:w-[30rem] mt-10" src={HomeImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Discover
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-4xl">
              Your Path to Effortless Renting
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Simplify your rental journey with our intuitive platform. Upload room details or find the perfect space with ease.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Effortless Room Uploads</h3>
                <p className="mt-2 text-base text-gray-600">
                  Landowners can showcase their spaces quickly with our easy-to-use upload tools.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-12 w-12 rounded-md bg-purple-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Advanced Search Options</h3>
                <p className="mt-2 text-base text-gray-600">
                  Tenants can find rooms using pin codes or Google Maps for ultimate convenience.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-12 w-12 rounded-md bg-blue-600 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Secure Payments</h3>
                <p className="mt-2 text-base text-gray-600">
                  Enjoy peace of mind with our secure, integrated payment system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Renters Section */}
      <section id="why-us" className="py-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Redefining Property Rentals
            </h2>
            <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
              Say goodbye to vacant properties. Our platform connects landlords and tenants seamlessly with smart matching and streamlined processes.
            </p>
          </div>

          <div className="mt-16">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className="flex justify-center md:justify-start">
                    <div className="inline-flex rounded-md shadow">
                      <button
                        onClick={() => setActiveTab('landlords')}
                        className={`px-6 py-3 text-base font-medium rounded-l-md ${
                          activeTab === 'landlords'
                            ? 'bg-white text-blue-600'
                            : 'bg-blue-600 bg-opacity-70 text-white hover:bg-opacity-80'
                        }`}
                      >
                        For Landlords
                      </button>
                      <button
                        onClick={() => setActiveTab('renters')}
                        className={`px-6 py-3 text-base font-medium rounded-r-md ${
                          activeTab === 'renters'
                            ? 'bg-white text-blue-600'
                            : 'bg-blue-600 bg-opacity-70 text-white hover:bg-opacity-80'
                        }`}
                      >
                        For Renters
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  {activeTab === 'landlords' ? (
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-lg">Fill your listings quickly with optimized marketing tools.</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-lg">Connect with verified tenants for a hassle-free experience.</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-lg">Manage your properties efficiently with our dashboard tools.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-lg">Discover your ideal home with ease.</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-lg">Apply effortlessly with our trusted, user-friendly platform.</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-lg">Get instant notifications for properties matching your criteria.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Find answers to common questions about our rental platform.
            </p>
          </div>

          <div className="mt-12">
            <div className="space-y-6 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`h-5 w-5 text-blue-500 transform ${activeQuestion === index ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {activeQuestion === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Find Your Perfect Rental?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Join thousands of satisfied landlords and tenants on our platform.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  Get Started
                </a>
              </div>
              <div className="ml-3 inline-flex">
                <a
                  href="#"
                  className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
