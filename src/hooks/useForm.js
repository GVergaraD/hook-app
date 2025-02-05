import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    // const { username, email, password } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const onResetForm = () => {
        // onInputChange({ target: { name: "username", value: "" } });
        // onInputChange({ target: { name: "email", value: "" } });
        // onInputChange({ target: { name: "password", value: "" } });
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        // username,
        // email,
        // password,
    }


}