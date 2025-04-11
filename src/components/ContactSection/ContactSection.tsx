'use client'
import React, { useState } from 'react';
import styles from './ContactSection.module.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setIsLoading(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Here you would normally send the data to your API
        console.log('Form submitted:', formData);
        
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsLoading(false);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to take your marketing to the next level?
          </h2>
          <p className={styles.description}>
            Want to boost your website in Google's eyes? We can help you 
            acquire quality external links and create a strong link profile.
          </p>
          
          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <div className={styles.checkIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33333 12.9883L5.58917 10.2442L4.41083 11.4225L8.33333 15.345L15.5892 8.08917L14.4108 6.91083L8.33333 12.9883Z" fill="#4CAF50"/>
                </svg>
              </div>
              <p>We create a customized link-building strategy</p>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.checkIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33333 12.9883L5.58917 10.2442L4.41083 11.4225L8.33333 15.345L15.5892 8.08917L14.4108 6.91083L8.33333 12.9883Z" fill="#4CAF50"/>
                </svg>
              </div>
              <p>We build backlinks from diversed sources</p>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.checkIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33333 12.9883L5.58917 10.2442L4.41083 11.4225L8.33333 15.345L15.5892 8.08917L14.4108 6.91083L8.33333 12.9883Z" fill="#4CAF50"/>
                </svg>
              </div>
              <p>We submit links for indexation</p>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.checkIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33333 12.9883L5.58917 10.2442L4.41083 11.4225L8.33333 15.345L15.5892 8.08917L14.4108 6.91083L8.33333 12.9883Z" fill="#4CAF50"/>
                </svg>
              </div>
              <p>We focus on quality rather than quantity</p>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.checkIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33333 12.9883L5.58917 10.2442L4.41083 11.4225L8.33333 15.345L15.5892 8.08917L14.4108 6.91083L8.33333 12.9883Z" fill="#4CAF50"/>
                </svg>
              </div>
              <p>We research your competition</p>
            </div>
          </div>
        </div>
        
        <div className={styles.formContainer}>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Contact WITH US</h3>    
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className={`${styles.formInput} ${formErrors.firstName ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
                {formErrors.firstName && <span className={styles.errorMessage}>{formErrors.firstName}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name*"
                  className={`${styles.formInput} ${formErrors.lastName ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
                {formErrors.lastName && <span className={styles.errorMessage}>{formErrors.lastName}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Business Email Address*"
                  className={`${styles.formInput} ${formErrors.email ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
                {formErrors.email && <span className={styles.errorMessage}>{formErrors.email}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message*"
                  className={`${styles.formTextarea} ${formErrors.message ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
                {formErrors.message && <span className={styles.errorMessage}>{formErrors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isLoading ? 'Sending...' : 'Send'}
                {!isLoading && (
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.arrowIcon}
                  >
                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                  </svg>
                )}
              </button>
              
              <p className={styles.disclaimer}>
                By clicking next, you agree to receive communications from Enzill in accordance with our Privacy Policy.
              </p>
              
              {isSubmitted && (
                <div className={styles.successMessage}>
                  Thank you! Your message has been sent. We'll get back to you shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;