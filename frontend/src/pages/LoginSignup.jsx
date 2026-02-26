import { useState } from "react";
import "./LoginSignup.css";

export default function LoginSignup({ onClose, onSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // TODO: call register API
      onSuccess?.();
    } else {
      // TODO: call login API
      onSuccess?.();
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Left panel - form */}
        <div className="auth-panel auth-panel-form">
          <div className="auth-form-header">
            <button type="button" className="auth-brand auth-brand-btn" onClick={onClose} aria-label="Back to home">
              <span className="auth-brand-icon">H</span>
              <span className="auth-brand-name">HustleUp</span>
            </button>
            <button type="button" className="auth-close" onClick={onClose} aria-label="Close">
              ×
            </button>
          </div>

          <div className="auth-form-body">
            <h1 className="auth-title">
              {isSignUp ? "Create Account" : "Sign in to HustleUp"}
            </h1>

            <div className="auth-social">
              <button type="button" className="auth-social-btn" aria-label="Facebook">
                <span className="auth-social-f">f</span>
              </button>
              <button type="button" className="auth-social-btn" aria-label="Google">
                <span className="auth-social-g">G+</span>
              </button>
              <button type="button" className="auth-social-btn" aria-label="LinkedIn">
                <span className="auth-social-in">in</span>
              </button>
            </div>

            <p className="auth-sep">
              or use your {isSignUp ? "email for registration" : "email account"}:
            </p>

            <form onSubmit={handleSubmit} className="auth-form">
              {isSignUp && (
                <div className="auth-input-wrap">
                  <span className="auth-input-icon" aria-hidden="true">N</span>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="auth-input"
                  />
                </div>
              )}
              <div className="auth-input-wrap">
                <span className="auth-input-icon" aria-hidden="true">E</span>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="auth-input"
                  required
                />
              </div>
              <div className="auth-input-wrap">
                <span className="auth-input-icon" aria-hidden="true">P</span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="auth-input"
                  required
                />
              </div>
              {!isSignUp && (
                <div className="auth-forgot">
                  <button type="button" className="auth-forgot-link">
                    Forgot your password?
                  </button>
                </div>
              )}
              <button type="submit" className="auth-submit-btn">
                {isSignUp ? "SIGN UP" : "SIGN IN"}
              </button>
            </form>
          </div>
        </div>

        {/* Right panel - CTA */}
        <div className="auth-panel auth-panel-cta">
          <div className="auth-cta-pattern" />
          <div className="auth-cta-content">
            <h2 className="auth-cta-title">
              {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
            </h2>
            <p className="auth-cta-desc">
              {isSignUp
                ? "To keep connected with us please login with your personal info"
                : "Enter your personal details and start your journey with us"}
            </p>
            <button
              type="button"
              className="auth-cta-btn"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "SIGN IN" : "SIGN UP"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
