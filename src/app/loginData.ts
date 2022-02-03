export class loginData {
    private email: string;
    private password: string;
  static email: string;
    

    constructor(email: string, password: string) {
      this.email = email;
      this.password = password;
    }
   
    getEmail(): string {
      return this.email;
    }
    getPassword(): string {
      return this.password;
    }
   
  }
  