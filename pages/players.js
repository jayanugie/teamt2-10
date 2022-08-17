import HomeNav from "../components/navbar/HomeNav";
import axios from 'axios';
import React from "react";

class Players extends React.Component {

    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        const url = "http://localhost:4000/players"
        axios.get(url)
            .then(users => {
                console.log(users.data);
                this.setState({
                    users: users.data
                })
            })
    }

    render() {
        return (
            <>
                <HomeNav />
                <div className="container w-50 mt-3">
                    <nav className="navbar navbar-light bg-light">
                        <div className="container">
                            <a className="navbar-brand">Players</a>
                        </div>
                    </nav>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Username</th>
                                <th scope="col">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user, idx) => {
                                return (
                                    <tr>
                                        <th key={idx} scope="row">{user.id}</th>
                                        <td key={idx}>{user.username}</td>
                                        <td key={idx}>{user.role}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}


export default Players;