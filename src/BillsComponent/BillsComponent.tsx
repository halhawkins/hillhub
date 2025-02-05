import { FC, useEffect, useState } from "react";
import { Bill, fetchBillsAPI } from "./BillsAPI";
import { useDispatch } from "react-redux";
import { setBills } from "./BillsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import "./BillsComponent.css";
const BillsComponent:FC = () => {
    const [billsArray, setBillsArray] = useState<Bill[]>([]);
    const dispatch = useDispatch();
    const bills = useSelector((state: RootState) => state.bills)

    useEffect(() => {
        const fetchBills = async () => {
            const billsResponse = await fetchBillsAPI(0);
            if (billsResponse) {
                // setBillsArray(billsResponse);
                dispatch(setBills({bills:billsResponse, page: 0}));
            }
            // console.log("Fetched bills", billsResponse);
        };
        fetchBills();
    }, [dispatch]);

    useEffect(() => {
        console.log("Bills updated", bills);
        // Update the state with the latest fetched bills
        // setBillsArray(bills);
        // dispatch(setBills({bills:bills, page: 0})); // Update the Redux state as well
        // console.log("Fetched bills", bills);
    },[bills])
    const date = new Date();
    const getBillType = (type: string) => {
        switch (type) {
            case "HR":
                return "House Bill";
            case "S":
                return "Senate Bill";
            case "HJRES":
                return "House Joint Resolution";
            case "SJRES":
                return "Senate Joint Resolution";
            case "HCONRES":
                return "House Concurrent Resolution";
            case "SCONRES":
                return "Senate Concurrent Resolution";
            case "HRES":
                return "House Resolution";
            case "SRES":
                return "Senate Resolution";
            default:
                return "";
        }
    }
    return (
        <div className="bills-list-container">
            <table style={{width: "100%"}}>
                <tr>
                    <th style={{width: "7rem"}}>Date</th>
                    <th style={{width: "5rem"}}>Chamber</th>
                    <th style={{width: "8rem"}}>Type</th>
                    <th>Title</th>
                </tr>
            </table>
                {bills.bills.map((bill, index) => {
                    const billDate = new Date(bill.updateDate);
                    return (
                        <>
                            <table style={{width: "100%"}} key={index}>
                                <tr>
                                        <td style={{width: "7rem", verticalAlign: "top"}}>{billDate.toLocaleDateString('en-US', {
                                            day: '2-digit', 
                                            month: 'short', 
                                            year: 'numeric'
                                        })}</td>
                                        <td className="bill-type" style={{width: "4rem", verticalAlign: "top"}}>
                                            {bill.originChamber}
                                        </td>
                                        <td className="bill-type" style={{width: "8rem", verticalAlign: "top"}}>
                                            {getBillType(bill.type)}
                                        </td>
                                    <td>
                                        <table style={{width: "100%"}}>
                                            <tr className="bill-title">
                                            {bill.title.replaceAll('"',"")}
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <hr style={{margin: "0.5rem 0"}}/>
                        </>
                )})}
        </div>
    )
}

export default BillsComponent;