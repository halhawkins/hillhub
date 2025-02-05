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
    return (
        <div className="bills-list-container">
            <ul>
                {bills.bills.map((bill, index) => (
                    <li key={index} className="bill-item">
                        <div key={index} className="bill-item">
                            <div className="bill-date">{bill.latestAction.actionDate}</div> 
                            <span className="bill-title">{bill.title}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BillsComponent;