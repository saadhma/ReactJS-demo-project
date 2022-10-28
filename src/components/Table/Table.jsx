import './Table.css';
import { Button } from '../../components';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, removeUser } from '../../store/Actions/tableActions';

export default function Table() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.Table.users);
    const loading = useSelector(state => state.Table.loading);
    const error = useSelector(state => state.Table.error);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    console.log(users);

    return (
        <div className="table-outline">
            {users.loading && <p>Loading...</p>}
            {users.length === 0 && !loading && <p>No users available!</p>}
            {error && !loading && <p>{error}</p>}
            <table className="table">
                <thead>
                    <tr>
                        <td>No.</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Website</td>
                        <td>Username</td>
                        <td>Company</td>
                        <td>City</td>
                        <td>Street</td>
                        <td>Suite</td>
                        <td>ZipCode</td>
                        <td>Latitude</td>
                        <td>Longitude</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.username}</td>
                                <td>{user.company.name}</td>
                                <td>{user.address.city}</td>
                                <td>{user.address.street}</td>
                                <td>{user.address.suite}</td>
                                <td>{user.address.zipcode}</td>
                                <td>{user.address.geo.lat}</td>
                                <td>{user.address.geo.lng}</td>
                                <td>
                                    <div className="optionbtn">
                                        <Button className={"btn"} onClick={() => { dispatch(removeUser(user.id)) }} text={"Delete"} />
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}