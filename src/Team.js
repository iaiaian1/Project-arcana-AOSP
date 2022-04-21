import github from './img/svg/github.svg'
const Team = () => {
    return (
        <>
            <h1 className='component-h1' id='team'>Team</h1>
            <div className="team-wrapper">
                <div className="team-div">
                    <img src='https://avatars.githubusercontent.com/u/71618647?v=4' alt="" />
                    <h2>dlwlrma23</h2>
                    <h4>founder</h4>
                    <button><img src={ github } alt="" />GitHub</button>
                </div>
                <div className="team-div">
                    <img src="https://avatars.githubusercontent.com/u/59208745?v=4" alt="" />
                    <h2>Hazama25</h2>
                    <h4>Developer and moderator</h4>
                    <button><img src={ github } alt="" />GitHub</button>
                </div>
                <div className="team-div">
                    <img src='https://avatars.githubusercontent.com/u/77016989?v=4' alt="" />
                    <h2>Don Joaquin</h2>
                    <h4>Developer and moderator</h4>
                    <button><img src={ github } alt="" />GitHub</button>
                </div>
                <div className="team-div">
                    <img src="https://avatars.githubusercontent.com/u/67692232?v=4" alt="" />
                    <h2>Eun0115</h2>
                    <h4>Developer and moderator</h4>
                    <button><img src={ github } alt="" />GitHub</button>
                </div>
                <div className="team-div">
                    <img src="https://avatars.githubusercontent.com/u/92788616?v=4" alt="" />
                    <h2>iaiaian1</h2>
                    <h4>Website developer</h4>
                    <button><img src={ github } alt="" />GitHub</button>
                </div>
            </div>
        </>
     );
}
 
export default Team;