import React from 'react'
import { useState } from 'react';
import { connect } from "react-redux";
import { fetchQuotes, setValue } from '../redux/quoteAction'
// import { useDispatch } from 'react-redux';
// import { fetchQuotes } from '../redux/quoteAction';

function SearchBar(props) {
    const { number, set_Value, fetch_Quotes } = props
    // const [inputValue, setInputValue] = useState("");
    // const dispatch = useDispatch();

    return (
        <div style={{margin:"16px"}}>
            <input type="text" value={number} placeholder='Enter Number of quotes'
                style={{
                    width: "200px", padding: "8px", fontSize: "16px", backgroundColor: "#fbc093",
                    border: "none", outline: "none", borderRadius: "6px", marginRight: "5px"
                }}
                onChange={(e) => {
                    const value = e.target.value;
                    set_Value(value);
                }} />
            {/* <button onClick={() => {
                dispatch(fetchQuotes(inputValue))
                setInputValue("");
            }} */}
            {/* <button onClick={() => {
                dispatch(fetchQuotes(inputValue))
                setInputValue("");
            }}
                style={{
                    padding: "7px", fontSize: "15px", backgroundColor: "#fbc093",
                    border: "none", outline: "none", borderRadius: "5px"
                }}>Fetch Quotes</button> */}
            <button onClick={() => { fetch_Quotes(number) }}
                style={{
                    padding: "7px", fontSize: "15px", backgroundColor: "#fbc093",
                    border: "none", outline: "none", borderRadius: "5px"
                }}>Fetch Quotes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        set_Value: (value) => {
            dispatch(setValue(value))
        },
        fetch_Quotes: (number) => {
            dispatch(fetchQuotes(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)