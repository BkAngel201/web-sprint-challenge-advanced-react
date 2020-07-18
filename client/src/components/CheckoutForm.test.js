import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByRole } = render(<CheckoutForm/>)
    
    expect(getByRole('heading')).toHaveTextContent('Checkout Form')
});

test("form shows success message on submit with form details", async () => {
    const { getByTestId } = render(<CheckoutForm/>)

    const submitButton = getByTestId('submit')
    const firstName = getByTestId("first-name")
    fireEvent.change(firstName, {
        target: {value: "Angel"}
    })
    const lastName = getByTestId("last-name")
    fireEvent.change(lastName, {
        target: {value: "Couso"}
    })
    const address = getByTestId("address")
    fireEvent.change(address, {
        target: {value: "3901 NW 177th St"}
    })
    const city = getByTestId("city")
    fireEvent.change(city, {
        target: {value: "Miami"}
    })
    const state = getByTestId("state")
    fireEvent.change(state, {
        target: {value: "FL"}
    })
    const zip = getByTestId("zip")
    fireEvent.change(zip, {
        target: {value: "33055"}
    })

    act(() => {
        fireEvent.click(submitButton);
    });
    await waitFor(() => {
        return getByTestId('successMessage')
    })
    .then(res => {
        expect(res).toHaveTextContent("You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to:Angel Couso3901 NW 177th StMiami, FL 33055")
    })
      
});
