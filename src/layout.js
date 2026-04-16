import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useNavigate, useSearchParams } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to='/' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/services'>Services</Link>
                <Link to='/courses/1?level=beginner&price=free'>Courses</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} > Home page</Route> 
                <Route path='/about' element={<About />} > About page</Route>
                <Route path='/contact' element={<Contact />}>Contact page</Route>
                <Route path='/services' element={<Services />}>
                    <Route path='/web' element={<WebServices />}></Route>
                    <Route path='/mobile' element={<MobileServices />}></Route>
                </Route>
                <Route path='/courses/:id' element={<CoursesDetails />}>Courses page</Route>
            </Routes>
        </BrowserRouter>
    )
}

function Home() {
    const navigation = useNavigate();
    return <h1>Visit our home page</h1>
}

function About() {
    return <h1>About page is here!</h1>
}

function Contact() {
    return <h1>Contact us for more informations</h1>
}

function Services() {
    return (
        <>
            <h1>Here's a list of our services</h1>  
            <Link to='/web'>Web Services</Link>  
            <Link to='/mobile'>Mobile Services</Link>
            <Outlet/>
        </>
    )
}

function WebServices() {
    return <h2>Access our services on website</h2>
}

function mobileServices() {
    return <h2>Get access to our services on your mobile phone</h2>
}

function CoursesDetails() {
    const { id } = useParams();
    const [useSearchParams, setSearchParams] = useSearchParams();

    const level = setSearchParams.get("level");
    const price = setSearchParams.get("price");

    return (
        <>
            <h1>Course ID: {id}</h1>
            <h2>Level: {level}</h2>
            <h2>Price: {price}</h2>
            <button onClick={() => setSearchParams({level: 'advanced', price: 'paid'})
              }>upgrade course
            </button>
        </> 
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);