function Marquee(el, speed, num) {
    const marquee = document.querySelector(el);
    if(marquee) {
      const skills = marquee.children;
      const cloneSkills = [...skills, ...skills];
    
      // Clear the original content and append the cloned skills
      marquee.innerHTML = '';
      cloneSkills.forEach(skill => marquee.appendChild(skill));
    
      let position = 0;
      const step = 1;
    
      const moveMarquee = () => {
        position -= step;
        marquee.style.transform = `translateX(${position / num}px)`;
    
        // Check if we've reached the end and reset position
        if (position < -marquee.offsetWidth ) {
          position = 0;
        }
      };
    
      setInterval(moveMarquee, speed * 1000);
    }
}
  

window.addEventListener('load', () => {
  Marquee('.testimonial--marquee', 0.2, 1);
  
  if(window.innerWidth > 950 ) {
    Marquee('.marquee', 0.1, 0.7);
  }
  
  
  if(window.innerWidth < 1060) {
    Marquee('.labs--skills', 0.05, 0.55);
  }

  if(window.innerWidth <= 950) {
    Marquee('.featured__flex', 0.1, 1);
    // Marquee('.labs--skills', 0.05, 0.6);
  }
});