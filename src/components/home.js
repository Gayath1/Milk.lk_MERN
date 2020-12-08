import React from 'react';
import fire from './firebase';

const Home = () => {
    const handleLogout = () => {
        fire.auth().signOut();
      };
    
    return(
        <section className = "Home">
            <nav>
                <h2>welcome</h2>
                <button >Logout</button>
            </nav>
        </section>
    );
}

export default Home;