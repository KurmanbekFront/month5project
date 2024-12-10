import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAction } from "../../redux/actions";
import UserCard from "../../components/UserCard";

const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users)
    console.log(users);
    
    const getUsers = () => {
        dispatch(fetchUserAction())
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div>
            <div className="cardBlock">
                {users.map(user => <UserCard userInfo={user}/>)}
            </div>
            
        </div>
    );
};

export default UsersPage;
