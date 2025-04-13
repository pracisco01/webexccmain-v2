// Form validation and webhook submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const submitButton = form.querySelector('.btn-primary');
  const formFields = form.querySelectorAll('input[required], textarea[required]');
  
  // Function to check if all required fields are valid
  function validateForm() {
    let isValid = true;
    formFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
      }
    });
    return isValid;
  }

  // Function to enable/disable submit button
  function updateSubmitButton() {
    if (validateForm()) {
      submitButton.disabled = false;
      submitButton.style.opacity = '1';
      submitButton.style.pointerEvents = 'auto';
    } else {
      submitButton.disabled = true;
      submitButton.style.opacity = '0.5';
      submitButton.style.pointerEvents = 'none';
    }
  }

  // Add input event listeners to all form fields
  formFields.forEach(field => {
    field.addEventListener('input', updateSubmitButton);
  });

  // Handle form submission
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Collect form data
    const formData = {
      name: form.querySelector('input[name="name"]').value,
      email: form.querySelector('input[name="email"]').value,
      subject: form.querySelector('input[name="subject"]').value,
      message: form.querySelector('textarea[name="message"]').value
    };

    try {
      // Send data to webhook
      const response = await fetch('YOUR_WEBHOOK_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Show success message
        alert('Email sent successfully!');
        form.reset();
        updateSubmitButton();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email. Please try again.');
    }
  });

  // Initial button state
  updateSubmitButton();
}); 