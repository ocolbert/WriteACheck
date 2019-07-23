import React from 'react';
import {convertToText} from './functions'

const styles = {
    check: {
        height: "50vh",
        width: "100vw",
        border: "solid 1px",
        display: "flex",
        flexDirection: "column",
    },
    addressInfo: {
        padding: "5px 0 0 20px"
    },
    dateContainer: {
 
        display: "flex",
        alignItems: "flex-end",
        marginRight: "10%",
        flexDirection: "column"
   
    },
    date: {
        borderBottom: "solid 1px",
        padding: "0 10px 0 10px"
    },
    main: {

        flex: "1 0 0",
        display: "flex",
        flexDirection: "column"
    },
    payContainer: {
        display: "flex",
        margin: "2em"
    },
    payTo: {
        borderBottom: "solid 1px",
        flex: "1 0 0",

    

    },
    amount: {
        border: "solid 1px",
        flex: "0 0 10%",
        margin: "0 10px 0 10px"
        
    },
    textDollarsContainer: {

        margin: "1em",
        display: "flex",
        justifyContent: "space-between",
        padding: " 0 1em 0 1em",
        borderBottom: "solid 1px",
    },
    forContainer: {
        padding: "1em",
        display: "flex"
    },
    checkFor: {
        flex: "0 0 80%",
        borderBottom: "solid 1px"
    },
    extra: {
        borderBottom: "solid 1px",
        flex: "1 0 0",
        margin: "0  20px 0 50px"
    },
    checkNumber: {
    
        flex: "1 0 0",
        display: "flex",
        alignItems: "flex-end",
        margin: "2em"
    },
    routing: {
        margin: "0 20% 0 0",
        
    },
  
}


function Check(props) {
    
    const {amount, name, city, state, street, date} = props;

    return (
      <div style={styles.check}>
          <div style={styles.addressInfo}>
            <div> {name}</div>
            <div>{street}</div>
            <div>{city}, {state}</div>
          </div>
            <div style={styles.dateContainer}>
              <div  style={styles.date}>{date}</div>
              <div>Date</div>
            </div>
            <div style={styles.main}>
                <div style={styles.payContainer}> 
                    <div style={styles.payTo}> 
                        Pay to the Order of
                    </div>
                    <div style={styles.amount}>$347</div>
                </div>
                <div style={styles.textDollarsContainer}>
                    <div style={styles.amountAsText}>{convertToText(amount)}</div>
                    <div>Dollars</div>
                </div>
                <div style={styles.forContainer}>
                    <div style = {styles.checkFor}>
                        For: 
                    </div>
                    <div style={styles.extra}></div>
                </div>
                <div style={styles.checkNumber}>
                     <div style={styles.routing}>000000000</div>
                     <div style={styles.account}>00004589345</div>
                </div>
            </div>
      </div>
    );
  }

  export default Check;