import '../styles/home.css';

export const Home = () => {
    return (
        <main>
            <section id='home'>
                <div className='home-content'>
                    <h1 className='home-title'>Hi, I&#39;m <span className='selection'>Vladyslav</span> - a Web Developer.</h1>
                    <p className='home-subtitle'>I specialize in creating <span className='selection'>responsive</span> and <span className='selection'>functional</span> websites to help businesses achieve <span>success</span>.</p>
                    <div>
                        <button className='btn-projects'>Projects</button>
                    </div>
                </div>
            </section>
        </main>
    );
};