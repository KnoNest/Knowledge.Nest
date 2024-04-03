import toast from "react-hot-toast"

const useFeedBackapi = () => {

    const plateformFeedback = async (content) => {

        try {
            await fetch("/api/feedback/plate-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(content)
            })
        } catch (error) {
            toast.error("Something went wrong while")
        }
    }

    return {
        plateformFeedback
    }
}

export default useFeedBackapi