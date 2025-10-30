const testimonials = [
    {
      photo: "img1.jpg",
      text: "This platform helped me grow my skills and confidence.",
      name: "Alemu Getachew",
      role: "Frontend Learner"
    },
    {
      photo: "img2.jpg",
      text: "I love how simple and effective everything is.",
      name: "Sara Mulu",
      role: "UI/UX Designer"
    },
    {
      photo: "img3.jpg",
      text: "The guidance and practice projects made learning fun.",
      name: "Miki Robel",
      role: "Student Developer"
    }
  ];
  
  let current = 0;
  
  const photo = document.getElementById("photo");
  const text = document.getElementById("text");
  const name = document.getElementById("name");
  const role = document.getElementById("role");
  
  function showTestimonial(index) {
    const item = testimonials[index];
    photo.src = item.photo;
    text.textContent = item.text;
    name.textContent = item.name;
    role.textContent = item.role;
  }
  
  document.getElementById("next").onclick = () => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  };
  
  document.getElementById("prev").onclick = () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
  };
  