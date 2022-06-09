export class Course {
  static filter(arg0: boolean): string[] {
    throw new Error('Method not implemented.');
  }
  static choice: number;
  constructor(
    public courseName: string,
    public cost: number,
    public type: string,
    public medium: string,
    public trainer?: string
  ) {}
}
