import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <h1>Welcome to Our Bookstore</h1>
                <p>Your one-stop shop for all your reading needs.</p>
            </header>
            <main className="main-content">
                <section className="featured-books">
                    <h2>Featured Books</h2>
                    <div className="book-list">
                        {/* Book items will be rendered here */}
                    </div>
                </section>
                <section className="about-us">
                    <h2>About Us</h2>
                    <p>We are passionate about books and aim to provide the best selection for our customers.</p>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2023 Bookstore. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;