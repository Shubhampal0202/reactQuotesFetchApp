import React from 'react'
import { connect } from 'react-redux'
function QuotesList(props) {
    console.log("QuoteList ", props)
    const { loading, quotes, error, number, set_Value, fetch_Quotes } = props;
    return (
        <div>
            {
                loading ? <h2 style={{ color: "#0ca678" }}>Loading...</h2> :
                    error ? <h2>{error}</h2> :
                        quotes.length ?
                            quotes.map((quoteObj) => {
                                return (
                                    <div key={quoteObj.id} style={{
                                        backgroundColor: "#e64980", color: "white", borderRadius: "6px",
                                        boxShadow: "0px 2px 8px #666",
                                        width: "50%", margin: "20px auto", padding: "10px", display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <div style={{ fontSize: '20px' }}><strong style={{ color: "black" }}>Catagory :</strong> {quoteObj.category}</div>
                                        <div style={{ margin: "10px", fontSize: "20px" }}><strong style={{ color: "black" }}>Author :</strong> {quoteObj.author}</div>
                                        <div style={{ fontSize: '20px', letterSpacing: "1px" }}>"{quoteObj.text}"</div>
                                    </div>
                                )
                            }) : <h3 style={{ color: "#0ca678" }}> No Quotes</h3>
            }


        </div>
    )
}
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(QuotesList)








