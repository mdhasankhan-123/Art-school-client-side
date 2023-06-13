import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckOutPayment from "../../../Components/CheckOutPayment/CheckOutPayment";
import { Elements } from "@stripe/react-stripe-js";
import usePaymentClass from "../../../Hooks/usePaymentClass";


// TODO: Implement published key of stripe
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Payment = () => {
    const [selectedClass] = usePaymentClass();
    console.log(selectedClass)

    return (
        <div className="w-11/12 mx-auto">
            <SectionTitle mainHeading={"Payment Now"} topHeading={"Payment Get way"}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutPayment></CheckOutPayment>
            </Elements>
        </div>
    );
};

export default Payment;