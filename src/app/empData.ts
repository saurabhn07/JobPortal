export class EmpData {
    private eid: number;
    private ename: string;
    private email: string;
    private password: string;
    private phone: number;
  
    constructor(eid:number, ename: string, email: string, password: string, phone: number) {
      this.eid = eid;  
      this.ename = ename;
      this.email = email;
      this.password = password;
      this.phone = phone;
    }
   
    getEid(): number{
        return this.eid;
    }
    getEname(): string {
      return this.ename;
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
  }
  