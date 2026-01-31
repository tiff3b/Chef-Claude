import chef from '../images/chef-claude-icon.png'

export default function Header(){
    return (
        <header>
            <div className="header">
                <img src={chef} alt="Chef-Claude"/>
                <h1>Chef Claude</h1>
            </div>
        </header>
    )
}