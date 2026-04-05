"use client";

import { useState } from "react";
import "./LoginForm.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    const res = await signIn("admin-login", {
      login,
      password,
      redirect: false,
    });

    console.log(res);

    if (res?.error) {
      setError("Невірний логін або пароль");
      return;
    }

    if (res?.ok) {
      router.replace("/admin-boza/cases");
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login-card">
        <h2 className="admin-login-title">Admin Panel</h2>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <div className="admin-login-group">
            <label>Логін</label>
            <input
              type="text"
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

          {error && <p className="admin-login-error">{error}</p>}

          <button type="submit" className="admin-login-button">
            Увійти
          </button>
        </form>
      </div>
    </div>
  );
}
