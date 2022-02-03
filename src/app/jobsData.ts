export class jobsData {
    private jobid: number;
    private jobname: string;
    private educationDetails: string;
    private jobLocation: string;
    private phone: number;
    private address: string;
   

    constructor(jobid: number, jobname: string, phone: number, educationDetails:string, jobLocation:string, address:string) {
      this.jobid = jobid;  
      this.jobname = jobname;
      this.address = address;
      this.phone = phone;
      this.educationDetails = educationDetails;
      this.jobLocation = jobLocation;
    }
   
    getJobid(): number{
        return this.jobid;
    }
    getJobname(): string {
      return this.jobname;
    }
    getAddress(): string {
      return this.address;
    }
    getPhone(): number {
      return this.phone;
    }
    getEducationDetails(): string {
        return this.educationDetails;
      }
    getJobLocation(): string {
        return this.jobLocation;
      }
  }
  