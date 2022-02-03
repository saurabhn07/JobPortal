export class jsData {
    private jsid: number;
    private jsname: string;
    private educationDetails: string;
    private location: string;
    private phone: number;
    private email: string;
    private password: string;
    

    constructor(jsid: number, jsname: string, email: string, password: string, phone: number, educationDetails:string, location:string) {
      this.jsid = jsid;  
      this.jsname = jsname;
      this.email = email;
      this.password = password;
      this.phone = phone;
      this.educationDetails = educationDetails;
      this.location = location;
    }
   
    getJsid(): number{
        return this.jsid;
    }
    getJsname(): string {
      return this.jsname;
    }
    getEmail(): string {
      return this.email;
    }
    getPassword(): string {
      return this.password;
    }
    getPhone(): number {
      return this.phone;
    }
    getEducationDetails(): string {
        return this.educationDetails;
      }
    getLocation(): string {
        return this.location;
      }
  }
  