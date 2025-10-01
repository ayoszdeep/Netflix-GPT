export const checkValidData = (email, password,confirmPassword) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    
    
    if (!emailRegex) {
       
        return "Email is invalid";
    }
    if (!passwordRegex) {
        return "Password must be at least 8 characters long and contain at least one letter and one number";
    }
    if (confirmPassword !== null && password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return "Password and Confirm Password do not match";
    }
    
    return null;
}
