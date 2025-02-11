import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { TypeUser } from "../types/types";
import { UserContext } from "../context/UserContext";

export const UserProfilePage = () => {
    const {user, setUser} = useContext(UserContext);
    const [userFields, setUserFields] = useState<TypeUser>({firstName: '', lastName: '', email: '', dateOfBirth: ''});
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserFields({
            ...userFields,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(isSuccess){
            alert("Profile updated successfully!");
        }
    }, [isSuccess]);

    const validateEmail = useCallback((email: string) => {
        const emailRegex =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateEmail(userFields.email)) {
            setError("Please enter a valid email address.");
            return; 
        }

        setError(null);
        setUser(userFields);
        setIsSuccess(true); 
    };

    const userFieldsInit = useMemo(() => {
        return user ? `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}` : "";
    }, [user])

    return(
        <div className="user-profile">
            <h1 className="title text-center mb-5">Welcome back{user && `, ${userFieldsInit}`}</h1>
            <form className="user-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input required type="text" id="firstName" name="firstName" value={userFields.firstName} onChange={handleChange} />
                <label htmlFor="lastName">Last Name</label>
                <input required type="text" id="lastName" name="lastName" value={userFields.lastName} onChange={handleChange} /> 
                <label htmlFor="email">Email {error && <span className="error">{error}</span>}</label>
                <input required type="email" id="email" name="email" value={userFields.email} onChange={handleChange} />
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input type="date" id="dateOfBirth" name="dateOfBirth" value={userFields.dateOfBirth} onChange={handleChange} />
                <button className="submit-btn mt-3" type="submit">Update Profile</button> 
            </form>  
        </div>
    )
}