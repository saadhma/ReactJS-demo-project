import './Table.css';
import { Button } from '../../components';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, removeUser } from '../../store/Actions/tableActions';

export default function Table() {

    const dispatch = useDispatch();
    const fetchUsers = useSelector(state => state.usersReducer?.get('users'));

    useEffect(() => {
        dispatch(getUsers());
    },[dispatch]);

    console.log("fetchUsers", fetchUsers); 

    return (
        <div className="table-outline">
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
                    {fetchUsers.map((user, index) => {
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