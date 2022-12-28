import React from 'react'
import { connect } from "react-redux";
import { setValue, fetchQuotes, fetchQuoteRequest, fetchQuoteSuccess, fetchQuoteFailure }
    from '../redux/quoteAction'
import SearchBar from './SearchBar';
import QuotesList from './QuotesList';
function QuoteContainer(props) {
    console.log("props ", props)
    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{color:"#0ca678"}}>QUOTES APPLICATION</h2>
            <hr />
            <SearchBar />
            <QuotesList />
        </div>
    )
}




export default QuoteContainer