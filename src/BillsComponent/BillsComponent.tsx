import { FC, useEffect, useState } from "react";
import { Bill, fetchBillsAPI } from "./BillsAPI";
import { useDispatch } from "react-redux";
import { setBills } from "./BillsSlice";
const BillsComponent:FC = () => {
    const [billsArray, setBillsArray] = useState<Bill[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBills = async () => {
            const billsResponse = await fetchBillsAPI(0);
            if (billsResponse) {
                setBillsArray(billsResponse);
                dispatch(setBills({bills:billsResponse, page: 0}));
            }
        };
        fetchBills();
    }, [dispatch]);

    useEffect(() => {
        if (billsArray.length > 0) {
            dispatch(setBills({                
                bills: billsArray,
                // bills: billsResponse,
                page: 0
            }));
        }
    },[billsArray])
    return (
        <div className="bills-list-container">
        </div>
    )
}

export default BillsComponent;