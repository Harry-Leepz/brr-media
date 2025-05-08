export type Staff = {
  name: string;
  role: string;
  email: string;
  deviceType: string;
  driveUsageGB: number;
  lastLogin: string;
  status: string;
  id: number;
};

export type Ticket = {
  id: number;
  issueType: string;
  status: string;
  createdDate: string;
  description: string;
};
