import { JwtPayload, jwtDecode } from "jwt-decode";


declare module "jwt-decode" {
  export interface JwtPayload {
    id: number;
    email: string;
  }
}

interface UserData {
  name: string;
  email: string;
  password: string;
}

class AuthService {

  /**
   * Handles user registration by sending a POST request to the /api/register endpoint.
   * @param {UserData} userData - An object containing the user's registration information.
   * @returns {Promise<{ token: string; message?: string }>} A promise that resolves to the response object containing
   * @throws {Error} An error if registration fails, with a message indicating the reason for the failure.
   */
  async register(
    userData: UserData,
  ): Promise<{ token: string; message?: string }> {
    const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Registration failed");
    }

    this.setToken(result.token);
    return result;
  }

  /**
   * Handles user login by sending a POST request to the /api/login endpoint.
   * @param {string} email - User's email address.
   * @param {string} password - User's password.
   * @returns {Promise<string>} A promise that resolves to a string token if the login is successful.
   * @throws {Error} An error if login fails.
   **/
  async login(email: string, password: string): Promise<string> {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Login failed");
    }

    this.setToken(result.token);
    return result.token;
  }

  setToken(token: string) {
    localStorage.setItem("jwtToken", token);
  }



  getProfile(): JwtPayload | null {
    const token = this.getToken(); 
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return null; 
  }

  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    if (!token || token.split(".").length !== 3) {
      console.log("Invalid token format");
      return true;
    }

    try {
      const decoded: JwtPayload = jwtDecode<JwtPayload>(token);
      let expirationTime = 0;

      if (decoded.exp) {
        expirationTime = decoded.exp * 1000;
      }
      return Date.now() >= expirationTime; 
    } catch (err) {
      console.log(err);
      return true;
    }
  }

  getToken(): string | null {
    return localStorage.getItem("jwtToken") || null;
  }}

export default new AuthService();




