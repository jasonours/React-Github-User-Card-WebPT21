import React from "react";
import { UserCard, UserName, UserLogin, UserBio, UserLocation, FollowHeading, FollowCard, FollowImg, FollowLogin, FollowURL, AllCard } from './Styles';

const User = (props) => {
    console.log(props)
    return (
        <AllCard>
            <UserCard key={props.user.id}>
                <UserName>{props.user.name}</UserName>
                <img src={props.user.avatar_url} alt="User" />
                <UserLogin>{props.user.login}</UserLogin>
                <UserBio>{props.user.bio}</UserBio>
                <UserLocation>{props.user.location}</UserLocation>
            </UserCard>

            <div>
                <FollowHeading>Followers</FollowHeading> 
            </div>
            {props.followers.map(follower => (                
                <FollowCard key={follower.id}>                                      
                    <FollowImg><img src={follower.avatar_url} alt="Follower"/></FollowImg>
                    <FollowLogin>{follower.login}</FollowLogin>
                    <FollowURL>{follower.url}</FollowURL>
                </FollowCard>
            ))}
            
            <div>
                <FollowHeading>Following</FollowHeading> 
            </div>            
            {props.following.map(following => (                
                <FollowCard key={following.id}>                                      
                    <FollowImg><img src={following.avatar_url} alt="Follower"/></FollowImg>
                    <FollowLogin>{following.login}</FollowLogin>
                    <FollowURL>{following.url}</FollowURL>
                </FollowCard>
            ))}    
        </AllCard>
    )
}

export default User;