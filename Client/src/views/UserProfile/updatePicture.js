export const updatePicture = async (email, pic) => {
    try {
      const response = await fetch('https://ejemplo.com/updatePic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, pic })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  
  //este URL conectaria con el back