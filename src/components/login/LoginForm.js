import React from 'react';
import './styles.css';

const Login = () => {
	const containerRef = React.useRef(null);

	const onClickHandler = (e, type) => {
		switch (type) {
			case 'signup':
				containerRef.current.classList.add('right-panel-active');
				break;
			case 'signin':
				containerRef.current.classList.remove('right-panel-active');
				break;
			default:
				break;
		}
	};

	return (
		<div className="container" id="container" ref={containerRef}>
			<div className="form-container sign-up-container">
				<form action="#">
					<h1>Create Account</h1>
					<div className="social-container">
						<a href="/" className="social">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="/" className="social">
							<i className="fab fa-google-plus-g"></i>
						</a>
						<a href="/" className="social">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
					<span>or use your email for registration</span>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button>Sign Up</button>
				</form>
			</div>
			<div className="form-container sign-in-container">
				<form action="#">
					<h1>Sign in</h1>
					<div className="social-container">
						<a href="/" className="social">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="/" className="social">
							<i className="fab fa-google-plus-g"></i>
						</a>
						<a href="/" className="social">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
					<span>or use your account</span>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<a href="/">Forgot your password?</a>
					<button>Sign In</button>
				</form>
			</div>
			<div className="overlay-container">
				<div className="overlay">
					<div className="overlay-panel overlay-left">
						<h1>Welcome Back!</h1>
						<p>
							To keep connected with us please login with your personal info
						</p>
						<button
							className="ghost"
							id="signIn"
							onClick={(e) => onClickHandler(e, 'signin')}
						>
							Sign In
						</button>
					</div>
					<div className="overlay-panel overlay-right">
						<h1>Hello, Friend!</h1>
						<p>Enter your personal details and start journey with us</p>
						<button
							className="ghost"
							id="signUp"
							onClick={(e) => onClickHandler(e, 'signup')}
						>
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
