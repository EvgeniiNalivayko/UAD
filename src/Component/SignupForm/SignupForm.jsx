import React, {useState} from 'react';
import classes from './SignupForm.module.scss'


const SignupForm = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);


        const handleCheckboxChange = (event) => {
            setIsCheckboxChecked(event.target.checked);
        };

        function onSubmit(event) {
            event.preventDefault();

            const formData = {
                email,
                password,
            };


            fetch('https://example.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Дані успішно відправлені:', data);
                })
                .catch(error => {
                    console.error('Помилка під час відправлення:', error);
                });
        }


        return (
            <form className={classes.signupForm} onSubmit={onSubmit}>
                <div className={classes.wrapperInputs}>
                    <h2>Sign Up</h2>
                    <div className={classes.line}></div>
                    <input
                        type="email"
                        id="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label className={classes.checkbox} htmlFor="termsAgreement">
                        <input checked={isCheckboxChecked}
                               onChange={handleCheckboxChange}
                               type="checkbox"
                               id="termsAgreement"/>
                        <span>I agree to the <a>Privacy Policy</a> and the <a>Termsof Service</a> and I confirm that I am eighteen (18) years of age or older.</span>
                    </label>
                    <button disabled={!isCheckboxChecked} onSubmit={onSubmit} className={'btn-primary'}>Create profile</button>
                </div>
                <p className={classes.reCaptcha}>
                    This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy"
                                                                          target="_blank" rel="noopener noreferrer">Privacy
                    Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms
                    of Service</a> apply.
                </p>
            </form>
        );
    }
;

export default SignupForm;
