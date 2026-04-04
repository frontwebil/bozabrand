"use client";

import { useState } from "react";
import "./LoginForm.css";

export function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="admin-login">
      <div className="admin-login-card">
        <h2 className="admin-login-title">Admin Panel</h2>

        <form className="admin-login-form">
          <div className="admin-login-group">
            <label>Логін</label>
            <input
              type="text"
              placeholder=""
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>

          <div className="admin-login-group">
            <label>Пароль</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="admin-login-button">
            Увійти
          </button>
        </form>
      </div>
    </div>
  );
}
