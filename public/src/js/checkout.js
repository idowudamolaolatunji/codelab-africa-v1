document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.checkout__form');
    const tabs = document.querySelectorAll('.tab');
    // const images = document.querySelectorAll('.checkout--image');
    const nextButtons = document.querySelectorAll('[data-tab]');
  
    // Initialize the form to start with the first tab
    let currentTab = 0;
    showTab(currentTab);
  
    nextButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
  
        const nextTab = parseInt(button.getAttribute('data-tab'));
  
        if (nextTab > currentTab) {
          if (validateTab(currentTab)) {
            showTab(nextTab);
            currentTab = nextTab;
          }
        } else {
          showTab(nextTab);
          currentTab = nextTab;
        }
      });
    });
  
    // Function to show a specific tab
    function showTab(tabIndex) {
      tabs.forEach((tab, index) => {
        if (index === tabIndex) {
          tab.style.display = 'grid';
        } else {
          tab.style.display = 'none';
        }
      });
    }
  
    // Function to validate form fields in the current tab (you can add your validation logic)
    function validateTab(tabIndex) {
      // Add your validation logic here
      return true; // Return true if validation passes, otherwise return false
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateTab(currentTab)) {

            const formData = new FormData(form);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            const backendUrl = '/submit-application';

            fetch(backendUrl, {
                method: 'POST',
                body: JSON.stringify(formObject),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                if (response.ok) {
                    // Handle successful form submission
                    console.log('Form submitted successfully');
                } else {
                    // Handle form submission error
                    console.error('Form submission error');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    });
});