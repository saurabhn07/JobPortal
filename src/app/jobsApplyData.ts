export class jobsApplyData {
    private jobid: number;
    private jobname: string;
    private jsid: number;
   

    constructor(jobid: number, jobname: string, jsid: number) {
      this.jobid = jobid;  
      this.jobname = jobname;
      this.jsid = jsid;
    }
   
    getJobid(): number{
        return this.jobid;
    }
    getJobname(): string {
      return this.jobname;
    }
    getJsid(): number {
      return this.jsid;
    }
   
  }
  