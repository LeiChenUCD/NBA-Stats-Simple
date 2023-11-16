function NavBar() {
    return (
        <>
        <div id="navigation">
            <a href="/">
            <div className="navigation-tab">Standings</div>
            </a>

            <a href="Schedules">
            <div className="navigation-tab">Schedules</div>
            </a>

            <a href="/Quiz">
            <div className="navigation-tab">Quiz</div>
            </a>
            
        </div>
        </>
    )
}

export default NavBar;