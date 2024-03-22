import { setUser } from "@/redux/userSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const useTeacherApi = () => {
    const dispatch = useDispatch()

    const signup = async (userData, experties ) => {
        const requestData = {
            ...userData,
            experties: experties 
        };
        try {
            const res = await fetch("/api/teacher/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestData)
            });

            const data = await res.json()

            if (data.error) {
                toast.error(data.error || "Failed to sign up student");
            }
            toast.success("Sign up successfull")
            return data
        } catch (error) {
            console.error("Error signing up student:", error.message);
            throw error;
        }
    };

    const login = async (userData) => {
        try {
            const res = await fetch("/api/teacher/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await res.json()

            if (data.error) {
                toast.error(data.error || "Failed to login");
            }
            return data
        } catch (error) {
            console.error("Error signing up student:", error.message);
            throw error;
        }
    };

    const logout = async () => {

        try {
            await fetch(`/api/teacher/logout`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

        } catch (error) {
            toast.error(error.message || "Failed to update");
        }
    };

    const updateTeacher = async (userData, expertise, availability, achievements, languages, standards, avatar, id) => {
    
        const requestData = {
            ...userData,
            expertise,
            availability,
            achievements,
            languages,
            standards,
            avatar
        }
        try {
            const res = await fetch(`/api/teacher/update-teacher/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestData)
            });

            const data = await res.json()

            if (data.error) {
                toast.error(data.error || "Failed to update");
            }
            dispatch(setUser(data))
        } catch (error) {
            console.error("Error signing up student:", error.message);
            toast.error(error.message || "Failed to update");
        }
    };

    return {
        signup,
        login,
        logout,
        updateTeacher
    };
};

export default useTeacherApi;
