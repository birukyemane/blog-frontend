import { redirect } from "react-router-dom";

export const addBlogAction = async ({ request }) => {

    const data = await request.formData();
  
    const submission = {
      firstName: data.get("firstname"),
      lastName: data.get("lastname"),
      about: data.get("about"),
      favColor: data.get("favColor"),
      gender: data.get("gender"),
      email: data.get("email"),
      dob: data.get("date"),
      luckNumber: data.get("luckNumber"),
      courseSatisfaction: data.get("courseSatisfaction"),
      phone: data.get("phone"),
      education: data.get("education"),
      hobbies: data.getAll("hobbies"),
    };

    console.log(submission)
    
   
    // try {
    //   const res = await axios.post("/students", submission);
    //   console.log(res.data);
    // } catch (e) {
    //   return { error: e };
    // }
    return redirect("/blogs");
  };