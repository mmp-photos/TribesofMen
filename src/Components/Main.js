import React, { Component } from 'react';
import { useState, useEffect } from "react";
import Session from 'supertokens-auth-react/recipe/session';
import axios from 'axios';

const Main = ( {endpoint} ) => {
    const target = endpoint;
    console.log(target)
    const [loggedIn, setLoggedIn] = useState("Not LoggedIn");
    const [ error, setError ] = useState();
    const [ resData, setresData ] = useState( { user: {
                                                 name: "",
                                                 password: ""
                                                 }
                                              });
    const [loading, setLoading] = useState(true); // Loading state

    const fetchData = async () => {
        console.log('Base URL:', process.env.REACT_APP_BASE_URL); // Debugging line
        try {
            const response = await axios.get(`/${target}`);
            console.log(response.data);
            console.log(response.data.username);
            // setresData( ...resData , user: {name :response.data.username});
            setresData({...resData,  user: {
                name: response.data.username,
                fieldTwo: {
                   fieldTwoOne: "b",
                   fieldTwoTwo: "c"
                   }
                },
           })
            setLoading(false);
        } catch (error) {
            setError(error);
            console.error('Fetch error:', error); // Log error for better debugging
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show loading message while fetching data
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Show error message if there's an error
    }

    return(
        <div id="primary">
            <h1 class="sans">Coming Soon!</h1>
            <h1>Tribes of Men</h1>
            <h2 class="sans">An Aesthic Finder for men and all masculine presenting folks.</h2>
        </div>
    )
};

export default (Main);