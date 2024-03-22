import toast from "react-hot-toast";

const useSearchApi = () => {

  const searchTutor = async ({ subjects, languages, standards, experience }) => {
    const query = {
      subjects,
      languages,
      standards,
      experience
    }
    try {
      const res = await fetch(`/api/search/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query)
      });
      const data = await res.json()
      if (data.error) {
        toast.error(data.error); 
        return
      }
    
    return data    
      
    } catch (error) {
      console.error('Error searching tutors:', error);
    }
  }

  const getTutor = async () => {
    try {
      const res = await fetch(`/api/search`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await res.json()
      if (data.error) {
        toast.error(data.error); 
        return
      }
    
    return data    
      
    } catch (error) {
      console.error('Error getting tutors', error);
    }
  }

 
  return {
    searchTutor,
    getTutor
  }
}

export default useSearchApi;
